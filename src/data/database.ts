// ============================================================
// REPAIR COST CALCULATOR - DATABASE
// Expandable data layer for all furniture categories
// ============================================================

import sofaSkus from "./sofa-skus.json";

// --- FABRIC SERIES ---
export interface FabricSeries {
  code: string;
  name: string;
  fullName: string;
  pricePerMeter: number;
}

export const FABRIC_SERIES: FabricSeries[] = [
  { code: "LV", name: "Vegan", fullName: "Leatherette Vegan Series", pricePerMeter: 350 },
  { code: "FO", name: "Omega", fullName: "Polyester Fabric Omega Series", pricePerMeter: 170 },
  { code: "FM", name: "Malphino", fullName: "Polyester Fabric Malphino Series", pricePerMeter: 280 },
  { code: "FV", name: "Vogue", fullName: "Polyester Fabric Vogue Series", pricePerMeter: 180 },
  { code: "FN", name: "Napoli", fullName: "Polyester Fabric Napoli Series", pricePerMeter: 320 },
  { code: "FR", name: "Reflection", fullName: "Polyester Fabric Reflection Series", pricePerMeter: 200 },
  { code: "FU", name: "Velour", fullName: "Polyester Fabric Velour Series", pricePerMeter: 320 },
  { code: "LR", name: "Robin", fullName: "Leatherette Robin Series", pricePerMeter: 320 },
  { code: "LO", name: "Onyx", fullName: "Leatherette Onyx Series", pricePerMeter: 350 },
  { code: "FP", name: "Plush", fullName: "Polyester Fabric Plush Series", pricePerMeter: 300 },
  { code: "FC", name: "Chenille", fullName: "Polyester Fabric Chenille Series", pricePerMeter: 300 },
  { code: "FJ", name: "Jio", fullName: "Polyester Fabric Jio Series", pricePerMeter: 150 },
  { code: "FW", name: "Warpknit", fullName: "Polyester Fabric Warpknit Series", pricePerMeter: 100 },
  { code: "LG", name: "Lagoon", fullName: "Leatherette Lagoon Series", pricePerMeter: 320 },
];

export function getFabricByCode(code: string): FabricSeries | undefined {
  return FABRIC_SERIES.find((f) => f.code === code);
}

// --- SEATER CONFIGURATION ---
export interface SectionConfig {
  label: string;
  meters: number;
  foamPrice: number;
  frameRate: number;
  labourCharges: number;
}

export interface SeaterConfig {
  code: string;
  sections: SectionConfig[];
  totalMeters: number;
  totalFoamPrice: number;
  labourCharges: number;
}

