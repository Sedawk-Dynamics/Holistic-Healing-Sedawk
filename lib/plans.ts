// Single source of truth for everything bookable / buyable on the site.
// The server re-derives the amount from the plan id so the client cannot tamper with the price.
// kind: 'program' = course/session booking, 'product' = physical item that needs a shipping address.
export const PLANS = {
  'level-1': { id: 'level-1', kind: 'program', name: 'Foundation Program (Level 1)', amount: 5000, duration: '5 Days' },
  'level-2': { id: 'level-2', kind: 'program', name: 'Therapist Certification (Level 2)', amount: 30000, duration: '12 Weeks' },
  'level-3': { id: 'level-3', kind: 'program', name: 'Advanced Trainer Program (Level 3)', amount: 60000, duration: '52 Weeks' },
  'nadi-certification': { id: 'nadi-certification', kind: 'program', name: 'Nadi Nakshatra Astrology (Certification Course)', amount: 65000, duration: '6-month program · 21 modules' },
  'nadi-prediction': { id: 'nadi-prediction', kind: 'program', name: 'Nadi Prediction (Personal Reading)', amount: 3100, duration: 'One-time session' },

  // Healing products
  'product-bach-flower': { id: 'product-bach-flower', kind: 'product', name: 'Bach Flower Remedies', amount: 2000, duration: 'Customized essence blend' },
  'product-healing-oil': { id: 'product-healing-oil', kind: 'product', name: 'Healing Oil', amount: 2000, duration: 'Bach Flower blend' },
  'product-hair-growth-oil': { id: 'product-hair-growth-oil', kind: 'product', name: 'Hair Growth Oil', amount: 899, duration: 'Ayurvedic Jadibuti formulation' },
  'product-pain-relief-oil': { id: 'product-pain-relief-oil', kind: 'product', name: 'Pain Relief Oil', amount: 2000, duration: 'Bach Flower blend' },
} as const

export type PlanId = keyof typeof PLANS
