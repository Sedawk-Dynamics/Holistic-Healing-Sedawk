// Single source of truth for the bookable programs.
// The server re-derives the amount from the plan id so the client cannot tamper with the price.
export const PLANS = {
  'level-1': { id: 'level-1', name: 'Foundation Program (Level 1)', amount: 5000, duration: '5 Days' },
  'level-2': { id: 'level-2', name: 'Therapist Certification (Level 2)', amount: 30000, duration: '12 Weeks' },
  'level-3': { id: 'level-3', name: 'Advanced Trainer Program (Level 3)', amount: 60000, duration: '52 Weeks' },
} as const

export type PlanId = keyof typeof PLANS