export const SEATER_CONFIGS: SeaterConfig[] = [
  { code: "N1", sections: [{ label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 }], totalMeters: 8, totalFoamPrice: 800, labourCharges: 2000 },
  { code: "N0", sections: [{ label: "N0", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 }], totalMeters: 8, totalFoamPrice: 800, labourCharges: 2000 },
  { code: "N2", sections: [{ label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 }], totalMeters: 10, totalFoamPrice: 1800, labourCharges: 2500 },
  { code: "N3", sections: [{ label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 }], totalMeters: 13, totalFoamPrice: 2500, labourCharges: 3000 },
  { code: "LRN3", sections: [{ label: "LRN3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 }], totalMeters: 13, totalFoamPrice: 2500, labourCharges: 3000 },
  { code: "N3LR", sections: [{ label: "N3LR", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 }], totalMeters: 13, totalFoamPrice: 2500, labourCharges: 3000 },
  {
    code: "L3C",
    sections: [
      { label: "Section", meters: 10, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "Chaise", meters: 7, foamPrice: 1500, frameRate: 1500, labourCharges: 2200 },
    ],
    totalMeters: 17,
    totalFoamPrice: 4000,
    labourCharges: 5200,
  },
  {
    code: "R3C",
    sections: [
      { label: "Section", meters: 10, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "Chaise", meters: 7, foamPrice: 1500, frameRate: 1500, labourCharges: 2200 },
    ],
    totalMeters: 17,
    totalFoamPrice: 4000,
    labourCharges: 5200,
  },
  {
    code: "L2C",
    sections: [
      { label: "Section", meters: 8, foamPrice: 2000, frameRate: 2000, labourCharges: 2800 },
      { label: "Chaise", meters: 7, foamPrice: 1500, frameRate: 1500, labourCharges: 2200 },
    ],
    totalMeters: 15,
    totalFoamPrice: 3500,
    labourCharges: 5000,
  },
  {
    code: "R2C",
    sections: [
      { label: "Section", meters: 8, foamPrice: 2000, frameRate: 2000, labourCharges: 2800 },
      { label: "Chaise", meters: 7, foamPrice: 1500, frameRate: 1500, labourCharges: 2200 },
    ],
    totalMeters: 15,
    totalFoamPrice: 3500,
    labourCharges: 5000,
  },
  {
    code: "C22",
    sections: [
      { label: "Corner", meters: 7, foamPrice: 2200, frameRate: 1500, labourCharges: 2200 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
    ],
    totalMeters: 27,
    totalFoamPrice: 5800,
    labourCharges: 5500,
  },
  {
    code: "C23",
    sections: [
      { label: "Corner", meters: 7, foamPrice: 2200, frameRate: 1500, labourCharges: 2200 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
    ],
    totalMeters: 30,
    totalFoamPrice: 6500,
    labourCharges: 6000,
  },
  {
    code: "C32",
    sections: [
      { label: "Corner", meters: 7, foamPrice: 2200, frameRate: 1500, labourCharges: 2200 },
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
    ],
    totalMeters: 30,
    totalFoamPrice: 6500,
    labourCharges: 6000,
  },
  {
    code: "N22",
    sections: [
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
    ],
    totalMeters: 20,
    totalFoamPrice: 3600,
    labourCharges: 3800,
  },
  {
    code: "N32",
    sections: [
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
    ],
    totalMeters: 23,
    totalFoamPrice: 4300,
    labourCharges: 4000,
  },
  {
    code: "N23",
    sections: [
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
    ],
    totalMeters: 23,
    totalFoamPrice: 4300,
    labourCharges: 4000,
  },
  {
    code: "N211",
    sections: [
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 },
      { label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 },
    ],
    totalMeters: 26,
    totalFoamPrice: 3400,
    labourCharges: 4500,
  },
  {
    code: "N311",
    sections: [
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 },
      { label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 },
    ],
    totalMeters: 29,
    totalFoamPrice: 4100,
    labourCharges: 5000,
  },
  {
    code: "N321",
    sections: [
      { label: "N3", meters: 13, foamPrice: 2500, frameRate: 2500, labourCharges: 3000 },
      { label: "N2", meters: 10, foamPrice: 1800, frameRate: 1800, labourCharges: 2500 },
      { label: "N1", meters: 8, foamPrice: 800, frameRate: 800, labourCharges: 2000 },
    ],
    totalMeters: 31,
    totalFoamPrice: 5100,
    labourCharges: 5500,
  },
];

export function getSeaterByCode(code: string): SeaterConfig | undefined {
  return SEATER_CONFIGS.find((s) => s.code === code);
}

// --- SKU ---
export interface SKU {
  fullCode: string;
}

export const SOFA_SKUS: SKU[] = (sofaSkus as string[]).map((code) => ({ fullCode: code }));

// --- ISSUE TYPES ---
export interface IssueType {
  id: string;
  name: string;
  description: string;
  hasQuantity: boolean;
  quantityLabel?: string;
  unitCost: number;
  labourCost: number;
  costType: "fixed" | "fabric_based" | "sagging" | "frame_based";
}

export const SOFA_ISSUES: IssueType[] = [
  {
    id: "fabric_replacement",
    name: "Fabric Replacement",
    description: "Complete fabric replacement based on your sofa's fabric series and seater configuration",
    hasQuantity: false,
    unitCost: 0,
    labourCost: 0,
    costType: "fabric_based",
  },
  {
    id: "sagging",
    name: "Sagging Issue",
    description: "Fabric + foam replacement to fix sagging seat cushions",
    hasQuantity: false,
    unitCost: 0,
    labourCost: 0,
    costType: "sagging",
  },
  {
    id: "leg_replacement",
    name: "Leg Replacement",
    description: "Per leg replacement (wooden/metal legs)",
    hasQuantity: true,
    quantityLabel: "Number of legs",
    unitCost: 450,
    labourCost: 800,
    costType: "fixed",
  },
  {
    id: "frame_repair",
    name: "Frame Repair",
    description: "Structural frame repair and reinforcement",
    hasQuantity: false,
    unitCost: 0,
    labourCost: 0,
    costType: "frame_based",
  },
  {
    id: "stitching_repair",
    name: "Stitching Repair",
    description: "Seam and stitching repair across the sofa",
    hasQuantity: false,
    unitCost: 1300,
    labourCost: 800,
    costType: "fixed",
  },
  {
    id: "cushion_repair",
    name: "Cushion Repair",
    description: "Individual cushion restoration or replacement",
    hasQuantity: true,
    quantityLabel: "Number of cushions",
    unitCost: 800,
    labourCost: 800,
    costType: "fixed",
  },
  {
    id: "armrest_repair",
    name: "Arm Rest Repair",
    description: "Per side armrest repair or replacement",
    hasQuantity: true,
    quantityLabel: "Number of sides",
    unitCost: 1700,
    labourCost: 1000,
    costType: "fixed",
  },
];

// --- CATEGORY DEFINITIONS ---
export interface Category {
  id: string;
  name: string;
  code: string;
  skus: SKU[];
  issues: IssueType[];
}

export const CATEGORIES: Category[] = [
  {
    id: "sofa",
    name: "Sofa",
    code: "WSFA",
    skus: SOFA_SKUS,
    issues: SOFA_ISSUES,
  },
  {
    id: "recliner",
    name: "Recliner",
    code: "WSRC",
    skus: [],
    issues: [],
  },
  {
    id: "wingchair",
    name: "Wingchair",
    code: "WSWC",
    skus: [],
    issues: [],
  },
  {
    id: "lounger",
    name: "Lounger Chair",
    code: "WSLC",
    skus: [],
    issues: [],
  },
  {
    id: "upholstery_bed",
    name: "Upholstery Bed",
    code: "WSUB",
    skus: [],
    issues: [],
  },
];

export const LOGISTICS_COST = 400;

// --- COST CALCULATION ---
export interface IssueSelection {
  issueId: string;
  quantity: number;
}

export interface CostBreakdown {
  issueId: string;
  issueName: string;
  fabricCost: number;
  foamCost: number;
  labourCost: number;
  unitCost: number;
  quantity: number;
  total: number;
}

export function calculateRepairCost(
  category: Category,
  sku: SKU,
  selections: IssueSelection[]
): { breakdown: CostBreakdown[]; subtotal: number; logistics: number; total: number } {
  // Try to extract fabric and seater codes from the SKU string
  // SKU format varies, so we try multiple patterns
  const code = sku.fullCode;

  // Try to find a 2-char fabric code (matches known fabric codes)
  const fabricCodes = FABRIC_SERIES.map((f) => f.code);
  let fabricCode = "";
  for (const fc of fabricCodes) {
    if (code.includes(fc)) {
      fabricCode = fc;
      break;
    }
  }

  // Try to find a seater code
  const seaterCodes = SEATER_CONFIGS.map((s) => s.code);
  let seaterCode = "";
  for (const sc of seaterCodes) {
    if (code.includes(sc)) {
      seaterCode = sc;
      break;
    }
  }

  const fabric = getFabricByCode(fabricCode);
  const seater = getSeaterByCode(seaterCode);

  const fabricCostPerMeter = fabric?.pricePerMeter || 0;
  const totalMeters = seater?.totalMeters || 0;
  const totalFoamPrice = seater?.totalFoamPrice || 0;

  const fabricTotalCost = fabricCostPerMeter * totalMeters;

  const breakdown: CostBreakdown[] = [];

  for (const sel of selections) {
    const issue = category.issues.find((i) => i.id === sel.issueId);
    if (!issue) continue;

    let fabricCost = 0;
    let foamCost = 0;
    let labourCost = 0;
    let unitCost = 0;
    const qty = issue.hasQuantity ? Math.max(sel.quantity, 1) : 1;

    switch (issue.costType) {
      case "fabric_based":
        fabricCost = fabricTotalCost;
        labourCost = seater?.labourCharges || 0;
        break;
      case "sagging":
        fabricCost = fabricTotalCost;
        foamCost = totalFoamPrice;
        labourCost = seater?.labourCharges || 0;
        break;
      case "frame_based":
        if (seater) {
          for (const section of seater.sections) {
            unitCost += section.frameRate + section.foamPrice;
            labourCost += section.labourCharges;
          }
        }
        break;
      case "fixed":
        unitCost = issue.unitCost * qty;
        labourCost = issue.labourCost;
        break;
    }

    const total = fabricCost + foamCost + unitCost + labourCost;

    breakdown.push({
      issueId: issue.id,
      issueName: issue.name,
      fabricCost,
      foamCost,
      labourCost,
      unitCost,
      quantity: qty,
      total,
    });
  }

  const subtotal = breakdown.reduce((sum, b) => sum + b.total, 0);
  const logistics = LOGISTICS_COST;

  return { breakdown, subtotal, logistics, total: subtotal + logistics };
}
