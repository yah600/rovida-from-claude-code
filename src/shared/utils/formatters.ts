import { format, parseISO } from 'date-fns';

export const formatters = {
  date: (d: string | Date, fmt = 'MMM d, yyyy') => {
    const date = typeof d === 'string' ? parseISO(d) : d;
    return format(date, fmt);
  },

  dateTime: (d: string | Date) => {
    const date = typeof d === 'string' ? parseISO(d) : d;
    return format(date, 'MMM d, yyyy h:mm a');
  },

  time: (d: string | Date) => {
    const date = typeof d === 'string' ? parseISO(d) : d;
    return format(date, 'h:mm a');
  },

  currency: (amount: number, currency = 'USD', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount);
  },

  number: (n: number, decimals = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(n);
  },

  percent: (n: number, decimals = 1) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(n / 100);
  },

  phone: (p: string) => {
    const cleaned = p.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return p;
  },

  truncate: (str: string, len: number) => {
    return str.length > len ? str.slice(0, len) + '...' : str;
  }
};
