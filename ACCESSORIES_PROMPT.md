# REPAIRE — Accessories Categories Generation Prompt for ChatGPT

## Goal

Generate a complete category tree for accessories found in an electronics repair shop. No items, no brands, no prices — just the category structure. The shop owner fills in items themselves.

## Database Schema

The system has `AccessoryCategory` — an unlimited-depth tree with `parentId` self-relation.

## Output Format

Generate a single JSON file with only nested categories. No `items` array anywhere.

```json
{
  "generated_at": "2026-05-13",
  "source": "Accessories categories for REPAIRE repair shop management",
  "categories": [
    {
      "name": "Category Root Name",
      "children": [
        {
          "name": "Subcategory",
          "children": [
            {
              "name": "Sub-subcategory",
              "children": [
                {
                  "name": "Leaf category"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

**RULES:**
- Categories only — NO `items` field anywhere
- No prices, no brands, no references
- Deep enough to be useful: cables need length variants (0.5m, 1m, 1.5m, 3m, 5m), chargers need wattage variants (45W, 65W, 90W, etc.)
- Leaf categories are where items will be added later by the shop
- Max 5-6 levels deep, usually 3-4 is enough

## Coverage Requirements

Cover ALL of these category families completely:

### CÂBLES
- Audio: Jack 3.5mm (Mâle-Mâle, Mâle-Femelle, Femelle-Femelle) × lengths, Jack 6.35mm, RCA, Optical, XLR
- USB: USB-A to USB-B, USB-A to Micro USB, USB-A to Mini USB, USB-A to USB-C, USB-C to USB-C, USB-C to Lightning, USB-C to HDMI, USB-C to VGA, USB-C to Ethernet, USB-C to USB-A (OTG), USB 3.0 extension, USB 2.0 extension × lengths
- Réseau: Cat5e UTP, Cat5e STP, Cat6 UTP, Cat6 STP, Cat7 STP, Cat8 STP, RJ45 coupler, RJ45 keystone × lengths
- Vidéo: HDMI 2.0, HDMI 2.1, DisplayPort, VGA, DVI, Mini DisplayPort, Thunderbolt 4 × lengths
- Alimentation: C5, C7, C13, C19, extension, multiprise
- Adaptateurs Audio/Vidéo: HDMI→VGA, VGA→HDMI, DP→HDMI, USB-C→HDMI, USB-C→3.5mm, Lightning→3.5mm, USB-C hub
- Spécialisés: Coaxial, Câble enceinte, Nappe IDC/ribbon laptop, SATA data, SATA power, Molex, eSATA, M.2, Antenne WiFi laptop

### CHARGEURS
- Téléphone: USB-A 5W/10W/18W, USB-C 20W/30W/40W, Double port, GaN 65W/100W/120W/150W/200W
- Ordinateur portable: Dell (45W/65W/90W/130W/180W/240W), HP (45W/65W/90W/120W/150W/200W), Lenovo (45W/65W/90W/120W/135W/170W/230W), Apple MagSafe 1/2/3, Apple USB-C 30W/67W/87W/96W/140W, Asus, Acer, MSI, Samsung, Huawei, Universel USB-C 65W/100W
- Voiture: USB-A simple, USB-C simple, Double USB-A, USB-A+USB-C, Fast charge QC3.0/PD, Multi-ports
- Sans fil: Pad simple, Pad duo, Support simple, Support duo, Support voiture, 3-en-1
- Batteries externes: 5000mAh/10000mAh/20000mAh/30000mAh

### BATTERIES
- Téléphone: iPhone (all models), Samsung Galaxy S/A/Note, Xiaomi Redmi Note/Mi, Huawei P/Mate, Oppo, Realme
- Ordinateur portable: Dell Latitude/Inspiron/XPS/Precision, HP ProBook/EliteBook/Pavilion/Envy, Lenovo ThinkPad T/X/L/E/IdeaPad, Apple MacBook (all models), Asus, Acer, MSI, Samsung, Huawei, Microsoft Surface
- Autres: UPS 12V 7Ah/9Ah/18Ah/26Ah, CMOS CR2032/CR2016/CR2025, 18650/21700, AA/AAA rechargeable

### PROTECTIONS D'ÉCRAN
- Verre trempé: iPhone (all models), Samsung Galaxy S/A/Note, Xiaomi, Huawei, Oppo, Realme, iPad, Samsung Tab
- Films: TPU, Hydrogel, PET (same models)

### COQUES ET HOUSSES
- Coques téléphone: Silicone, TPU, Hard, Cuir, Portefeuille, Rugged, Clear — iPhone all models, Samsung all, Xiaomi, Huawei, Oppo, Realme
- Housses laptop: 11.6"/13.3"/14"/15.6"/16"/17.3" — Néoprène, Cuir, Rembourré
- Étuis tablette: iPad, Samsung Tab, Huawei MatePad — Folio, Clavier, Rugged
- Filtres confidentialité laptop: 13.3"/14"/15.6"/16"

### AUDIO
- Écouteurs filaires: Intra-auriculaires, Supra-auriculaires, Cirum-auriculaires, Écouteurs — Jack 3.5mm/USB-C/Lightning
- Écouteurs sans fil: TWS, Neckband, Casque Bluetooth
- Enceintes: Bluetooth portable, PC, Soundbar, Enceinte connectée
- Microphones: Lavalier, USB condensateur, Dynamique, Casque-micro

### PÉRIPHÉRIQUES D'ENTRÉE
- Souris: USB Filaire, USB-C Filaire, Sans fil 2.4GHz, Bluetooth, BT+2.4GHz, Ergonomique, Verticale, Gaming
- Claviers: USB Filaire, Sans fil 2.4GHz, Bluetooth, BT+2.4GHz, Mécanique, Membrane, Ergo, Gaming, Pavé numérique, Combo clavier+souris
- Tapis de souris: Standard, XXL bureau, Gaming, Avec repose-poignet

### STOCKAGE
- Clés USB: USB-A, USB-C, Double USB-A+USB-C, OTG — 8/16/32/64/128/256/512GB/1TB
- Cartes mémoire: MicroSD (Class10/U1/U3/V30/V60/V90), SD (standard/HC/XC), CF, CFexpress — 16/32/64/128/256/512GB/1TB
- SSD: SATA III 2.5", M.2 SATA, M.2 NVMe, NVMe PCIe 3.0/4.0/5.0, Externe USB-C — 120/240/480/500GB/1/2/4TB
- HDD: 2.5" portable (500GB/1/2/4/5TB), 3.5" desktop (1/2/4/6/8/10TB), Externe desktop
- Boîtiers SSD/HDD: SATA→USB-C, NVMe→USB-C, Double SATA+NVMe, 2 baies, RAID
- Lecteurs cartes: USB-A, USB-C, Multi-cartes, Universel

### RÉSEAU
- Routeurs: WiFi 5 AC, WiFi 6 AX, WiFi 6E, WiFi 7, 4G/5G mobile, Voyage
- Switches: 5/8/16/24 ports, PoE, Géré/Non géré
- Points d'accès: Mural, Plafond, Extérieur, Mesh, WiFi 6/6E
- Adaptateurs: USB WiFi AC/AX, USB Bluetooth 4.0/5.0/5.1/5.2/5.3, USB Ethernet 100Mbps/Gigabit/2.5G, CPL 500Mbps/1Gbps/2Gbps
- Outils réseau: Pince à sertir RJ45, Testeur câble, Outil punch-down, Prise RJ45, Keystone, Faceplate, Panneau de brassage

### CONSOMMABLES IMPRIMANTE
- Toners: HP (LaserJet/LaserJet Pro/Neverstop), Canon (i-SENSYS/imageCLASS), Samsung (Xpress/ProXpress), Brother (HL/DCP/MFC), Xerox, Ricoh, Kyocera, Pantum — each by reference
- Cartouches d'encre: HP (DeskJet/OfficeJet/ENVY), Canon (PIXMA/MAXIFY), Epson (Expression/WorkForce), Brother (MFC/DCP) — each by reference
- Bouteilles d'encre: Epson EcoTank, Canon MegaTank, HP Smart Tank, Brother INKvestment — each color
- Tambours: Brother, HP, Samsung, Canon — by reference
- Fusers: HP, Brother, Canon — by reference
- Kits maintenance: HP, Brother, Canon — by reference

### COMPOSANTS PC
- RAM: DDR3/DDR3L/DDR4/DDR5 — SODIMM laptop / UDIMM desktop — 4/8/16/32/64GB — by frequency
- Processeurs: Intel Core i3/i5/i7/i9 (12th/13th/14th gen), Intel Celeron/N100, AMD Ryzen 3/5/7/9 (5000/7000/9000 series) — OEM tray / Box
- Cartes mères: LGA1700/LGA1851/AM4/AM5 — H610/B660/B760/Z790/B860/Z890/A520/B450/B550/X570/A620/B650/X670/X870 — ATX/M-ATX/ITX
- Alimentations: 400W/500W/550W/650W/750W/850W/1000W/1200W — 80+ White/Bronze/Gold/Platinum/Titanium — Modulaire/Semi/Non-modulaire
- Refroidissement: Ventirad CPU, AIO 120/240/360/420mm, Ventilateur boîtier 120/140mm, Pâte thermique
- Cartes graphiques: NVIDIA RTX 30/40/50 series, AMD RX 6000/7000/9000 series — by VRAM
- Boîtiers PC: ATX/M-ATX/ITX/Full/Mid/Mini/SFF — avec/sans vitre, avec/sans ventilateurs
- Composants laptop: RAM, SSD, Clavier (Dell/HP/Lenovo/Asus/Acer), Ventilateur, Charnière, DC jack, Touchpad, Haut-parleur, Webcam, Dalle écran (11.6/13.3/14/15.6/16/17.3" — HD/FHD/WUXGA — 30pin/40pin), Carte WiFi, Pile CMOS

### OUTILS
- Tournevis: Kit précision (P2/P5, PH000/PH00/PH0/PH1, plat, Torx T2-T10, Tri-wing, Standoff), Tapis magnétique, Multi-embouts, Clés Allen, Clés Torx
- Ouverture: Spudgers plastique/métal, Ventouse, Médiators, Leviers, iSesamo
- Soudure: Fer réglable, Station, Fil étain, Flux, Tresse à dessouder, Pannes, Main third, Loupe, Extracteur fumée, Station hot air, Plaque préchauffage, Station BGA, Pâte à souder, Stencil BGA, Pinces ESD, Pince coupante, Pince à dénuder, Pince à sertir
- Nettoyage: Alcool isopropylique 99%/70%, Spray contact, Dégraissant, Brosse ESD, Bombe air comprimé, Chiffons non-tissé, Bac ultrason, Lampe UV
- Adhésifs: Ruban Tesa 61395, Colle B7000/T-7000/E8000, Colle UV/LOCA, Ruban double-face, Adhésifs pré-découpés, Ruban thermique, Kapton, Ruban élec
- Test: Multimètre, Testeur USB, Testeur batterie, Alimentation labo, Oscilloscope, Analyseur logique, Générateur signal, Testeur composants, ESR mètre
- Tapis réparation: Silicone soudure, ESD, Magnétique avec plan vis, Résistant chaleur
- Divers atelier: Outil SIM, Bracelet ESD, Sac anti-statique, Serre-câble, Gaine thermo, Dissipateur, Pad thermique, Vis M.2, Kit vis laptop, Entretoise, Cavalier, Platine essai, Fils Dupont, Header GPIO

### DIVERS
- Webcams: USB 720p/1080p/4K, Avec cache, Avec anneau lumineux, Conférence
- Supports: Téléphone, Tablette, Laptop (réglable/fixe/pliant/aluminium), Bras monitor, Riser écran, Support mural TV (fixe/inclinable/mobile/plafond), Support projecteur
- Gestion câbles: Gaine, Enveloppe, Clip, Boîte range-câbles, Velcro, Rilsan, Goulotte, Étiqueteuse, Passe-câble, Plateau bureau, Panier sous-bureau, Multiprise parafoudre
- Périphériques ordinateur: Hub USB 2.0/3.0/USB-C, Station d'accueil USB-C/Thunderbolt 3/4, KVM switch 2/4 ports, Carte capture HDMI, Convertisseur vidéo, Splitter/commutateur HDMI/DP/VGA
- Adaptateurs: USB-C→HDMI/VGA/DP/3.5mm/Ethernet/SATA/NVMe, USB-A→RJ45/RS232, M.2→PCIe/SATA, SATA→USB-C, VGA→HDMI, HDMI→VGA, DP→HDMI, Mini DP→HDMI, Lightning→USB/3.5mm/HDMI, Micro USB→USB-C
- Équipement serveur/rack: Baie murale 6U/9U/12U, Baie sol 22U/42U, Plateau, PDU, Panneau ventilé, Passe-câbles, Rails serveur, Onduleur rack 1000-3000VA, Onduleur tour 600-3000VA
- Télécom/VoIP: Téléphone IP, ATA, Passerelle SIP/FXO/GSM, PBX VoIP, Base DECT, Combiné DECT, Casque IP
- Maison connectée: Prise, Ampoule, Interrupteur, Détecteur mouvement/porte/fenêtre/température/gaz/fumée/eau, Caméra intérieur/extérieur/PTX, Sonnette, Serrure (clavier/empreinte/BT/WiFi/NFC), Thermostat, Volet roulant, Télécommande IR/RF, Hub, Dongle Zigbee/Z-Wave/Matter
- Électronique grand public: Google TV/Fire Stick/Apple TV/Mi Box, Liseuse Kindle/Kobo/PocketBook, Talkie-walkie, Radio DAB+/FM, GPS voiture/rando/marin, Dashcam 1080p/2K/4K simple/avant+arrière, Action cam, Drone DJI Mini/Air/Mavic/FPV, Manette PS4/PS5/Xbox/Switch/PC, Volant course, Joystick

### IMPRESSION ET DOCUMENTS
- Papier: A4 80/90/100/120g, A3 80g, Photo brillant/mat A4/10x15cm, Thermique 57/80mm, Étiquettes thermiques, Étiquettes Avery, Carte, Kraft
- Plastification: Machine A3/A4/A6, Pochettes A3/A4/A5/A6/Carte ID 80/100/125/175/250mic
- Reliure: Machine peigne/spirale/thermique, Peignes, Spirales, Couvertures thermiques

## Delivery Format

Single JSON file named `accessories_categories.json`.

## Technical Notes

- No items, no prices, no brands — categories only
- All category names in French
- Leaf categories should be specific enough that all items placed in them share the same form factor
- Example of good leaf: "Câbles > USB > USB-C to USB-C > 1m" (not "Câbles > USB")
- Example of bad leaf: "Chargeurs" (too broad, needs subcategories for each type)
- Total estimated: 500-1500 categories across all sections
