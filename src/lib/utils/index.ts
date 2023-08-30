import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export const getColor = (array: string[]) => {
  const random = Math.floor(Math.random()*array.length)
  return array[random]
}