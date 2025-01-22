import { useCallback, useEffect, useRef, useState } from 'react';

interface TouchState {
  startX: number;
  startY: number;
  moveX: number;
  moveY: number;
  isMoving: boolean;
}

interface TouchConfig {
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down', distance: number) => void;
  onTap?: () => void;
  swipeThreshold?: number;
  preventScroll?: boolean;
}

export function useTouch(config: TouchConfig = {}) {
  const { onSwipe, onTap, swipeThreshold = 50, preventScroll = false } = config;

  const [touch, setTouch] = useState<TouchState>({
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    isMoving: false,
  });

  const touchRef = useRef(touch);
  touchRef.current = touch;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouch({
      startX: touch.clientX,
      startY: touch.clientY,
      moveX: 0,
      moveY: 0,
      isMoving: false,
    });
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (preventScroll) {
        e.preventDefault();
      }

      const touch = e.touches[0];
      const moveX = touch.clientX - touchRef.current.startX;
      const moveY = touch.clientY - touchRef.current.startY;

      setTouch((prev) => ({
        ...prev,
        moveX,
        moveY,
        isMoving: true,
      }));
    },
    [preventScroll]
  );

  const handleTouchEnd = useCallback(() => {
    const { moveX, moveY, isMoving } = touchRef.current;

    if (!isMoving) {
      onTap?.();
      return;
    }

    const absX = Math.abs(moveX);
    const absY = Math.abs(moveY);

    if (absX > swipeThreshold || absY > swipeThreshold) {
      if (absX > absY) {
        // Horizontal swipe
        onSwipe?.(moveX > 0 ? 'right' : 'left', absX);
      } else {
        // Vertical swipe
        onSwipe?.(moveY > 0 ? 'down' : 'up', absY);
      }
    }

    setTouch({
      startX: 0,
      startY: 0,
      moveX: 0,
      moveY: 0,
      isMoving: false,
    });
  }, [onSwipe, onTap, swipeThreshold]);

  useEffect(() => {
    const element = document;

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventScroll });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, preventScroll]);

  return {
    isTouching: touch.isMoving,
    touchPosition: {
      x: touch.moveX,
      y: touch.moveY,
    },
  };
}
