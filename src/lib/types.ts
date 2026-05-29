export interface FarmSettings {
  batchAStartDate: string; // ISO date string, default June 4 2026
  batch300Age: number; // current age in days
  goatDoes: number;
  goatBucks: number;
  goatKids: number;
  openingBalance: number;
  farmLocation: string;
  onboardingComplete: boolean;
}

export interface MortalityLog {
  id: string;
  date: string;
  batch: 'A' | '300';
  count: number;
  cause: string;
  notes: string;
}

export interface FeedLog {
  id: string;
  date: string;
  batch: 'A' | '300';
  phase: 'pre-starter' | 'starter' | 'finisher';
  bags: number;
  kgPerBag: number;
  totalKg: number;
  costPerBag: number;
}

export interface WeightLog {
  id: string;
  date: string;
  batch: 'A' | '300';
  batchDay: number;
  avgWeight: number; // grams
  sampleSize: number;
}

export interface ReminderItem {
  id: string;
  title: string;
  dueDate: string;
  category: 'vaccination' | 'medication' | 'management' | 'sales' | 'financial' | 'custom';
  batch: 'A' | '300' | 'goats' | 'general';
  recurrence?: 'daily' | 'weekly' | 'monthly' | 'none';
  completed: boolean;
  isSystem: boolean; // auto-generated from playbook
}

export interface CostEntry {
  id: string;
  date: string;
  category: 'chicks' | 'feed' | 'vaccine' | 'medication' | 'labour' | 'utilities' | 'equipment' | 'other';
  description: string;
  amount: number;
  batch: 'A' | '300' | 'goats' | 'general';
}

export interface RevenueEntry {
  id: string;
  date: string;
  type: 'live-birds' | 'dressed-birds' | 'goats' | 'eggs' | 'other';
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  customer: string;
  batch: 'A' | '300' | 'goats';
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  location: string;
  preferredCut: 'live' | 'dressed' | 'both';
  notes: string;
}

export interface Order {
  id: string;
  customerId: string;
  date: string;
  quantity: number;
  type: 'live' | 'dressed';
  pricePerUnit: number;
  total: number;
  status: 'interested' | 'confirmed' | 'paid' | 'delivered';
  batch: 'A' | '300';
  notes: string;
}

export interface ChecklistItem {
  id: string;
  date: string; // which date this checklist belongs to
  task: string;
  category: string;
  completed: boolean;
  isSystem: boolean;
}

export interface FarmStore {
  settings: FarmSettings;
  mortalityLogs: MortalityLog[];
  feedLogs: FeedLog[];
  weightLogs: WeightLog[];
  reminders: ReminderItem[];
  costs: CostEntry[];
  revenues: RevenueEntry[];
  customers: Customer[];
  orders: Order[];
  checklists: ChecklistItem[];
  chatHistory: { role: 'user' | 'assistant'; content: string; timestamp: string }[];
  playbookChatHistory: { role: 'user' | 'assistant'; content: string; timestamp: string }[];
}

export const DEFAULT_SETTINGS: FarmSettings = {
  batchAStartDate: '2026-06-04',
  batch300Age: 28,
  goatDoes: 10,
  goatBucks: 2,
  goatKids: 3,
  openingBalance: 0,
  farmLocation: 'Chisamba, Zambia',
  onboardingComplete: false,
};

export const EMPTY_STORE: FarmStore = {
  settings: DEFAULT_SETTINGS,
  mortalityLogs: [],
  feedLogs: [],
  weightLogs: [],
  reminders: [],
  costs: [],
  revenues: [],
  customers: [],
  orders: [],
  checklists: [],
  chatHistory: [],
  playbookChatHistory: [],
};
