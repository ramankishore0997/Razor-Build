// IST (Asia/Kolkata) time helpers — independent of viewer's local timezone.

const IST_TZ = "Asia/Kolkata";

// Returns the current wall-clock parts in IST.
function nowInIST(): { year: number; month: number; day: number; hour: number; minute: number; weekday: number } {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: IST_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  });
  const parts = fmt.formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekdayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
    weekday: weekdayMap[get("weekday")] ?? 0,
  };
}

// Returns the UTC timestamp (ms) for a given IST wall-clock time.
// IST is UTC+5:30 with no DST, so this is straightforward.
function istWallToUtcMs(year: number, month: number, day: number, hour: number, minute: number): number {
  // Build as if it were UTC, then subtract the IST offset of +5:30 to get the true UTC instant.
  const asIfUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  const IST_OFFSET_MS = (5 * 60 + 30) * 60 * 1000;
  return asIfUtc - IST_OFFSET_MS;
}

// Milliseconds until the next Sunday 23:59 IST.
export function msUntilSundayMidnightIST(): number {
  const ist = nowInIST();
  // Sunday = 0 in our map. We want the upcoming Sunday at 23:59.
  // If today is Sunday and time < 23:59, target is today; else, next Sunday.
  let daysAhead = (7 - ist.weekday) % 7; // days from today to next Sunday (0 if today)
  // If today IS Sunday but already past 23:59, jump 7 days.
  if (daysAhead === 0 && (ist.hour > 23 || (ist.hour === 23 && ist.minute >= 59))) {
    daysAhead = 7;
  }
  // Build target date in IST
  const targetMs = istWallToUtcMs(ist.year, ist.month, ist.day + daysAhead, 23, 59);
  const nowMs = istWallToUtcMs(ist.year, ist.month, ist.day, ist.hour, ist.minute);
  return Math.max(0, targetMs - nowMs);
}

// Returns "DDd HHh MMm" countdown string.
export function formatCountdown(ms: number): string {
  if (ms <= 0) return "00d 00h 00m";
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

export type IstSlot = {
  iso: string; // UTC ISO of slot
  timeLabel: string; // e.g. "11:00 AM IST"
  dayLabel: string; // e.g. "Mon 26 May"
};

// Generates upcoming booking slots in IST. Skips Sundays, requires ≥1hr lead time.
export function generateIstSlots(slotHours: number[] = [11, 14, 17], maxSlots = 6): IstSlot[] {
  const ist = nowInIST();
  const slots: IstSlot[] = [];
  const nowUtcMs = Date.now();
  const leadMs = 60 * 60 * 1000;

  // Walk forward day by day
  for (let offset = 0; offset < 10 && slots.length < maxSlots; offset++) {
    const dayWeekday = (ist.weekday + offset) % 7;
    if (dayWeekday === 0) continue; // skip Sunday

    for (const h of slotHours) {
      if (slots.length >= maxSlots) break;
      const slotUtcMs = istWallToUtcMs(ist.year, ist.month, ist.day + offset, h, 0);
      if (slotUtcMs < nowUtcMs + leadMs) continue;

      const slotDate = new Date(slotUtcMs);
      const dayLabel = new Intl.DateTimeFormat("en-IN", {
        timeZone: IST_TZ,
        weekday: "short",
        day: "numeric",
        month: "short",
      }).format(slotDate);
      const timeLabel =
        new Intl.DateTimeFormat("en-IN", {
          timeZone: IST_TZ,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(slotDate) + " IST";

      slots.push({ iso: slotDate.toISOString(), timeLabel, dayLabel });
    }
  }
  return slots;
}
