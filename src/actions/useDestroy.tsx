import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DEFAULT_ENEMY_LEFT, DEFAULT_ENEMY_TOP } from '../constants/game-page';
import { CLEAR_URL } from '../constants/page-url';

import { useShotBullet } from './useShotBullet';

export const useDestroy: () => {
  aliveEnemy: boolean[][];
} = () => {
  // ルーターHooksを取得
  const navigate = useNavigate();

  // 自機弾動作処理結果の取得
  const { shootPos, bulletTop } = useShotBullet();

  // 変数宣言
  const enemyLeft = DEFAULT_ENEMY_LEFT();
  const enemyTop = DEFAULT_ENEMY_TOP();
  const arrayValue = [...Array(3)].map(() => true);
  const aliveEnemy = useRef([...Array(2)].map(() => arrayValue));

  // ローカルstate宣言
  const [clearFlag, setClearFlag] = useState(false);

  /**
   * 弾衝突処理
   * 自機弾と敵機が接触した場合、敵機生存フラグをオフにする。
   * 全部オフになった場合、クリアフラグをオンにする
   */
  useEffect(() => {
    // 敵機の数分ループ処理を行い、衝突判定を行う
    enemyTop.forEach((top: number, topIndex: number) => {
      enemyLeft.forEach((left: number, leftIndex: number) => {
        if (left - 50 < shootPos && shootPos < left + 25) {
          if (bulletTop < top && aliveEnemy.current[topIndex][leftIndex]) {
            aliveEnemy.current[topIndex][leftIndex] = false;
          }
        }
      });

      // クリアフラグをオンにする
      setClearFlag(
        aliveEnemy.current[topIndex].every((value) => value === false) === true
      );
    });
  }, [shootPos, bulletTop, aliveEnemy]);

  /**
   * ゲームクリア処理
   * クリアフラグがオンになった時、クリア画面に遷移する
   */
  useEffect(() => {
    if (clearFlag) {
      navigate(CLEAR_URL);
    }
  }, [clearFlag]);

  return { aliveEnemy: aliveEnemy.current };
};
