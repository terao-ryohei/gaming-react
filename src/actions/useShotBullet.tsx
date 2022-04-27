import { useCallback, useEffect, useRef, useState } from 'react';

import { DEFAULT_SHOOTER_TOP } from '../constants/game-page';
import { BULLET_MOVE_RANGE } from '../constants/settings';

import { useMoveShooter } from './useMoveShooter';

export const useShotBullet: () => {
  shootPos: number;
  bulletHidden: boolean;
  bulletTop: number;
} = () => {
  const shooter = useMoveShooter();
  const [bulletHidden, setBulletHidden] = useState(true);
  const [bulletTop, setBulletTop] = useState(DEFAULT_SHOOTER_TOP - 60);
  const shootFlag = useRef(false);
  const shootPos = useRef(shooter.shootPos);

  const shootBullet = useCallback(() => {
    const timeout = setTimeout(() => {
      setBulletHidden(false);
      shootFlag.current = true;
      setBulletTop(DEFAULT_SHOOTER_TOP - 60);
    }, 60);
    return () => clearTimeout(timeout);
  }, []);

  const moveBullet = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Space' && !shootFlag.current) {
        shootBullet();
      }
    },
    [shootBullet]
  );

  useEffect(() => {
    if (!shootFlag.current) {
      shootPos.current = shooter.shootPos;
    }
  }, [shooter]);

  useEffect(() => {
    document.addEventListener('keydown', moveBullet, false);
  }, [moveBullet]);

  useEffect(() => {
    if (shootFlag.current) {
      const timeout = setTimeout(() => {
        setBulletTop((current) => current - BULLET_MOVE_RANGE);
      }, 60);

      if (bulletTop < 0) {
        setBulletHidden(true);
        shootFlag.current = false;
        setBulletTop(DEFAULT_SHOOTER_TOP - 60);
      }

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [bulletTop, bulletHidden]);

  return { shootPos: shootPos.current, bulletHidden, bulletTop };
};
