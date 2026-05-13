# Printer Catalog — Complete Generation

Generate JSON files for printers. Split into 3 separate files:
- `printers_laser.json`
- `printers_cartridge.json`
- `printers_risograph.json`

## Format

```json
{
  "category": "printer_laser",
  "brands": [
    {
      "name": "HP",
      "logo_url": "https://logo.clearbit.com/hp.com",
      "families": [
        { "name": "LaserJet", "models": [...] },
        { "name": "LaserJet Pro", "models": [...] }
      ]
    }
  ]
}
```

## Coverage

### LASER PRINTERS (printer_laser)
| Brand | Families | Min models |
|-------|----------|------------|
| HP | LaserJet, LaserJet Pro, LaserJet Enterprise, Neverstop Laser | 5-8 per family |
| Canon | i-SENSYS, imageCLASS, LBP | 3-5 per family |
| Brother | HL, DCP, MFC | 3-5 per family |
| Samsung | Xpress, ProXpress, ML, CLX | 3-5 per family |
| Xerox | Phaser, WorkCentre, VersaLink | 3-5 per family |
| Ricoh | SP Series, IM Series, Aficio | 3-5 per family |
| Kyocera | Ecosys, TASKalfa | 3-5 per family |
| Pantum | P Series, M Series | 2-3 per family |
| Lexmark | MS Series, MX Series | 2-3 per family |
| OKI | B Series, C Series | 2-3 per family |

### CARTRIDGE / INK PRINTERS (printer_cartridge)
| Brand | Families | Min models |
|-------|----------|------------|
| Epson | EcoTank, L Series, WorkForce, Expression, SureColor | 5-8 per family |
| Canon | PIXMA G, PIXMA, PIXMA Pro, MAXIFY | 5-8 per family |
| HP | DeskJet, OfficeJet, Smart Tank, ENVY, Photosmart | 5-8 per family |
| Brother | MFC, DCP, InkBenefit | 3-5 per family |

### RISOGRAFH PRINTERS (printer_risograph)
| Brand | Families | Min models |
|-------|----------|------------|
| Ricoh | Riso | 2-3 models |
| Duplo | DP Series | 2-3 models |

## Each Model
- `release_year`, `image_url` (verified from manufacturer or NotebookCheck)
- Specs: print speed, resolution, paper size, connectivity, weight, dimensions
- Variants: at least 2-3 configurations per model

## Delivery
- 3 separate JSON files
- Verify image URLs load
