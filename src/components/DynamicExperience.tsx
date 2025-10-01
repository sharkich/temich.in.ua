'use client';

import { useEffect, useState } from 'react';
import { DateCalculator } from '@/lib/DateCalculator';

/**
 * Dynamic Experience Component
 *
 * Displays months of experience since a start date
 *
 * @example
 * <DynamicExperience startDate="2023-03-01" />
 */
interface DynamicExperienceProps {
  startDate: string; // ISO date string (YYYY-MM-DD)
  className?: string;
}

export function DynamicExperience({ startDate, className }: DynamicExperienceProps) {
  const [experience, setExperience] = useState<string>('');

  useEffect(() => {
    // Client-side only calculation
    const start = DateCalculator.parseDate(startDate);
    const months = DateCalculator.calculateMonthsSince(start);
    setExperience(DateCalculator.formatExperience(months));
  }, [startDate]);

  if (!experience) {
    return null;
  }

  return <span className={className}>{experience}</span>;
}
