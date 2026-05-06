/**
 * Full practical printer catalog for the repair intake workflow.
 *
 * The project schema stores printer models as DeviceModelFamily rows. To avoid a
 * large migration right now, every family name is prefixed by the printer
 * technology used by the wizard:
 *   - Laser | ...
 *   - Ink Tank | ...       = Réservoir / CISS / refillable tank
 *   - Ink Cartridge | ...  = Cartouche
 *   - Risograph | ...      = RISO / digital duplicator / duplicateur
 *
 * The UI filters these prefixes after the user chooses:
 * Printer → Laser / Réservoir / Cartouche / Risograph.
 */

export type PrinterTechnologyKey = "laser" | "ink_tank" | "ink_cartridge" | "risograph";

export type ExpandedCatalogBrand = {
  name: string;
  sortOrder: number;
  families: string[];
};

type PrinterTechnologyCatalog = {
  key: PrinterTechnologyKey;
  prefix: "Laser" | "Ink Tank" | "Ink Cartridge" | "Risograph";
  brands: ExpandedCatalogBrand[];
};

const withPrefix = (prefix: PrinterTechnologyCatalog["prefix"], names: string[]) =>
  Array.from(new Set(names)).map((name) => `${prefix} | ${name}`);

const brand = (name: string, sortOrder: number, families: string[]): ExpandedCatalogBrand => ({
  name,
  sortOrder,
  families,
});

