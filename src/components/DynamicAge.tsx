'use client';

import { useEffect, useState } from 'react';
import { DateCalculator } from '@/lib/DateCalculator';

/**
 * Dynamic Age Component
 *
 * Dependency Inversion Principle:
 * Depends on DateCalculator service (abstraction)
 *
 * @example
 * <DynamicAge birthday="1984-09-26" />
 */
interface DynamicAgeProps {
  birthday: string; // ISO date string (YYYY-MM-DD)
  className?: string;
}

export function DynamicAge({ birthday, className }: DynamicAgeProps) {
  const [age, setAge] = useState<string>('');

  useEffect(() => {
    // Client-side only calculation
    const birthdayDate = DateCalculator.parseDate(birthday);
    const years = DateCalculator.calculateAge(birthdayDate);
    setAge(DateCalculator.formatAge(years));
  }, [birthday]);

  if (!age) {
    return null; // Don't render until calculated
  }

  return <span className={className}>{age}</span>;
}
