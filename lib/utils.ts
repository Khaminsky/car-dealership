import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Filters {
  brands: string[];
  years: number[];
  engineCapacity: [number, number];
  mileage: [number, number];
  transmissions: string[];
  fuelTypes: string[];
}

export interface Car {
  id: number;
  title: string;
  year: number;
  price: number;
  mileage: number;
  engineCapacity: number;
  transmission: string;
  fuelType: string;
  brand: string;
  image: string;
}
