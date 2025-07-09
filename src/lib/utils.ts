import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 
 * @param email 
 * @returns boolean
 * Checks if the provided email is an admin email.
 * Currently, it checks against a hardcoded list of admin emails.
 * This can be extended to fetch from a database or configuration file in the future.
 */
export const isAdmin = (email: string): boolean => {
  const adminEmails = ["admin@gmail.com"];
  return adminEmails.includes(email);
};

/**
 * 
 * @param originalDate 
 * @param colleagueDays 
 * @returns string
 * Suggests a replacement date for a given original date.
 * The replacement date is the next available day that matches one of the colleague's days.
 */
export const suggestReplacementDate = (originalDate: string, colleagueDays: string[]) => {
  let suggested = dayjs(originalDate).add(1, 'day');
  while (!colleagueDays.includes(suggested.format('dddd'))) {
    suggested = suggested.add(1, 'day');
  }
  return suggested.format("YYYY-MM-DD");
};

