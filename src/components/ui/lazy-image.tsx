'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  threshold?: number;
}

export function LazyImage({ threshold = 0.1, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={imgRef}
      className={`relative transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {isVisible && (
        <Image
          {...props}
          onLoad={() => setIsLoaded(true)}
          alt={props.alt || 'Lazy loaded image'}
        />
      )}
    </div>
  );
}
