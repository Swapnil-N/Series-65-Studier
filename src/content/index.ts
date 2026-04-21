import {
  sampleCards,
  sampleLesson,
  sampleQuestions,
} from "./sample/1.1-sample";
import type { Card, Lesson, Question } from "../types/content";

export const allContent: {
  lessons: Lesson[];
  cards: Card[];
  questions: Question[];
} = {
  lessons: [sampleLesson],
  cards: sampleCards,
  questions: sampleQuestions,
};
