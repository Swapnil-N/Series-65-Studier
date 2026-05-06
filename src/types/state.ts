import type { Card, Lesson, Question, SubtopicId, TopicId } from "./content";

export interface CardState {
  cardId: string;
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  reps: number;
  lapses: number;
  state: 0 | 1 | 2 | 3;
  lastReview: number;
  due: number;
}

export interface Attempt {
  id?: number;
  questionId: string;
  subtopicId: SubtopicId;
  topicId: TopicId;
  correct: boolean;
  mode: "quiz" | "mock" | "missed";
  mockId?: string;
  timestamp: number;
}

export interface MissedItem {
  questionId: string;
  topicId: TopicId;
  addedAt: number;
}

export interface Bookmark {
  itemId: string;
  type: "card" | "question" | "lesson";
  createdAt: number;
}

export interface Note {
  itemId: string;
  body: string;
  updatedAt: number;
}

export interface ContentEdit {
  itemId: string;
  type: "card" | "question" | "lesson";
  patch: Partial<Card | Question | Lesson>;
  updatedAt: number;
}

export interface DailyActivity {
  date: string;
  cardsReviewed: number;
  questionsAnswered: number;
  lessonsCompleted: number;
}

export interface MockExamSession {
  id: string;
  startedAt: number;
  pausedMs: number;
  questionIds: string[];
  answers: (0 | 1 | 2 | 3 | null)[];
  currentIndex: number;
  status: "active" | "completed" | "abandoned";
  /**
   * Epoch ms of the last user-visible activity on this session (answer, next,
   * resume click). Used to decide whether to surface the "you were away"
   * prompt on resume — without this field a crash-and-relaunch would always
   * trigger the prompt regardless of how long the user was actually away.
   */
  lastActivityAt?: number;
}

export interface AppSettings {
  darkMode: "auto" | "light" | "dark";
  highContrast: boolean;
  fontScale: number;
  newCardsPerDay: number;
  targetRetention: number;
  cramMode: boolean;
  dailyGoalCards: number;
  dailyGoalQuestions: number;
  lastExportAt: number;
}
