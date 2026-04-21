import Dexie, { type Table } from "dexie";
import type {
  Attempt,
  AppSettings,
  Bookmark,
  CardState,
  ContentEdit,
  DailyActivity,
  MissedItem,
  MockExamSession,
  Note,
} from "../types/state";

// Settings is modelled as a single-row keyed table so we can add more keyed
// config rows later without another migration.
export interface SettingsRow {
  key: string;
  value: AppSettings;
}

export const DEFAULT_SETTINGS: AppSettings = {
  darkMode: "auto",
  highContrast: false,
  fontScale: 1,
  newCardsPerDay: 30,
  targetRetention: 0.9,
  cramMode: false,
  dailyGoalCards: 20,
  dailyGoalQuestions: 10,
  lastExportAt: 0,
};

export class Series65DB extends Dexie {
  cardState!: Table<CardState, string>;
  attempts!: Table<Attempt, number>;
  missedQueue!: Table<MissedItem, string>;
  bookmarks!: Table<Bookmark, string>;
  notes!: Table<Note, string>;
  edits!: Table<ContentEdit, string>;
  dailyActivity!: Table<DailyActivity, string>;
  mockSessions!: Table<MockExamSession, string>;
  settings!: Table<SettingsRow, string>;

  constructor() {
    super("series65");
    this.version(1).stores({
      cardState: "cardId",
      attempts: "++id, questionId, topicId, timestamp, mode",
      missedQueue: "questionId, topicId, addedAt",
      bookmarks: "itemId, type",
      notes: "itemId",
      edits: "itemId, type",
      dailyActivity: "date",
      mockSessions: "id, status, startedAt",
      settings: "key",
    });
  }
}

export const db = new Series65DB();

const SETTINGS_KEY = "app";

export async function getSettings(): Promise<AppSettings> {
  const row = await db.settings.get(SETTINGS_KEY);
  if (!row) return { ...DEFAULT_SETTINGS };
  return { ...DEFAULT_SETTINGS, ...row.value };
}

export async function saveSettings(s: AppSettings): Promise<void> {
  await db.settings.put({ key: SETTINGS_KEY, value: s });
}
