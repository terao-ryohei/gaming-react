import { useState, useRef, useCallback, useEffect } from 'react';

import { DEFAULT_SHOOTER_LEFT } from '../constants/game-page';
import { FIELD_SIZE, SHOOTER_MOVE_RANGE } from '../constants/settings';

export const useMoveShooter: () => {
  shooterLeft: number;
  shootPos: number;
} = () => {
  const [shooterLeft, setShooterLeft] = useState(DEFAULT_SHOOTER_LEFT);
  const shootFlag = useRef(true);
  const shootPos = useRef(DEFAULT_SHOOTER_LEFT);

  const moveShooter = useCallback((event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft') {
      setShooterLeft((current) => {
        if (current > (window.innerWidth - FIELD_SIZE) / 2) {
          if (shootFlag.current) {
            shootPos.current = current - SHOOTER_MOVE_RANGE;
          }
          return current - SHOOTER_MOVE_RANGE;
        }
        return (window.innerWidth - FIELD_SIZE) / 2;
      });
    }
    if (event.code === 'ArrowRight') {
      setShooterLeft((current) => {
        if (current < (window.innerWidth + FIELD_SIZE) / 2 - 50) {
          if (shootFlag.current) {
            shootPos.current = current + SHOOTER_MOVE_RANGE;
          }
          return current + SHOOTER_MOVE_RANGE;
        }
        return (window.innerWidth + FIELD_SIZE) / 2 - 50;
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', moveShooter, false);
  }, [moveShooter]);

  return { shooterLeft, shootPos: shootPos.current };
};
