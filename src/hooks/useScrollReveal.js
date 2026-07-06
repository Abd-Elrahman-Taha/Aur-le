import { useEffect, useRef } from 'react';

/**
 * Hook: triggers .visible class on elements with .scroll-reveal
 * when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.15, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll('.scroll-reveal');
    if (el.classList.contains('scroll-reveal')) observer.observe(el);
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold, ...deps]);

  return ref;
}
