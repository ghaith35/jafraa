import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "src/features/repairs/components/intake/RepairIntakeWizard.tsx",
  "src/features/repairs/lib/intake-data.ts",
  "src/app/(dashboard)/dashboard/pos/page.tsx",
  "src/features/pos/components/PosCheckout.tsx",
  "src/features/pos/components/PosRepairWorkspace.tsx",
  "src/app/(dashboard)/dashboard/technician/page.tsx",
  "src/app/(dashboard)/dashboard/pos/sales/[id]/receipt/page.tsx",
  "src/app/estimate-approval/[token]/page.tsx",
  "src/app/(dashboard)/dashboard/inventory/purchase-orders/page.tsx",
  "src/app/track-repair/page.tsx",
  "src/features/repairs/actions/public-tracking.actions.ts",
  "src/app/(dashboard)/dashboard/repairs/[id]/label/page.tsx",
  "src/app/(dashboard)/dashboard/inventory/reorder/page.tsx",
  "prisma/catalog/laptop-catalog-expanded.ts",
  "prisma/catalog/phone-catalog-expanded.ts",
  "prisma/catalog/printer-catalog-expanded.ts",
];

const requiredContent = [
  ["src/features/repairs/components/intake/RepairIntakeWizard.tsx", "Laptop"],
  ["src/features/repairs/components/intake/RepairIntakeWizard.tsx", "printerType"],
  ["src/features/pos/components/PosCheckout.tsx", "PosRepairWorkspace"],
  ["src/features/pos/components/PosRepairWorkspace.tsx", "RepairIntakeWizard"],
  ["src/features/pos/components/PosRepairWorkspace.tsx", "Réparation POS"],
  ["src/app/(dashboard)/dashboard/pos/sales/[id]/receipt/page.tsx", "TICKET DE CAISSE"],
  ["src/app/estimate-approval/[token]/page.tsx", "Validation client"],
  ["src/app/(dashboard)/dashboard/inventory/purchase-orders/page.tsx", "Commandes fournisseurs"],
  ["src/features/repairs/actions/public-tracking.actions.ts", "trackRepairTicket"],
  ["prisma/catalog/phone-catalog-expanded.ts", "Galaxy S23"],
  ["prisma/catalog/printer-catalog-expanded.ts", "Risograph"],
  ["prisma/catalog/laptop-catalog-expanded.ts", "EliteBook"],
];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing file: ${file}`);
}

for (const [file, token] of requiredContent) {
  const fullPath = path.join(root, file);
  const content = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf8") : "";
  if (!content.includes(token)) failures.push(`Missing token "${token}" in ${file}`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (!packageJson.scripts?.["validate:workflows"]) failures.push("Missing package script validate:workflows");

if (failures.length) {
  console.error("Workflow validation failed:\n" + failures.map((f) => `- ${f}`).join("\n"));
  process.exit(1);
}

console.log("Workflow validation passed:");
console.log("- POS repair tab exists");
console.log("- Technician workspace exists");
console.log("- Customer tracking page exists");
console.log("- Repair label print page exists");
console.log("- Inventory reorder and purchase orders exist");
console.log("- POS receipt and public estimate approval pages exist");
console.log("- Laptop, phone and printer expanded catalog files exist");
