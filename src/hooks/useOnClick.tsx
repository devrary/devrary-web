'use client';
import { RefObject, useEffect } from 'react';

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  handler,
  mouseEvent,
}: {
  ref: RefObject<T>;
  handler: () => void;
  mouseEvent: string;
}) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener(mouseEvent, listener);

    return () => {
      document.removeEventListener(mouseEvent, listener);
    };
  }, []);
}