export const FULL_PRINTER_CATALOG_BY_TYPE: PrinterTechnologyCatalog[] = [
  {
    key: "laser",
    prefix: "Laser",
    brands: [
      brand("HP", 1, withPrefix("Laser", [
        "HP LaserJet 1010", "HP LaserJet 1012", "HP LaserJet 1018", "HP LaserJet 1020", "HP LaserJet 1022", "HP LaserJet P1005", "HP LaserJet P1006", "HP LaserJet P1102", "HP LaserJet P1505", "HP LaserJet P2035", "HP LaserJet P2055", "HP LaserJet 1320", "HP LaserJet 2015", "HP LaserJet 2035", "HP LaserJet 2055",
        "HP LaserJet Pro M12", "HP LaserJet Pro M15", "HP LaserJet Pro M17", "HP LaserJet Pro M28 MFP", "HP LaserJet Pro M29 MFP", "HP LaserJet Pro M102", "HP LaserJet Pro M104", "HP LaserJet Pro M110", "HP LaserJet Pro M111", "HP LaserJet Pro M118", "HP LaserJet Pro M125 MFP", "HP LaserJet Pro M126 MFP", "HP LaserJet Pro M127 MFP", "HP LaserJet Pro M128 MFP", "HP LaserJet Pro M130 MFP", "HP LaserJet Pro M132 MFP", "HP LaserJet Pro M134 MFP", "HP LaserJet Pro M148 MFP", "HP LaserJet Pro M149 MFP", "HP LaserJet Pro M203", "HP LaserJet Pro M204", "HP LaserJet Pro M227 MFP", "HP LaserJet Pro M230", "HP LaserJet Pro M234 MFP", "HP LaserJet Pro M236 MFP", "HP LaserJet Pro M304", "HP LaserJet Pro M404", "HP LaserJet Pro M405", "HP LaserJet Pro M406", "HP LaserJet Pro M428 MFP", "HP LaserJet Pro M429 MFP", "HP LaserJet Pro M430 MFP", "HP LaserJet Pro M501", "HP LaserJet Pro M521 MFP",
        "HP LaserJet Enterprise M506", "HP LaserJet Enterprise M507", "HP LaserJet Enterprise M527 MFP", "HP LaserJet Enterprise M607", "HP LaserJet Enterprise M608", "HP LaserJet Enterprise M609", "HP LaserJet Enterprise M610", "HP LaserJet Enterprise M611", "HP LaserJet Enterprise M612", "HP LaserJet Managed E40040", "HP LaserJet Managed E42540 MFP", "HP LaserJet Managed E50145", "HP LaserJet Managed E52645 MFP", "HP LaserJet MFP M234", "HP LaserJet Tank 1020", "HP LaserJet Tank 2504", "HP LaserJet Tank MFP 1005", "HP LaserJet Tank MFP 1602",
        "HP Color LaserJet CP1025", "HP Color LaserJet CP1215", "HP Color LaserJet CP1515", "HP Color LaserJet CP2025", "HP Color LaserJet Pro M154", "HP Color LaserJet Pro M176 MFP", "HP Color LaserJet Pro M177 MFP", "HP Color LaserJet Pro M252", "HP Color LaserJet Pro M254", "HP Color LaserJet Pro M274 MFP", "HP Color LaserJet Pro M277 MFP", "HP Color LaserJet Pro M280 MFP", "HP Color LaserJet Pro M281 MFP", "HP Color LaserJet Pro M282 MFP", "HP Color LaserJet Pro M283 MFP", "HP Color LaserJet Pro M351", "HP Color LaserJet Pro M377 MFP", "HP Color LaserJet Pro M451", "HP Color LaserJet Pro M452", "HP Color LaserJet Pro M454", "HP Color LaserJet Pro M455", "HP Color LaserJet Pro M475 MFP", "HP Color LaserJet Pro M476 MFP", "HP Color LaserJet Pro M477 MFP", "HP Color LaserJet Pro M479 MFP", "HP Color LaserJet Pro M480 MFP", "HP Color LaserJet Enterprise M553", "HP Color LaserJet Enterprise M554", "HP Color LaserJet Enterprise M555", "HP Color LaserJet Enterprise M577 MFP", "HP Color LaserJet Enterprise M652", "HP Color LaserJet Enterprise M653", "HP Color LaserJet Enterprise M681 MFP", "HP Color LaserJet Enterprise M682 MFP", "HP Color LaserJet Enterprise M751", "HP Color LaserJet Enterprise M776 MFP", "HP Color LaserJet Enterprise M880 MFP"
      ])),
      brand("Canon", 2, withPrefix("Laser", [
        "Canon LBP2900", "Canon LBP3000", "Canon i-SENSYS LBP6030", "Canon i-SENSYS LBP6000", "Canon i-SENSYS LBP6020", "Canon i-SENSYS LBP611Cn", "Canon i-SENSYS LBP621Cw", "Canon i-SENSYS LBP623Cdw", "Canon i-SENSYS LBP631Cw", "Canon i-SENSYS LBP633Cdw", "Canon i-SENSYS LBP112", "Canon i-SENSYS LBP113w", "Canon i-SENSYS LBP151dw", "Canon i-SENSYS LBP212dw", "Canon i-SENSYS LBP223dw", "Canon i-SENSYS LBP226dw", "Canon i-SENSYS LBP228x", "Canon i-SENSYS LBP251dw", "Canon i-SENSYS LBP252dw", "Canon i-SENSYS LBP325x", "Canon i-SENSYS LBP351x", "Canon i-SENSYS LBP352x",
        "Canon i-SENSYS MF3010", "Canon i-SENSYS MF211", "Canon i-SENSYS MF212w", "Canon i-SENSYS MF216n", "Canon i-SENSYS MF217w", "Canon i-SENSYS MF226dn", "Canon i-SENSYS MF229dw", "Canon i-SENSYS MF231", "Canon i-SENSYS MF232w", "Canon i-SENSYS MF237w", "Canon i-SENSYS MF244dw", "Canon i-SENSYS MF247dw", "Canon i-SENSYS MF249dw", "Canon i-SENSYS MF264dw", "Canon i-SENSYS MF267dw", "Canon i-SENSYS MF269dw", "Canon i-SENSYS MF4018", "Canon i-SENSYS MF4410", "Canon i-SENSYS MF443dw", "Canon i-SENSYS MF445dw", "Canon i-SENSYS MF449x", "Canon i-SENSYS MF4750", "Canon i-SENSYS MF4780w", "Canon i-SENSYS MF4890dw", "Canon i-SENSYS MF631Cn", "Canon i-SENSYS MF633Cdw", "Canon i-SENSYS MF635Cx", "Canon i-SENSYS MF641Cw", "Canon i-SENSYS MF643Cdw", "Canon i-SENSYS MF645Cx",
        "Canon imageCLASS MF232w", "Canon imageCLASS MF244dw", "Canon imageCLASS MF3010", "Canon imageCLASS MF445dw", "Canon imageCLASS MF642Cdw", "Canon imageCLASS MF743Cdw", "Canon imageRUNNER 2202", "Canon imageRUNNER 2204", "Canon imageRUNNER 2206", "Canon imageRUNNER 2520", "Canon imageRUNNER 2525", "Canon imageRUNNER 2530", "Canon imageRUNNER 2535", "Canon imageRUNNER ADVANCE C2220", "Canon imageRUNNER ADVANCE C3325", "Canon imageRUNNER ADVANCE C3520", "Canon imageRUNNER ADVANCE C3525", "Canon imageRUNNER ADVANCE C3530"
      ])),
      brand("Brother", 3, withPrefix("Laser", [
        "Brother HL-1110", "Brother HL-1112", "Brother HL-1200", "Brother HL-1210W", "Brother HL-1222WE", "Brother HL-2035", "Brother HL-2130", "Brother HL-2140", "Brother HL-2240", "Brother HL-2250DN", "Brother HL-2270DW", "Brother HL-L2300D", "Brother HL-L2310D", "Brother HL-L2320D", "Brother HL-L2340DW", "Brother HL-L2350DW", "Brother HL-L2360DN", "Brother HL-L2370DN", "Brother HL-L2375DW", "Brother HL-L2400D", "Brother HL-L2445DW", "Brother HL-L2460DW", "Brother HL-L5100DN", "Brother HL-L5200DW", "Brother HL-L6200DW", "Brother HL-L6400DW", "Brother HL-L8230CDW", "Brother HL-L8260CDW", "Brother HL-L8360CDW", "Brother HL-L9310CDW", "Brother HL-L3230CDW", "Brother HL-L3270CDW", "Brother HL-L3280CDW", "Brother HL-L3290CDW",
        "Brother DCP-1510", "Brother DCP-1512", "Brother DCP-1602", "Brother DCP-1610W", "Brother DCP-1612W", "Brother DCP-7060D", "Brother DCP-7065DN", "Brother DCP-7070DW", "Brother DCP-L2500D", "Brother DCP-L2510D", "Brother DCP-L2520DW", "Brother DCP-L2530DW", "Brother DCP-L2540DN", "Brother DCP-L2550DW", "Brother DCP-L2620DW", "Brother DCP-L2660DW", "Brother DCP-L3510CDW", "Brother DCP-L3550CDW", "Brother DCP-L3560CDW", "Brother MFC-7360N", "Brother MFC-7460DN", "Brother MFC-7860DW", "Brother MFC-L2700DW", "Brother MFC-L2710DW", "Brother MFC-L2730DW", "Brother MFC-L2750DW", "Brother MFC-L2800DW", "Brother MFC-L3750CDW", "Brother MFC-L3770CDW", "Brother MFC-L8690CDW", "Brother MFC-L8900CDW", "Brother MFC-L9570CDW"
      ])),
      brand("Samsung", 4, withPrefix("Laser", [
        "Samsung ML-1610", "Samsung ML-1640", "Samsung ML-1660", "Samsung ML-1670", "Samsung ML-1860", "Samsung ML-1910", "Samsung ML-2160", "Samsung ML-2165", "Samsung ML-2525", "Samsung ML-2540", "Samsung ML-2580N", "Samsung ML-2850", "Samsung ML-2950", "Samsung ML-2955DW", "Samsung SCX-3200", "Samsung SCX-3400", "Samsung SCX-3405", "Samsung SCX-4200", "Samsung SCX-4300", "Samsung SCX-4600", "Samsung SCX-4623F", "Samsung SCX-4729FD", "Samsung Xpress M2020", "Samsung Xpress M2022", "Samsung Xpress M2070", "Samsung Xpress M2625", "Samsung Xpress M2675", "Samsung Xpress M2825DW", "Samsung Xpress M2875FD", "Samsung Xpress M2885FW", "Samsung Xpress C430W", "Samsung Xpress C480W", "Samsung Xpress C1810W", "Samsung Xpress C1860FW", "Samsung CLP-315", "Samsung CLP-365", "Samsung CLX-3175", "Samsung CLX-3305"
      ])),
      brand("Xerox", 5, withPrefix("Laser", [
        "Xerox Phaser 3020", "Xerox Phaser 3052", "Xerox Phaser 3260", "Xerox Phaser 3330", "Xerox Phaser 3610", "Xerox Phaser 6020", "Xerox Phaser 6510", "Xerox Phaser 7100", "Xerox WorkCentre 3025", "Xerox WorkCentre 3215", "Xerox WorkCentre 3225", "Xerox WorkCentre 3315", "Xerox WorkCentre 3325", "Xerox WorkCentre 3335", "Xerox WorkCentre 3345", "Xerox WorkCentre 6025", "Xerox WorkCentre 6027", "Xerox WorkCentre 6515", "Xerox VersaLink B400", "Xerox VersaLink B405", "Xerox VersaLink B600", "Xerox VersaLink B605", "Xerox VersaLink C400", "Xerox VersaLink C405", "Xerox VersaLink C500", "Xerox VersaLink C505", "Xerox AltaLink B8045", "Xerox AltaLink C8030"
      ])),
      brand("Ricoh", 6, withPrefix("Laser", [
        "Ricoh SP 100", "Ricoh SP 111", "Ricoh SP 112", "Ricoh SP 150", "Ricoh SP 150SU", "Ricoh SP 200", "Ricoh SP 201N", "Ricoh SP 204SN", "Ricoh SP 211", "Ricoh SP 213", "Ricoh SP 220", "Ricoh SP 220Nw", "Ricoh SP 220SFNw", "Ricoh SP 325", "Ricoh SP 330DN", "Ricoh SP 330SFN", "Ricoh SP 3400", "Ricoh SP 3500", "Ricoh SP 3510", "Ricoh SP 3710", "Ricoh SP 377", "Ricoh SP C250DN", "Ricoh SP C252DN", "Ricoh SP C261DNw", "Ricoh SP C262DNw", "Ricoh SP C360DNw", "Ricoh Aficio SP 3500", "Ricoh Aficio SP 3510", "Ricoh MP 171", "Ricoh MP 2014", "Ricoh MP 301", "Ricoh MP 305", "Ricoh MP 2554", "Ricoh MP 3054", "Ricoh MP C2003", "Ricoh MP C2503", "Ricoh MP C3003", "Ricoh MP C3503", "Ricoh IM 2702", "Ricoh IM 350", "Ricoh IM 430", "Ricoh IM C2000", "Ricoh IM C2500", "Ricoh IM C3000", "Ricoh IM C3500"
      ])),
      brand("Kyocera", 7, withPrefix("Laser", [
        "Kyocera FS-1020D", "Kyocera FS-1040", "Kyocera FS-1060DN", "Kyocera FS-1120D", "Kyocera FS-1120MFP", "Kyocera FS-1320D", "Kyocera FS-1325MFP", "Kyocera ECOSYS P2035d", "Kyocera ECOSYS P2040dn", "Kyocera ECOSYS P2135dn", "Kyocera ECOSYS P2235dn", "Kyocera ECOSYS P3045dn", "Kyocera ECOSYS P3050dn", "Kyocera ECOSYS P5021cdn", "Kyocera ECOSYS P5026cdn", "Kyocera ECOSYS M1025d", "Kyocera ECOSYS M1520h", "Kyocera ECOSYS M2035dn", "Kyocera ECOSYS M2040dn", "Kyocera ECOSYS M2135dn", "Kyocera ECOSYS M2540dn", "Kyocera ECOSYS M2635dn", "Kyocera ECOSYS M2640idw", "Kyocera ECOSYS M2735dw", "Kyocera ECOSYS M5521cdn", "Kyocera ECOSYS M5526cdw", "Kyocera TASKalfa 1800", "Kyocera TASKalfa 2200", "Kyocera TASKalfa 2552ci", "Kyocera TASKalfa 3252ci"
      ])),
      brand("Pantum", 8, withPrefix("Laser", [
        "Pantum P2200", "Pantum P2207", "Pantum P2500", "Pantum P2500W", "Pantum P2510", "Pantum P3010D", "Pantum P3010DW", "Pantum P3300DN", "Pantum P3300DW", "Pantum M6500", "Pantum M6500W", "Pantum M6550NW", "Pantum M6600NW", "Pantum M6700D", "Pantum M6700DW", "Pantum M6800FDW", "Pantum M7100DN", "Pantum M7100DW", "Pantum M7200FDW", "Pantum BM5100ADN", "Pantum BM5100ADW", "Pantum CP1100DW", "Pantum CM1100DW"
      ])),
      brand("Lexmark", 9, withPrefix("Laser", [
        "Lexmark E120", "Lexmark E260", "Lexmark E360", "Lexmark MS310", "Lexmark MS312", "Lexmark MS317", "Lexmark MS410", "Lexmark MS417", "Lexmark MS510", "Lexmark MS517", "Lexmark MS610", "Lexmark MS617", "Lexmark B2236dw", "Lexmark B2338dw", "Lexmark B2442dw", "Lexmark B2546dw", "Lexmark MX310", "Lexmark MX317", "Lexmark MX410", "Lexmark MX417", "Lexmark MX511", "Lexmark MX611", "Lexmark MB2236adw", "Lexmark MB2338adw", "Lexmark MB2442adwe", "Lexmark C2325dw", "Lexmark C2425dw", "Lexmark CX310", "Lexmark CX410", "Lexmark CX417", "Lexmark CX421adn", "Lexmark CX522ade"
      ])),
      brand("OKI", 10, withPrefix("Laser", [
        "OKI B2200", "OKI B401", "OKI B410", "OKI B411", "OKI B412", "OKI B431", "OKI B432", "OKI B512", "OKI B721", "OKI B731", "OKI C301", "OKI C321", "OKI C332", "OKI C511", "OKI C531", "OKI C532", "OKI C612", "OKI C712", "OKI MC342", "OKI MC352", "OKI MC363", "OKI MC562", "OKI MC573", "OKI MB451", "OKI MB472", "OKI MB492", "OKI MB562"
      ])),
      brand("Sharp", 11, withPrefix("Laser", [
        "Sharp AL-2021", "Sharp AR-5516", "Sharp AR-5520", "Sharp AR-5618", "Sharp AR-5620", "Sharp AR-6020", "Sharp AR-6023", "Sharp MX-B201D", "Sharp MX-B350W", "Sharp MX-B450W", "Sharp MX-M260", "Sharp MX-M310", "Sharp MX-M264N", "Sharp MX-M314N", "Sharp MX-M354N", "Sharp MX-2310U", "Sharp MX-2610N", "Sharp MX-3050N", "Sharp MX-3070N", "Sharp MX-3550N", "Sharp MX-3570N", "Sharp MX-4140N", "Sharp MX-5140N"
      ])),
      brand("Toshiba", 12, withPrefix("Laser", [
        "Toshiba e-STUDIO 2303A", "Toshiba e-STUDIO 2309A", "Toshiba e-STUDIO 2505AC", "Toshiba e-STUDIO 2505F", "Toshiba e-STUDIO 2515AC", "Toshiba e-STUDIO 2802AM", "Toshiba e-STUDIO 3005AC", "Toshiba e-STUDIO 3015AC", "Toshiba e-STUDIO 3505AC", "Toshiba e-STUDIO 3515AC", "Toshiba e-STUDIO 4505AC", "Toshiba e-STUDIO 4515AC", "Toshiba e-STUDIO 5005AC", "Toshiba e-STUDIO 5015AC"
      ])),
      brand("Konica Minolta", 13, withPrefix("Laser", [
        "Konica Minolta bizhub 164", "Konica Minolta bizhub 185", "Konica Minolta bizhub 195", "Konica Minolta bizhub 215", "Konica Minolta bizhub 226", "Konica Minolta bizhub 227", "Konica Minolta bizhub 287", "Konica Minolta bizhub 367", "Konica Minolta bizhub C220", "Konica Minolta bizhub C224", "Konica Minolta bizhub C224e", "Konica Minolta bizhub C258", "Konica Minolta bizhub C280", "Konica Minolta bizhub C284", "Konica Minolta bizhub C284e", "Konica Minolta bizhub C308", "Konica Minolta bizhub C360", "Konica Minolta bizhub C364", "Konica Minolta bizhub C364e", "Konica Minolta bizhub C368", "Konica Minolta bizhub C454", "Konica Minolta bizhub C458", "Konica Minolta bizhub C554", "Konica Minolta bizhub C558"
      ])),
      brand("Dell", 14, withPrefix("Laser", [
        "Dell 1130", "Dell 1133", "Dell 1135n", "Dell 1250c", "Dell 1320c", "Dell 1350cnw", "Dell 1355cn", "Dell 1700", "Dell 1710", "Dell 1720", "Dell 1815dn", "Dell 2330d", "Dell 2335dn", "Dell 2350dn", "Dell 3110cn", "Dell 3130cn", "Dell B1160", "Dell B1165nfw", "Dell B1260dn", "Dell B1265dnf", "Dell C1760nw", "Dell C1765nfw", "Dell E310dw", "Dell E515dw"
      ])),
      brand("Epson", 15, withPrefix("Laser", [
        "Epson AcuLaser M1200", "Epson AcuLaser M1400", "Epson AcuLaser M2000", "Epson AcuLaser M2300", "Epson AcuLaser M2400", "Epson AcuLaser M4000", "Epson AcuLaser MX14", "Epson AcuLaser CX17", "Epson AcuLaser C1100", "Epson AcuLaser C1700", "Epson AcuLaser C1750", "Epson AcuLaser C2900", "Epson AcuLaser C3900"
      ])),
      brand("Panasonic", 16, withPrefix("Laser", [
        "Panasonic KX-MB1500", "Panasonic KX-MB1520", "Panasonic KX-MB1530", "Panasonic KX-MB1900", "Panasonic KX-MB2000", "Panasonic KX-MB2010", "Panasonic KX-MB2025", "Panasonic KX-MB2030", "Panasonic KX-MB2120", "Panasonic KX-MB2130", "Panasonic KX-MB2170"
      ])),
      brand("Autre", 99, withPrefix("Laser", ["Generic Laser Printer", "Generic Mono Laser MFP", "Generic Color Laser MFP", "Generic Photocopier / Copier"])),
    ],
  },
  {
    key: "ink_tank",
    prefix: "Ink Tank",
    brands: [
      brand("Epson", 1, withPrefix("Ink Tank", [
        "Epson EcoTank L100", "Epson EcoTank L110", "Epson EcoTank L120", "Epson EcoTank L121", "Epson EcoTank L1250", "Epson EcoTank L130", "Epson EcoTank L132", "Epson EcoTank L200", "Epson EcoTank L210", "Epson EcoTank L220", "Epson EcoTank L222", "Epson EcoTank L300", "Epson EcoTank L3050", "Epson EcoTank L3060", "Epson EcoTank L3070", "Epson EcoTank L310", "Epson EcoTank L3110", "Epson EcoTank L3150", "Epson EcoTank L3160", "Epson EcoTank L3210", "Epson EcoTank L3250", "Epson EcoTank L3260", "Epson EcoTank L355", "Epson EcoTank L360", "Epson EcoTank L365", "Epson EcoTank L382", "Epson EcoTank L386", "Epson EcoTank L395", "Epson EcoTank L405", "Epson EcoTank L4150", "Epson EcoTank L4160", "Epson EcoTank L4260", "Epson EcoTank L455", "Epson EcoTank L485", "Epson EcoTank L486", "Epson EcoTank L5190", "Epson EcoTank L5290", "Epson EcoTank L555", "Epson EcoTank L565", "Epson EcoTank L575", "Epson EcoTank L6160", "Epson EcoTank L6170", "Epson EcoTank L6190", "Epson EcoTank L6270", "Epson EcoTank L6290", "Epson EcoTank L655", "Epson EcoTank L805", "Epson EcoTank L810", "Epson EcoTank L850", "Epson EcoTank L1800", "Epson EcoTank L14150", "Epson EcoTank L15150", "Epson EcoTank L15160", "Epson EcoTank L8180",
        "Epson EcoTank ET-1810", "Epson EcoTank ET-2710", "Epson EcoTank ET-2720", "Epson EcoTank ET-2750", "Epson EcoTank ET-2810", "Epson EcoTank ET-2820", "Epson EcoTank ET-2850", "Epson EcoTank ET-2870", "Epson EcoTank ET-2875", "Epson EcoTank ET-3760", "Epson EcoTank ET-3850", "Epson EcoTank ET-4800", "Epson EcoTank ET-4850", "Epson EcoTank ET-5150", "Epson EcoTank ET-5170", "Epson EcoTank ET-5800", "Epson EcoTank ET-5850", "Epson EcoTank ET-8500", "Epson EcoTank ET-8550", "Epson EcoTank M1100", "Epson EcoTank M1120", "Epson EcoTank M1140", "Epson EcoTank M1170", "Epson EcoTank M2120", "Epson EcoTank M2140", "Epson EcoTank M2170", "Epson EcoTank M3170"
      ])),
      brand("Canon", 2, withPrefix("Ink Tank", [
        "Canon PIXMA G1000", "Canon PIXMA G1010", "Canon PIXMA G1020", "Canon PIXMA G1400", "Canon PIXMA G1410", "Canon PIXMA G1411", "Canon PIXMA G1420", "Canon PIXMA G1500", "Canon PIXMA G2000", "Canon PIXMA G2010", "Canon PIXMA G2020", "Canon PIXMA G2400", "Canon PIXMA G2410", "Canon PIXMA G2411", "Canon PIXMA G2420", "Canon PIXMA G2460", "Canon PIXMA G3000", "Canon PIXMA G3010", "Canon PIXMA G3020", "Canon PIXMA G3060", "Canon PIXMA G3400", "Canon PIXMA G3410", "Canon PIXMA G3411", "Canon PIXMA G3420", "Canon PIXMA G3460", "Canon PIXMA G3500", "Canon PIXMA G3510", "Canon PIXMA G3520", "Canon PIXMA G3560", "Canon PIXMA G4400", "Canon PIXMA G4410", "Canon PIXMA G4411", "Canon PIXMA G4510", "Canon PIXMA G5040", "Canon PIXMA G5050", "Canon PIXMA G540", "Canon PIXMA G550", "Canon PIXMA G6040", "Canon PIXMA G6050", "Canon PIXMA G640", "Canon PIXMA G650", "Canon PIXMA G7040", "Canon PIXMA G7050", "Canon PIXMA GM2040", "Canon PIXMA GM2050", "Canon MAXIFY GX1040", "Canon MAXIFY GX2040", "Canon MAXIFY GX3040", "Canon MAXIFY GX3050", "Canon MAXIFY GX4040", "Canon MAXIFY GX4050", "Canon MAXIFY GX5040", "Canon MAXIFY GX5050", "Canon MAXIFY GX6040", "Canon MAXIFY GX6050", "Canon MAXIFY GX7040", "Canon MAXIFY GX7050"
      ])),
      brand("HP", 3, withPrefix("Ink Tank", [
        "HP DeskJet GT 5810", "HP DeskJet GT 5820", "HP Ink Tank 115", "HP Ink Tank 116", "HP Ink Tank 118", "HP Ink Tank 310", "HP Ink Tank 315", "HP Ink Tank 316", "HP Ink Tank 319", "HP Ink Tank Wireless 410", "HP Ink Tank Wireless 415", "HP Ink Tank Wireless 416", "HP Smart Tank 350", "HP Smart Tank 500", "HP Smart Tank 510", "HP Smart Tank 515", "HP Smart Tank 516", "HP Smart Tank 519", "HP Smart Tank 520", "HP Smart Tank 525", "HP Smart Tank 530", "HP Smart Tank 531", "HP Smart Tank 538", "HP Smart Tank 580", "HP Smart Tank 581", "HP Smart Tank 585", "HP Smart Tank 600", "HP Smart Tank 610", "HP Smart Tank 615", "HP Smart Tank 670", "HP Smart Tank 675", "HP Smart Tank 7001", "HP Smart Tank 7005", "HP Smart Tank 720", "HP Smart Tank 730", "HP Smart Tank 750", "HP Smart Tank 760", "HP Smart Tank 790", "HP Smart Tank 795", "HP Smart Tank 800", "HP Smart Tank 850", "HP Smart Tank 7301", "HP Smart Tank 7602", "HP Smart Tank 7901"
      ])),
      brand("Brother", 4, withPrefix("Ink Tank", [
        "Brother DCP-T220", "Brother DCP-T230", "Brother DCP-T300", "Brother DCP-T310", "Brother DCP-T420W", "Brother DCP-T425W", "Brother DCP-T426W", "Brother DCP-T500W", "Brother DCP-T510W", "Brother DCP-T520W", "Brother DCP-T525W", "Brother DCP-T530DW", "Brother DCP-T540DW", "Brother DCP-T580DW", "Brother DCP-T700W", "Brother DCP-T710W", "Brother DCP-T720DW", "Brother DCP-T725DW", "Brother DCP-T730DW", "Brother DCP-T735DW", "Brother DCP-T780DW", "Brother DCP-T820DW", "Brother DCP-T825DW", "Brother MFC-T800W", "Brother MFC-T810W", "Brother MFC-T910DW", "Brother MFC-T920DW", "Brother MFC-T925DW", "Brother MFC-T930DW", "Brother MFC-T935DW", "Brother MFC-T4500DW"
      ])),
      brand("Autre", 99, withPrefix("Ink Tank", ["Generic Ink Tank Printer", "Generic CISS Modified Printer", "Generic Refillable Tank Printer"])),
    ],
  },
  {
    key: "ink_cartridge",
    prefix: "Ink Cartridge",
    brands: [
      brand("HP", 1, withPrefix("Ink Cartridge", [
        "HP DeskJet 1000", "HP DeskJet 1010", "HP DeskJet 1050", "HP DeskJet 1110", "HP DeskJet 1112", "HP DeskJet 1510", "HP DeskJet 1515", "HP DeskJet 2050", "HP DeskJet 2130", "HP DeskJet 2132", "HP DeskJet 2300", "HP DeskJet 2320", "HP DeskJet 2510", "HP DeskJet 2540", "HP DeskJet 2600", "HP DeskJet 2620", "HP DeskJet 2630", "HP DeskJet 2700", "HP DeskJet 2710", "HP DeskJet 2720", "HP DeskJet 2721", "HP DeskJet 2722", "HP DeskJet 2723", "HP DeskJet 2730", "HP DeskJet 2755", "HP DeskJet 3050", "HP DeskJet 3520", "HP DeskJet 3630", "HP DeskJet 3700", "HP DeskJet 3720", "HP DeskJet 3730", "HP DeskJet 3750", "HP DeskJet 3760", "HP DeskJet 4100", "HP DeskJet 4120", "HP DeskJet 4130",
        "HP ENVY 4500", "HP ENVY 4520", "HP ENVY 5000", "HP ENVY 5010", "HP ENVY 5020", "HP ENVY 5030", "HP ENVY 5530", "HP ENVY 5540", "HP ENVY 5640", "HP ENVY 6000", "HP ENVY 6020", "HP ENVY 6030", "HP ENVY 6400", "HP ENVY 6420", "HP ENVY Photo 6230", "HP ENVY Photo 7130", "HP ENVY Photo 7830",
        "HP OfficeJet 2620", "HP OfficeJet 3830", "HP OfficeJet 4500", "HP OfficeJet 4620", "HP OfficeJet 4630", "HP OfficeJet 4650", "HP OfficeJet 5200", "HP OfficeJet 5220", "HP OfficeJet 5230", "HP OfficeJet 5255", "HP OfficeJet 5740", "HP OfficeJet 6500", "HP OfficeJet 6700", "HP OfficeJet 6950", "HP OfficeJet 6960", "HP OfficeJet 7110", "HP OfficeJet 7510", "HP OfficeJet 7610", "HP OfficeJet Pro 6830", "HP OfficeJet Pro 6860", "HP OfficeJet Pro 6970", "HP OfficeJet Pro 7720", "HP OfficeJet Pro 7740", "HP OfficeJet Pro 8100", "HP OfficeJet Pro 8210", "HP OfficeJet Pro 8600", "HP OfficeJet Pro 8610", "HP OfficeJet Pro 8620", "HP OfficeJet Pro 8710", "HP OfficeJet Pro 8720", "HP OfficeJet Pro 8730", "HP OfficeJet Pro 9010", "HP OfficeJet Pro 9012", "HP OfficeJet Pro 9015", "HP OfficeJet Pro 9020", "HP OfficeJet Pro 9025"
      ])),
      brand("Canon", 2, withPrefix("Ink Cartridge", [
        "Canon PIXMA iP1800", "Canon PIXMA iP1900", "Canon PIXMA iP2700", "Canon PIXMA iP2850", "Canon PIXMA iP3600", "Canon PIXMA iP4200", "Canon PIXMA iP4300", "Canon PIXMA iP4500", "Canon PIXMA iP4700", "Canon PIXMA iP4840", "Canon PIXMA iP7240", "Canon PIXMA iP7250", "Canon PIXMA iX6540", "Canon PIXMA iX6840", "Canon PIXMA MP140", "Canon PIXMA MP190", "Canon PIXMA MP210", "Canon PIXMA MP230", "Canon PIXMA MP250", "Canon PIXMA MP280", "Canon PIXMA MP495", "Canon PIXMA MP540", "Canon PIXMA MP560", "Canon PIXMA MP620", "Canon PIXMA MP640", "Canon PIXMA MX310", "Canon PIXMA MX320", "Canon PIXMA MX340", "Canon PIXMA MX360", "Canon PIXMA MX375", "Canon PIXMA MX394", "Canon PIXMA MX410", "Canon PIXMA MX420", "Canon PIXMA MX435", "Canon PIXMA MX455", "Canon PIXMA MX475", "Canon PIXMA MX494", "Canon PIXMA MX515", "Canon PIXMA MX525", "Canon PIXMA MX535", "Canon PIXMA MX725", "Canon PIXMA MX925",
        "Canon PIXMA MG2140", "Canon PIXMA MG2240", "Canon PIXMA MG2440", "Canon PIXMA MG2450", "Canon PIXMA MG2540", "Canon PIXMA MG2540S", "Canon PIXMA MG2940", "Canon PIXMA MG3040", "Canon PIXMA MG3050", "Canon PIXMA MG3140", "Canon PIXMA MG3150", "Canon PIXMA MG3240", "Canon PIXMA MG3250", "Canon PIXMA MG3540", "Canon PIXMA MG3550", "Canon PIXMA MG3640", "Canon PIXMA MG3650", "Canon PIXMA MG4240", "Canon PIXMA MG4250", "Canon PIXMA MG5140", "Canon PIXMA MG5250", "Canon PIXMA MG5350", "Canon PIXMA MG5450", "Canon PIXMA MG5550", "Canon PIXMA MG5650", "Canon PIXMA MG5750", "Canon PIXMA MG6250", "Canon PIXMA MG6450", "Canon PIXMA MG6650", "Canon PIXMA MG6850", "Canon PIXMA MG7150", "Canon PIXMA MG7550", "Canon PIXMA TS204", "Canon PIXMA TS205", "Canon PIXMA TS304", "Canon PIXMA TS305", "Canon PIXMA TS3140", "Canon PIXMA TS3150", "Canon PIXMA TS3340", "Canon PIXMA TS3350", "Canon PIXMA TS3440", "Canon PIXMA TS3450", "Canon PIXMA TS5040", "Canon PIXMA TS5050", "Canon PIXMA TS5140", "Canon PIXMA TS5150", "Canon PIXMA TS5340", "Canon PIXMA TS5350", "Canon PIXMA TS6040", "Canon PIXMA TS6050", "Canon PIXMA TS6240", "Canon PIXMA TS6250", "Canon PIXMA TS6340", "Canon PIXMA TS6350", "Canon PIXMA TS704", "Canon PIXMA TS705", "Canon PIXMA TR4540", "Canon PIXMA TR4550", "Canon PIXMA TR4640", "Canon PIXMA TR4650", "Canon PIXMA TR7540", "Canon PIXMA TR7550", "Canon PIXMA TR8540", "Canon PIXMA TR8550", "Canon MAXIFY MB2040", "Canon MAXIFY MB2140", "Canon MAXIFY MB2340", "Canon MAXIFY MB2740", "Canon MAXIFY MB5040", "Canon MAXIFY MB5140", "Canon MAXIFY MB5340", "Canon MAXIFY MB5440"
      ])),
      brand("Epson", 3, withPrefix("Ink Cartridge", [
        "Epson Stylus SX125", "Epson Stylus SX130", "Epson Stylus SX218", "Epson Stylus SX235W", "Epson Stylus SX400", "Epson Stylus SX405", "Epson Stylus SX425W", "Epson Stylus SX435W", "Epson Stylus SX525WD", "Epson Expression Home XP-102", "Epson Expression Home XP-202", "Epson Expression Home XP-205", "Epson Expression Home XP-212", "Epson Expression Home XP-215", "Epson Expression Home XP-225", "Epson Expression Home XP-235", "Epson Expression Home XP-245", "Epson Expression Home XP-247", "Epson Expression Home XP-255", "Epson Expression Home XP-257", "Epson Expression Home XP-302", "Epson Expression Home XP-305", "Epson Expression Home XP-312", "Epson Expression Home XP-315", "Epson Expression Home XP-322", "Epson Expression Home XP-325", "Epson Expression Home XP-332", "Epson Expression Home XP-335", "Epson Expression Home XP-342", "Epson Expression Home XP-345", "Epson Expression Home XP-352", "Epson Expression Home XP-355", "Epson Expression Home XP-4100", "Epson Expression Home XP-4150", "Epson Expression Premium XP-600", "Epson Expression Premium XP-610", "Epson Expression Premium XP-620", "Epson Expression Premium XP-630", "Epson Expression Premium XP-710", "Epson Expression Premium XP-720", "Epson Expression Premium XP-830", "Epson WorkForce WF-2510", "Epson WorkForce WF-2520", "Epson WorkForce WF-2530", "Epson WorkForce WF-2630", "Epson WorkForce WF-2650", "Epson WorkForce WF-2750", "Epson WorkForce WF-2760", "Epson WorkForce WF-2860", "Epson WorkForce WF-3520", "Epson WorkForce WF-3540", "Epson WorkForce WF-3620", "Epson WorkForce WF-3720", "Epson WorkForce WF-4730", "Epson WorkForce WF-4740", "Epson WorkForce Pro WF-4820", "Epson WorkForce Pro WF-4830", "Epson WorkForce Pro WF-7840", "Epson WorkForce Pro WF-8090", "Epson WorkForce Pro WF-8590"
      ])),
      brand("Brother", 4, withPrefix("Ink Cartridge", [
        "Brother DCP-J105", "Brother DCP-J125", "Brother DCP-J132W", "Brother DCP-J140W", "Brother DCP-J152W", "Brother DCP-J315W", "Brother DCP-J4120DW", "Brother DCP-J525W", "Brother DCP-J562DW", "Brother DCP-J572DW", "Brother DCP-J725DW", "Brother DCP-J752DW", "Brother MFC-J200", "Brother MFC-J220", "Brother MFC-J245", "Brother MFC-J265W", "Brother MFC-J430W", "Brother MFC-J4410DW", "Brother MFC-J4420DW", "Brother MFC-J4510DW", "Brother MFC-J4620DW", "Brother MFC-J470DW", "Brother MFC-J480DW", "Brother MFC-J491DW", "Brother MFC-J5330DW", "Brother MFC-J5730DW", "Brother MFC-J5910DW", "Brother MFC-J625DW", "Brother MFC-J650DW", "Brother MFC-J6520DW", "Brother MFC-J6720DW", "Brother MFC-J680DW", "Brother MFC-J6930DW", "Brother MFC-J6940DW", "Brother MFC-J6955DW", "Brother MFC-J825DW", "Brother MFC-J870DW", "Brother INKvestment MFC-J4335DW", "Brother INKvestment MFC-J4535DW", "Brother INKvestment MFC-J5855DW", "Brother INKvestment MFC-J6555DW", "Brother INKvestment MFC-J6955DW"
      ])),
      brand("Lexmark", 5, withPrefix("Ink Cartridge", ["Lexmark X1180", "Lexmark X1190", "Lexmark X1270", "Lexmark X2250", "Lexmark X2330", "Lexmark X2470", "Lexmark X2550", "Lexmark X2600", "Lexmark X3650", "Lexmark X4650", "Lexmark X5650", "Lexmark X6675", "Lexmark X7350", "Lexmark X8350", "Lexmark S305", "Lexmark S405", "Lexmark S505", "Lexmark S605", "Lexmark Pro205", "Lexmark Pro705", "Lexmark Pro805", "Lexmark Pro905"])),
      brand("Dell", 6, withPrefix("Ink Cartridge", ["Dell 720", "Dell 924", "Dell 926", "Dell 944", "Dell 946", "Dell 948", "Dell 968", "Dell A920", "Dell A940", "Dell A960", "Dell V305", "Dell V313", "Dell V313w", "Dell V515w", "Dell V525w", "Dell V715w"])),
      brand("Kodak", 7, withPrefix("Ink Cartridge", ["Kodak ESP 1.2", "Kodak ESP 3", "Kodak ESP 3.2", "Kodak ESP 5", "Kodak ESP 7", "Kodak ESP 9", "Kodak ESP 3250", "Kodak ESP 5250", "Kodak ESP 7250", "Kodak Hero 3.1", "Kodak Hero 5.1", "Kodak Hero 7.1", "Kodak Hero 9.1"])),
      brand("Autre", 99, withPrefix("Ink Cartridge", ["Generic Ink Cartridge Printer", "Generic Home Inkjet Printer", "Generic Office Inkjet Printer"])),
    ],
  },
  {
    key: "risograph",
    prefix: "Risograph",
    brands: [
      brand("RISO", 1, withPrefix("Risograph", [
        "RISO CV 1200", "RISO CV 3230", "RISO CR 1610", "RISO CR 1630", "RISO CR 1630R", "RISO EV 2550", "RISO EV 2560", "RISO EZ 200", "RISO EZ 220", "RISO EZ 230", "RISO EZ 300", "RISO EZ 330", "RISO EZ 370", "RISO EZ 390", "RISO EZ 570", "RISO EZ 590", "RISO GR 1700", "RISO GR 2710", "RISO GR 3750", "RISO FR 2950", "RISO RA 4200", "RISO RA 4900", "RISO RP 3105", "RISO RP 3700", "RISO RP 3790", "RISO RN 2000", "RISO RN 2030", "RISO RZ 200", "RISO RZ 220", "RISO RZ 230", "RISO RZ 300", "RISO RZ 310", "RISO RZ 330", "RISO RZ 370", "RISO RZ 390", "RISO RZ 570", "RISO RZ 590", "RISO MZ 770", "RISO MZ 790", "RISO ME 9350", "RISO MH 9350", "RISO SE 9380", "RISO SF 5030", "RISO SF 5130", "RISO SF 5230", "RISO SF 5330", "RISO SF 5350", "RISO SF 5430", "RISO SF 5450", "RISO SF 9350", "RISO SF EII 5230", "RISO SF EII 5330", "RISO SF EII 5350", "RISO SF EII 5430", "RISO SF EII 5450", "RISO SF EII 9350", "RISO ComColor FW", "RISO ComColor GD", "RISO ComColor FT", "RISO ComColor GL"
      ])),
      brand("Duplo", 2, withPrefix("Risograph", [
        "Duplo Duprinter DP-21S", "Duplo Duprinter DP-31S", "Duplo Duprinter DP-33S", "Duplo Duprinter DP-43S", "Duplo Duprinter DP-S550", "Duplo Duprinter DP-X510", "Duplo Duprinter DP-X520", "Duplo Duprinter DP-X550", "Duplo Duprinter DP-X650", "Duplo Duprinter DP-X850", "Duplo DP-G205", "Duplo DP-G210", "Duplo DP-G220", "Duplo DP-G225", "Duplo DP-G300", "Duplo DP-G305", "Duplo DP-G310", "Duplo DP-G315", "Duplo DP-G320", "Duplo DP-G325", "Duplo DP-L520", "Duplo DP-L550", "Duplo DP-M310", "Duplo DP-M420", "Duplo DP-U550", "Duplo DP-U850"
      ])),
      brand("Ricoh", 3, withPrefix("Risograph", [
        "Ricoh Priport DX 2330", "Ricoh Priport DX 2430", "Ricoh Priport DX 3240", "Ricoh Priport DX 3343", "Ricoh Priport DD 3324", "Ricoh Priport DD 3344", "Ricoh Priport DD 4450", "Ricoh Priport DD 5450", "Ricoh Priport DD 6650", "Ricoh Priport DD 8450", "Ricoh Priport JP 1010", "Ricoh Priport JP 1210", "Ricoh Priport JP 1230", "Ricoh Priport JP 1250", "Ricoh Priport JP 3000", "Ricoh Priport JP 5000", "Ricoh Priport JP 5800", "Ricoh DX 2330", "Ricoh DX 2430", "Ricoh DD 3344", "Ricoh DD 4450", "Ricoh DD 6650", "Ricoh DD 8450"
      ])),
      brand("Gestetner / Nashuatec / Rex-Rotary", 4, withPrefix("Risograph", [
        "Gestetner CP 5130", "Gestetner CP 6123", "Gestetner CP 6203", "Gestetner CP 6244", "Gestetner CP 6302", "Gestetner CP 6346", "Gestetner DX 2330", "Gestetner DX 2430", "Nashuatec CP 6203", "Nashuatec CP 6244", "Nashuatec DX 2330", "Nashuatec DX 2430", "Rex-Rotary CP 6203", "Rex-Rotary CP 6244", "Rex-Rotary DX 2330", "Rex-Rotary DX 2430"])),
      brand("Savin", 5, withPrefix("Risograph", ["Savin 3250DNP", "Savin 3350DNP", "Savin 3450DNP", "Savin 3560DNP", "Savin 3580DNP", "Savin 3590DNP", "Savin 3650DNP", "Savin 3660DNP", "Savin 3690DNP"])),
      brand("Lanier", 6, withPrefix("Risograph", ["Lanier LDD 030", "Lanier LDD 035", "Lanier LDD 120", "Lanier LDD 145", "Lanier LDD 245", "Lanier LDD 250", "Lanier LDD 345", "Lanier LDD 350"])),
      brand("Autre", 99, withPrefix("Risograph", ["Generic Risograph / Digital Duplicator", "Generic Master Duplicator", "Generic School Duplicator"])),
    ],
  },
];

