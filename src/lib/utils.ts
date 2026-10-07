import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }
};

export const handleErrorResponse = ( errorResponse : Record<string, any>) : string | undefined => {

  for (const key in errorResponse){
    if (errorResponse.hasOwnProperty(key) &&  errorResponse[key]){
      return errorResponse[key];
    }
  }
}

export const validateEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: string) => {
  const phonePattern = /^[0-9]{8,}$/; // Ensures 8 or more digits
  return phonePattern.test(phone);
};