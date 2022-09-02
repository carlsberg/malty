import { DependencyList, useEffect, useLayoutEffect, useRef } from 'react';

interface IPosition {
  x: number;
  y: number;
}

interface IScrollProps {
  prevPos: IPosition;
  currPos: IPosition;
}

const isBrowser = typeof window !== `undefined`;
const zeroPosition = { x: 0, y: 0 };

const getClientRect = (element?: HTMLElement) => element?.getBoundingClientRect();

const getScrollPosition = () => {
  if (!isBrowser) {
    return zeroPosition;
  }
  const targetPosition = getClientRect(document.body);

  if (!targetPosition) {
    return zeroPosition;
  }

  return { x: targetPosition.left, y: targetPosition.top };
};

export const useScrollPosition = (
  effect: (props: IScrollProps) => void,
  deps?: DependencyList,
  wait?: number
): void => {
  const position = useRef(getScrollPosition());

  let throttleTimeout: number | null = null;

  const callBack = () => {
    const currPos = getScrollPosition();
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    if (!isBrowser) {
      return undefined;
    }
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
};

export const usePrevious = (value: number) => {
  const ref = useRef<number>(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