function buildMergedCatalog(): ExpandedCatalogBrand[] {
  const byBrand = new Map<string, ExpandedCatalogBrand>();

  for (const typeCatalog of FULL_PRINTER_CATALOG_BY_TYPE) {
    for (const brandDef of typeCatalog.brands) {
      const existing = byBrand.get(brandDef.name);
      if (!existing) {
        byBrand.set(brandDef.name, {
          name: brandDef.name,
          sortOrder: brandDef.sortOrder,
          families: [...brandDef.families],
        });
        continue;
      }

      existing.sortOrder = Math.min(existing.sortOrder, brandDef.sortOrder);
      existing.families = Array.from(new Set([...existing.families, ...brandDef.families]));
    }
  }

  return Array.from(byBrand.values()).sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
}

export const EXPANDED_PRINTER_CATALOG: ExpandedCatalogBrand[] = buildMergedCatalog();

export const PRINTER_CATALOG_COUNTS = {
  brands: EXPANDED_PRINTER_CATALOG.length,
  families: EXPANDED_PRINTER_CATALOG.reduce((sum, item) => sum + item.families.length, 0),
  byType: Object.fromEntries(
    FULL_PRINTER_CATALOG_BY_TYPE.map((typeCatalog) => [
      typeCatalog.key,
      typeCatalog.brands.reduce((sum, item) => sum + item.families.length, 0),
    ])
  ) as Record<PrinterTechnologyKey, number>,
};
