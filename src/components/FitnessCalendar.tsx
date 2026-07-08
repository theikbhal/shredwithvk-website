"use client";

import { useState, useMemo } from "react";

type DayStatus = "rest" | "workout" | "cardio" | "flex" | "milestone";

interface DayData {
  day: number;
  date: Date;
  status: DayStatus;
  title?: string;
  weight?: number;
  bodyFat?: number;
}

const STATUS_CONFIG: Record<DayStatus, { color: string; label: string; emoji: string }> = {
  rest: { color: "bg-zinc-800", label: "Rest Day", emoji: "😴" },
  workout: { color: "bg-accent", label: "Workout", emoji: "💪" },
  cardio: { color: "bg-green-500", label: "Cardio", emoji: "🏃" },
  flex: { color: "bg-blue-500", label: "Flexibility", emoji: "🧘" },
  milestone: { color: "bg-yellow-500", label: "Milestone", emoji: "🏆" },
};

const MILESTONES: Record<number, { title: string; weight: number; bodyFat: number }> = {
  1: { title: "Journey Begins", weight: 85, bodyFat: 36 },
  30: { title: "First Month Done", weight: 82, bodyFat: 33 },
  60: { title: "2 Months Strong", weight: 79, bodyFat: 30 },
  90: { title: "Quarter Way!", weight: 76, bodyFat: 27 },
  120: { title: "4 Months In", weight: 73, bodyFat: 24 },
  150: { title: "Half Year Mark", weight: 70, bodyFat: 21 },
  180: { title: "6 Months Done", weight: 68, bodyFat: 19 },
  210: { title: "7 Months Strong", weight: 66, bodyFat: 17 },
  240: { title: "8 Months In", weight: 64, bodyFat: 16 },
  270: { title: "9 Months!", weight: 63, bodyFat: 15 },
  300: { title: "10 Months", weight: 62, bodyFat: 14 },
  330: { title: "Almost There", weight: 62, bodyFat: 14 },
  365: { title: "Transformation Complete!", weight: 62, bodyFat: 14 },
};

