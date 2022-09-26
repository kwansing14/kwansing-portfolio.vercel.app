import { useState, useEffect, useRef } from 'react';

export const useIntersecting = (ref: any, runOnce = true) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (runOnce && entry.isIntersecting) observerRef.current?.disconnect();
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      observerRef.current?.observe(ref.current);
      return () => observerRef.current?.disconnect();
    }
  }, [ref]);

  return [isIntersecting];
};

/**
 * Usage example:
 *
 * import { useRef } from 'react';
 * import { useIntersecting } from '../customHooks/useIntersecting';
 *
 * const Component = () => {
 *   const ref = useRef()
 *   const [isVisible] = useIntersecting(ref)
 *   return <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>
 * }
 */
