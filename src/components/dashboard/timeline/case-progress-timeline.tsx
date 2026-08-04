"use client";

import { useMemo, useState } from "react";
import { startOfWeek, addDays, eachDayOfInterval, isSameDay } from "date-fns";
import { Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepCard } from "./step-card";
import { DateNavigation } from "./date-navigation";
import { TimelineWeekHeader } from "./timeline-week-header";
import { TimelineEmptyPattern } from "./timeline-empty-pattern";
import { CaseStep } from "@/mock-data/dossier";

interface CaseProgressTimelineProps {
  steps: CaseStep[];
}

export function CaseProgressTimeline({ steps }: CaseProgressTimelineProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const goToNextWeek = () =>
    setCurrentWeekStart((prev) => addDays(prev, 7));
  const goToPreviousWeek = () =>
    setCurrentWeekStart((prev) => addDays(prev, -7));
  const goToToday = () =>
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const goToDate = (date: Date) =>
    setCurrentWeekStart(startOfWeek(date, { weekStartsOn: 1 }));

  const currentWeek = useMemo(() => {
    const weekStart = startOfWeek(currentWeekStart, { weekStartsOn: 1 });
    return eachDayOfInterval({
      start: weekStart,
      end: addDays(weekStart, 6),
    });
  }, [currentWeekStart]);

  const today = new Date();
  const todayIndex = currentWeek.findIndex((day) => isSameDay(day, today));

  const scheduledSteps = steps.filter((s): s is CaseStep & { date: string } => Boolean(s.date));

  const columnWidth = 162;
  const cardHeight = 108;
  const gapBetweenCards = 30;
  const horizontalPadding = 20;

  const stepsInWeek = useMemo(
    () =>
      scheduledSteps
        .map((step) => ({
          step,
          dayIndex: currentWeek.findIndex((day) =>
            isSameDay(day, new Date(step.date))
          ),
        }))
        .filter((s) => s.dayIndex !== -1),
    [scheduledSteps, currentWeek]
  );

  const weekStartDate = currentWeek[0];
  const weekEndDate = currentWeek[currentWeek.length - 1];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border flex flex-col">
      <div className="border-b bg-background px-4 py-4 shrink-0">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-4 shadow-none"
            onClick={goToToday}
          >
            Today
          </Button>
          <DateNavigation
            startDate={weekStartDate}
            endDate={weekEndDate}
            onPrevious={goToPreviousWeek}
            onNext={goToNextWeek}
            onDateSelect={goToDate}
          />
        </div>
      </div>

      <div className="flex flex-col overflow-auto w-full relative">
        <TimelineWeekHeader weekDays={currentWeek} />

        <div className="relative py-6 w-max min-w-full">
          {stepsInWeek.length === 0 && <TimelineEmptyPattern />}

          {todayIndex !== -1 && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                left: `${todayIndex * columnWidth + columnWidth / 2}px`,
                top: 0,
                bottom: 0,
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <Triangle
                  className="size-4 text-[#9971F0] rotate-180"
                  fill="#9971F0"
                />
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[8px] bottom-0 w-[3px]"
                style={{ backgroundColor: "#9971F0" }}
              />
            </div>
          )}

          <div
            className="grid w-full"
            style={{
              gridTemplateColumns: `repeat(7, ${columnWidth}px)`,
              gridAutoRows: `${cardHeight}px`,
              gap: `${gapBetweenCards}px 0`,
              minHeight: `${cardHeight}px`,
            }}
          >
            {stepsInWeek.map(({ step, dayIndex }) => (
              <div
                key={step.id}
                className="relative"
                style={{
                  gridColumn: `${dayIndex + 1} / ${dayIndex + 2}`,
                  gridRow: 1,
                  paddingLeft: `${horizontalPadding}px`,
                  paddingRight: `${horizontalPadding}px`,
                }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}