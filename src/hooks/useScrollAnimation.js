import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    const element = ref.current;
    if (element) {
      // Find all elements with scroll animation classes
      const animateElements = element.querySelectorAll(
        '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
      );
      
      animateElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (element) {
        const animateElements = element.querySelectorAll(
          '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
        );
        animateElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return ref;
};
