import { db } from "./db";

const ATTEMPT_CAP = 10_000;

// FIFO prune on `attempts`: we order by the auto-incremented id (which is
// monotonic with insertion and cheaper than sorting by `timestamp` for the
// same effect) and delete the oldest overflow rows in one bulkDelete.
export async function pruneAttempts(maxRows = ATTEMPT_CAP): Promise<number> {
  const count = await db.attempts.count();
  if (count <= maxRows) return 0;
  const overflow = count - maxRows;
  const oldest = await db.attempts
    .orderBy("id")
    .limit(overflow)
    .primaryKeys();
  await db.attempts.bulkDelete(oldest as number[]);
  return oldest.length;
}

export async function runMaintenance(): Promise<void> {
  await pruneAttempts();
}
