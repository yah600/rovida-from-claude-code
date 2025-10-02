export const validators = {
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  phone: (v: string) => /^\+?[\d\s\-()]{10,}$/.test(v.replace(/\s/g, '')),
  required: (v: any) => v !== null && v !== undefined && v !== '',
  min: (min: number) => (v: number) => v >= min,
  max: (max: number) => (v: number) => v <= max,
  minLength: (len: number) => (v: string) => v.length >= len,
  maxLength: (len: number) => (v: string) => v.length <= len,
  pattern: (regex: RegExp) => (v: string) => regex.test(v),
  url: (v: string) => {
    try {
      new URL(v);
      return true;
    } catch {
      return false;
    }
  }
};
