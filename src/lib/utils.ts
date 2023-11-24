import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const concatenateCoordinates = (coordinatesArray: number[][][]) => {
  return coordinatesArray.reduce((acc, coordinates) => {
    return acc.concat(coordinates);
  }, []);
};
