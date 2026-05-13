"""
Device Catalog Scraper — GSMArena (phones) + NotebookCheck (laptops)
===================================================================
Usage:
  1. pip install beautifulsoup4 requests lxml
  2. python scripts/scrape-device-catalog.py --category phones
  3. python scripts/scrape-device-catalog.py --category laptops
  4. python scripts/scrape-device-catalog.py --all

Output: JSON files in scripts/scraped_data/ that can be imported via
         scripts/import-scraped-data.ts
"""

import argparse
import json
import os
import re
import sys
import time
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE_DIR = os.path.join(os.path.dirname(__file__), "scraped_data")
os.makedirs(BASE_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

DELAY = 1.5  # seconds between requests — be polite


# ─── GSMArena Phone Scraper ─────────────────────────────────────────────────

def scrape_gsmarena_brands():
    """Get all phone brands from GSMArena."""
    url = "https://www.gsmarena.com/makers.php3"
    print(f"[GSMArena] Fetching brands from {url}")
    resp = requests.get(url, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(resp.text, "lxml")

    brands = []
    for table in soup.select("table"):
        for link in table.select("a"):
            href = link.get("href", "")
            name = link.get_text(strip=True)
            if href and name:
                brands.append({"name": name, "url": urljoin(url, href)})
    print(f"[GSMArena] Found {len(brands)} brands")
    return brands


def scrape_gsmarena_phones(brand_url: str, max_pages: int = 5):
    """Scrape phones for a brand, returning families (series) and models."""
    devices = []

    for page in range(1, max_pages + 1):
        page_url = brand_url.replace(".php", f"-f-{page}.php") if page > 1 else brand_url
        print(f"  [GSMArena] Page {page}: {page_url}")
        try:
            resp = requests.get(page_url, headers=HEADERS, timeout=30)
            resp.raise_for_status()
        except Exception as e:
            print(f"  [GSMArena] Error: {e}")
            break

        soup = BeautifulSoup(resp.text, "lxml")

        # Each phone is in a <li> with class "article"
        phones = soup.select("ul li.article a")
        if not phones:
            phones = soup.select("div.makers li a")
        if not phones:
            break

        for phone in phones:
            name = phone.get_text(strip=True)
            href = phone.get("href", "")
            if name:
                # Extract series from name: e.g. "Samsung Galaxy S24 Ultra" -> "Galaxy S"
                series = extract_series(name)
                devices.append({
                    "name": name,
                    "series": series,
                    "url": urljoin(page_url, href),
                })

        # Check for next page
        next_link = soup.select_one("a.pages-next, a[title='Next page']")
        if not next_link:
            break

        time.sleep(DELAY)

    return devices


def extract_series(device_name: str) -> str:
    """Guess the series/family from a device name."""
    name = device_name.lower()

    # iPhone
    iphone_match = re.search(r"(iphone\s+\d+|iphone\s+se|iphone\s+\d+\s+pro|iphone\s+\d+\s+pro\s+max)", name)
    if iphone_match:
        return iphone_match.group(1).title()

    # Samsung Galaxy
    galaxy_match = re.search(
        r"(galaxy\s+(s|a|m|f|j|note|z\s+fold|z\s+flip|xcover))", name
    )
    if galaxy_match:
        base = galaxy_match.group(1).title()
        return f"Galaxy {base.split()[-1].title()} Series"

    # General: take first 2-3 words as series
    parts = device_name.split()
    if len(parts) >= 3:
        return " ".join(parts[:3]).title()
    return device_name.title()


# ─── NotebookCheck Laptop Scraper ────────────────────────────────────────────

def scrape_notebookcheck_brands():
    """Get laptop brands from NotebookCheck."""
    url = "https://www.notebookcheck.net/Laptop-Brands.177.0.html"
    print(f"[NBC] Fetching brands from {url}")
    resp = requests.get(url, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(resp.text, "lxml")

    brands = []
    for link in soup.select("div.brandlist a"):
        href = link.get("href", "")
        name = link.get_text(strip=True)
        if href and name and name not in ("", "All"):
            brands.append({"name": name, "url": urljoin(url, href)})
    print(f"[NBC] Found {len(brands)} brands")
    return brands


def scrape_nbc_series(brand_url: str, max_pages: int = 3):
    """Scrape laptop series/models for a brand."""
    devices = []

    for page in range(1, max_pages + 1):
        page_url = f"{brand_url}?page={page}" if page > 1 else brand_url
        print(f"  [NBC] Page {page}: {page_url}")
        try:
            resp = requests.get(page_url, headers=HEADERS, timeout=30)
            resp.raise_for_status()
        except Exception as e:
            print(f"  [NBC] Error: {e}")
            break

        soup = BeautifulSoup(resp.text, "lxml")
        articles = soup.select("div.laptopslist article, div.listarticle")
        if not articles:
            break

        for article in articles:
            title_el = article.select_one("h3 a, a.aname, .title a")
            if not title_el:
                continue
            name = title_el.get_text(strip=True)
            if not name:
                continue

            # Extract series (e.g. "Dell Latitude 7440" -> "Latitude")
            series = extract_laptop_series(name)
            devices.append({
                "name": name,
                "series": series,
            })

        time.sleep(DELAY)

    return devices


def extract_laptop_series(name: str) -> str:
    """Extract laptop series like 'Latitude', 'ThinkPad', 'Pavilion'."""
    known_series = [
        "ThinkPad", "IdeaPad", "Legion", "Yoga", "LOQ",
        "Latitude", "Inspiron", "XPS", "Precision", "Alienware", "Vostro",
        "Pavilion", "ProBook", "EliteBook", "Spectre", "Envy", "Omen", "Victus", "ZBook",
        "VivoBook", "ZenBook", "TUF", "ROG", "ExpertBook",
        "Aspire", "Swift", "Nitro", "Predator", "TravelMate",
        "MacBook Air", "MacBook Pro",
        "Surface Laptop", "Surface Pro", "Surface Book",
        "Galaxy Book",
        "MateBook",
        "Blade",
        "Gram",
    ]
    name_lower = name
    for series in known_series:
        if series.lower() in name_lower:
            return series
    parts = name.split()
    return parts[1] if len(parts) >= 2 else parts[0]


# ─── Wikipedia Components Scraper ────────────────────────────────────────────

def scrape_wiki_laptop_specs(model_name: str) -> dict:
    """
    Attempt to get CPU, RAM, GPU info from Wikipedia for a specific model.
    Returns empty dict if not found.
    """
    search_name = model_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/wiki/{search_name}"
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        if resp.status_code != 200:
            return {}
        soup = BeautifulSoup(resp.text, "lxml")
        info_box = soup.select_one("table.infobox")
        if not info_box:
            return {}

        specs = {}
        for row in info_box.select("tr"):
            th = row.select_one("th")
            td = row.select_one("td")
            if not th or not td:
                continue
            label = th.get_text(strip=True).lower()
            value = td.get_text(strip=True)
            if "processor" in label or "cpu" in label:
                specs["cpu"] = value
            if "memory" in label or "ram" in label:
                specs["ram"] = value
            if "graphics" in label or "gpu" in label:
                specs["gpu"] = value
            if "storage" in label or "hard drive" in label or "ssd" in label:
                specs["storage"] = value
            if "display" in label or "screen" in label:
                specs["display"] = value
        return specs
    except Exception:
        return {}


# ─── Main ───────────────────────────────────────────────────────────────────

def scrape_phones():
    """Scrape all phone brands and models from GSMArena."""
    output = {"category": "phone", "brands": []}
    brands = scrape_gsmarena_brands()

    for brand in brands[:10]:  # first 10 brands max to stay reasonable
        print(f"\n[GSMArena] Scraping {brand['name']}...")
        phones = scrape_gsmarena_phones(brand["url"])
        if not phones:
            continue

        # Group by series
        series_map = {}
        for phone in phones:
            series_map.setdefault(phone["series"], []).append(phone["name"])

        brand_entry = {
            "name": brand["name"],
            "families": [
                {"name": series, "models": models}
                for series, models in series_map.items()
            ],
        }
        output["brands"].append(brand_entry)
        print(f"  -> {len(phones)} devices, {len(brand_entry['families'])} series")

        with open(os.path.join(BASE_DIR, "phones_partial.json"), "w") as f:
            json.dump(output, f, indent=2, ensure_ascii=False)

        time.sleep(DELAY)

    with open(os.path.join(BASE_DIR, "phones.json"), "w") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"\n[GSMArena] Done. {sum(len(b['families']) for b in output['brands'])} series saved")


def scrape_laptops():
    """Scrape laptop brands and series from NotebookCheck."""
    output = {"category": "laptop", "brands": []}
    brands = scrape_notebookcheck_brands()

    for brand in brands[:10]:  # first 10 max
        print(f"\n[NBC] Scraping {brand['name']}...")
        devices = scrape_nbc_series(brand["url"])
        if not devices:
            continue

        series_map = {}
        for device in devices:
            series_map.setdefault(device["series"], []).append(device["name"])

        brand_entry = {
            "name": brand["name"],
            "families": [
                {"name": series, "models": models}
                for series, models in series_map.items()
            ],
        }
        output["brands"].append(brand_entry)

        with open(os.path.join(BASE_DIR, "laptops_partial.json"), "w") as f:
            json.dump(output, f, indent=2, ensure_ascii=False)

        time.sleep(DELAY)

    with open(os.path.join(BASE_DIR, "laptops.json"), "w") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"\n[NBC] Done.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Scrape device catalog data")
    parser.add_argument("--category", choices=["phones", "laptops", "all"], default="all")
    args = parser.parse_args()

    if args.category in ("phones", "all"):
        scrape_phones()
    if args.category in ("laptops", "all"):
        scrape_laptops()

    print(f"\nFiles saved to {BASE_DIR}/")
    print("Next: npx tsx scripts/import-scraped-data.ts")
