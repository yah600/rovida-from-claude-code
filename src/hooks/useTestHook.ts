"use client";

import { useState } from 'react';

const useTestHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

export default useTestHook;