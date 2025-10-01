/**
 * Date Calculator Service
 *
 * Single Responsibility Principle:
 * This class handles ONLY date-related calculations
 *
 * @example
 * const age = DateCalculator.calculateAge(new Date('1984-09-26'));
 * const formatted = DateCalculator.formatAge(age);
 */
export class DateCalculator {
  /**
   * Calculate age from birthday
   * @param birthday - Date of birth
   * @returns Age in years
   */
  static calculateAge(birthday: Date): number {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  /**
   * Calculate months since a start date
   * @param startDate - Start date
   * @returns Number of months since start date
   */
  static calculateMonthsSince(startDate: Date): number {
    const now = new Date();
    return (
      now.getMonth() -
      startDate.getMonth() +
      12 * (now.getFullYear() - startDate.getFullYear())
    );
  }

  /**
   * Format age for display
   * @param years - Age in years
   * @returns Formatted string
   */
  static formatAge(years: number): string {
    return `(${years} years old)`;
  }

  /**
   * Format experience duration for display
   * @param months - Number of months
   * @returns Formatted string
   */
  static formatExperience(months: number): string {
    return `(${months + 1} months)`;
  }

  /**
   * Parse ISO date string to Date object
   * @param isoDate - ISO date string (e.g., "1984-09-26")
   * @returns Date object
   */
  static parseDate(isoDate: string): Date {
    const [year, month, day] = isoDate.split('-').map(Number);
    // Month is 0-indexed in JavaScript
    return new Date(year, month - 1, day);
  }
}
