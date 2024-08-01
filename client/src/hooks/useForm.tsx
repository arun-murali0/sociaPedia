import { ReactElement, useState } from 'react';

// multiform custom Hook
export const useMultiForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  function next() {
    setCurrentStepIndex((index: number) => {
      if (index > steps.length - 1) return index;
      return index + 1;
    });
  }
  function prev() {
    setCurrentStepIndex((index: number) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }
  function gotoIndex() {
    setCurrentStepIndex((index: number) => {
      return index;
    });
  }

  return {
    next,
    prev,
    gotoIndex,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    steps,
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
  };
};
