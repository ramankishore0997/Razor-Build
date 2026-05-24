export const WHATSAPP_NUMBER = "917065339146";

export type WaIntent =
  | "general"
  | "setup-access"
  | "full-access"
  | "book-call"
  | "roi-tier"
  | "case-study"
  | "exit-discount"
  | "urgency-slot"
  | "founder-call"
  | "support";

type IntentExtras = {
  budget?: string;
  roas?: string;
  slot?: string;
  caseName?: string;
  source?: string;
};

const TEMPLATES: Record<WaIntent, (e: IntentExtras) => string> = {
  general: () =>
    "Hi RAZR — I'd like to know more about your Meta & Google Agency Ad Accounts.",
  "setup-access": () =>
    "Hi RAZR — I'm interested in the SETUP ACCESS tier. Please share details, pricing & next steps.",
  "full-access": () =>
    "Hi RAZR — I'm interested in the FULL ACCESS tier (lifetime guarantee). Please share details, pricing & onboarding timeline.",
  "book-call": (e) =>
    `Hi RAZR — I'd like to BOOK A 15-MIN STRATEGY CALL${e.slot ? ` on ${e.slot}` : ""}. Please confirm.`,
  "roi-tier": (e) =>
    `Hi RAZR — My monthly ad budget is ${e.budget ?? "$5k+"} and I'm targeting ${e.roas ?? "4x+"} ROAS. Which tier do you recommend?`,
  "case-study": (e) =>
    `Hi RAZR — I just read your case study${e.caseName ? ` on ${e.caseName}` : ""}. I'd like similar results — can we talk?`,
  "exit-discount": () =>
    "Hi RAZR — I'd like to claim the LIMITED-TIME ₹5,000 setup discount. Please send details.",
  "urgency-slot": () =>
    "Hi RAZR — I want to CLAIM A SLOT THIS WEEK before onboarding closes. Please confirm availability.",
  "founder-call": () =>
    "Hi RAZR — I'd like to speak directly with the founder about a custom enterprise setup.",
  support: () =>
    "Hi RAZR — I'm an existing client and I need support. Please assist.",
};

export function buildWaLink(intent: WaIntent = "general", extras: IntentExtras = {}): string {
  const template = TEMPLATES[intent] ?? TEMPLATES.general;
  const message = template(extras);
  const source = extras.source ? `\n\n[via: ${extras.source}]` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message + source)}`;
}
