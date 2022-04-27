import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DEFAULT_ENEMY_LEFT, DEFAULT_ENEMY_TOP } from '../constants/game-page';
import { CLEAR_URL } from '../constants/page-url';

import { useShotBullet } from './useShotBullet';

export const useDestroy: () => {
  aliveEnemy: boolean[][];
} = () => {
  const navigate = useNavigate();
  const { shootPos, bulletTop } = useShotBullet();
  const enemyLeft = DEFAULT_ENEMY_LEFT();
  const enemyTop = DEFAULT_ENEMY_TOP();
  const [clearFlag, setClearFlag] = useState(false);

  const arrayValue = [...Array(3)].map(() => true);
  const aliveEnemy = useRef([...Array(2)].map(() => arrayValue));

  useEffect(() => {
    enemyTop.forEach((top: number, topIndex: number) => {
      enemyLeft.forEach((left: number, leftIndex: number) => {
        if (left - 50 < shootPos && shootPos < left + 25) {
          if (bulletTop < top && aliveEnemy.current[topIndex][leftIndex]) {
            aliveEnemy.current[topIndex][leftIndex] = false;
          }
        }
      });
      setClearFlag(
        aliveEnemy.current[topIndex].every((value) => value === false) === true
      );
    });
  }, [shootPos, bulletTop, aliveEnemy]);

  useEffect(() => {
    if (clearFlag) {
      navigate(CLEAR_URL);
    }
  }, [clearFlag]);

  return { aliveEnemy: aliveEnemy.current };
};