function generateYearData(startDate: Date): DayData[] {
  const days: DayData[] = [];
  const pattern: DayStatus[] = [
    "workout", "workout", "cardio", "workout", "workout", "flex", "rest",
    "workout", "workout", "cardio", "workout", "workout", "flex", "rest",
    "workout", "cardio", "workout", "workout", "cardio", "flex", "rest",
  ];

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dayNum = i + 1;

    const status = MILESTONES[dayNum]
      ? "milestone"
      : pattern[i % pattern.length];

    const progress = i / 364;
    const weight = Math.round((85 - 23 * progress) * 10) / 10;
    const bodyFat = Math.round((36 - 22 * progress) * 10) / 10;

    days.push({
      day: dayNum,
      date,
      status,
      title: MILESTONES[dayNum]?.title,
      weight: MILESTONES[dayNum]?.weight ?? weight,
      bodyFat: MILESTONES[dayNum]?.bodyFat ?? bodyFat,
    });
  }

  return days;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function FitnessCalendar() {
  const startDate = useMemo(() => new Date("2022-03-12"), []);
  const allDays = useMemo(() => generateYearData(startDate), [startDate]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  const [view, setView] = useState<"year" | "month" | "journey">("year");

  const monthDays = useMemo(() => {
    return allDays.filter((d) => d.date.getMonth() === selectedMonth);
  }, [allDays, selectedMonth]);

  const firstDayOffset = monthDays.length > 0 ? monthDays[0].date.getDay() : 0;

  const totalWorkouts = allDays.filter((d) => d.status === "workout").length;
  const totalCardio = allDays.filter((d) => d.status === "cardio").length;
  const totalRest = allDays.filter((d) => d.status === "rest").length;
  const streak = useMemo(() => {
    let max = 0;
    let current = 0;
    for (const d of allDays) {
      if (d.status !== "rest") {
        current++;
        max = Math.max(max, current);
      } else {
        current = 0;
      }
    }
    return max;
  }, [allDays]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="gradient-text">365-Day</span> Transformation Calendar
          </h1>
          <p className="text-gray-400">Day 1 to Day 365 — Every rep counts</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-accent">{totalWorkouts}</div>
            <div className="text-gray-400 text-sm">Workouts</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{totalCardio}</div>
            <div className="text-gray-400 text-sm">Cardio Days</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-zinc-500">{totalRest}</div>
            <div className="text-gray-400 text-sm">Rest Days</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{streak}</div>
            <div className="text-gray-400 text-sm">Best Streak</div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(["year", "month", "journey"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                view === v
                  ? "bg-accent text-white"
                  : "bg-card-bg border border-card-border text-gray-400 hover:text-white"
              }`}
            >
              {v === "year" ? "Year Overview" : v === "month" ? "Monthly View" : "Journey"}
            </button>
          ))}
        </div>

        {/* Year Overview - Heatmap */}
        {view === "year" && (
          <div className="bg-card-bg border border-card-border rounded-2xl p-4 sm:p-6 mb-8 overflow-x-auto">
            <h3 className="text-white font-semibold mb-4">Year Overview</h3>
            <div className="flex gap-1 mb-3">
              <span className="text-xs text-gray-500 w-8">-</span>
              {DAYS_OF_WEEK.map((d) => (
                <span key={d} className="text-xs text-gray-500 w-3.5 text-center">{d.charAt(0)}</span>
              ))}
            </div>
            <div className="flex gap-1">
              {MONTHS.map((month, mi) => {
                const monthStart = new Date(startDate);
                monthStart.setMonth(mi);
                const monthDaysAll = allDays.filter((d) => d.date.getMonth() === mi);
                const offset = monthDaysAll.length > 0 ? monthDaysAll[0].date.getDay() : 0;

                return (
                  <div key={month} className="flex flex-col items-center">
                    <span className="text-xs text-gray-500 mb-1">{month.slice(0, 3)}</span>
                    <div className="grid grid-cols-7 gap-0.5">
                      {Array.from({ length: offset }).map((_, i) => (
                        <div key={`e-${i}`} className="w-3.5 h-3.5" />
                      ))}
                      {monthDaysAll.map((day) => (
                        <button
                          key={day.day}
                          onClick={() => {
                            setSelectedDay(day);
                            setSelectedMonth(day.date.getMonth());
                            setView("month");
                          }}
                          className={`w-3.5 h-3.5 rounded-sm ${STATUS_CONFIG[day.status].color} hover:ring-1 hover:ring-white/50 transition-all cursor-pointer`}
                          title={`Day ${day.day}: ${STATUS_CONFIG[day.status].label}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-card-border">
              <span className="text-xs text-gray-500">Less</span>
              {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                <div key={key} className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-sm ${config.color}`} />
                  <span className="text-xs text-gray-400">{config.label}</span>
                </div>
              ))}
              <span className="text-xs text-gray-500">More</span>
            </div>
          </div>
        )}

        {/* Monthly View */}
        {view === "month" && (
          <div className="bg-card-bg border border-card-border rounded-2xl p-4 sm:p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedMonth((m) => (m - 1 + 12) % 12)}
                className="p-2 rounded-lg bg-background hover:bg-accent/20 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{MONTHS[selectedMonth]}</h3>
                <p className="text-gray-400 text-sm">
                  {monthDays.length} days tracked
                </p>
              </div>
              <button
                onClick={() => setSelectedMonth((m) => (m + 1) % 12)}
                className="p-2 rounded-lg bg-background hover:bg-accent/20 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS_OF_WEEK.map((d) => (
                <div key={d} className="text-center text-xs text-gray-500 py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {monthDays.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(selectedDay?.day === day.day ? null : day)}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs transition-all relative ${
                    selectedDay?.day === day.day
                      ? "ring-2 ring-accent bg-accent/20"
                      : STATUS_CONFIG[day.status].color + " hover:opacity-80"
                  }`}
                >
                  <span className={`font-bold ${day.status === "rest" ? "text-gray-400" : "text-white"}`}>
                    {day.date.getDate()}
                  </span>
                  <span className="text-[10px]">{STATUS_CONFIG[day.status].emoji}</span>
                  {day.title && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Day Detail */}
            {selectedDay && (
              <div className="mt-6 p-4 rounded-xl bg-background border border-card-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{STATUS_CONFIG[selectedDay.status].emoji}</span>
                  <div>
                    <div className="text-white font-semibold">Day {selectedDay.day}</div>
                    <div className="text-gray-400 text-sm">
                      {selectedDay.date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                {selectedDay.title && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-3">
                    <span className="text-accent font-semibold">🏆 {selectedDay.title}</span>
                  </div>
                )}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 rounded-lg bg-card-bg">
                    <div className="text-white font-bold">{selectedDay.weight} kg</div>
                    <div className="text-gray-400 text-xs">Weight</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-card-bg">
                    <div className="text-white font-bold">{selectedDay.bodyFat}%</div>
                    <div className="text-gray-400 text-xs">Body Fat</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-card-bg">
                    <div className="text-white font-bold">{STATUS_CONFIG[selectedDay.status].label}</div>
                    <div className="text-gray-400 text-xs">Activity</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Journey Timeline */}
        {view === "journey" && (
          <div className="bg-card-bg border border-card-border rounded-2xl p-4 sm:p-6 mb-8">
            <h3 className="text-white font-semibold mb-6">Transformation Journey</h3>
            <div className="relative">
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-accent/30" />
              <div className="space-y-6">
                {Object.entries(MILESTONES)
                  .sort(([a], [b]) => Number(a) - Number(b))
                  .map(([day, milestone], index) => {
                    const progress = (Number(day) / 365) * 100;
                    const weightLost = 85 - milestone.weight;
                    const bfLost = 36 - milestone.bodyFat;

                    return (
                      <div key={day} className="relative pl-12 sm:pl-16">
                        <div className="absolute left-2 sm:left-4 w-5 h-5 rounded-full bg-accent border-4 border-card-bg z-10" />
                        <div className="p-4 rounded-xl bg-background border border-card-border card-hover">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-accent font-bold text-sm">Day {day}</span>
                            <span className="text-gray-500 text-xs">
                              {Math.round(progress)}% complete
                            </span>
                          </div>
                          <h4 className="text-white font-semibold mb-2">{milestone.title}</h4>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="text-gray-300">
                              ⚖️ <span className="text-white font-medium">{milestone.weight} kg</span>
                              <span className="text-green-400 ml-1">(-{weightLost})</span>
                            </span>
                            <span className="text-gray-300">
                              📉 <span className="text-white font-medium">{milestone.bodyFat}%</span>
                              <span className="text-green-400 ml-1">(-{bfLost}%)</span>
                            </span>
                          </div>
                          <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-accent to-orange-500 rounded-full transition-all"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${config.color}`} />
              <span className="text-gray-400">{config.emoji} {config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
