"use client";

const isMockEnabled = localStorage.getItem('mockEnabled') === 'true';

export const useMockData = <T>(data: T, mockData: T): T => {
  return isMockEnabled ? mockData : data;
};