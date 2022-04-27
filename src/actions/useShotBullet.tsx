import { useCallback, useEffect, useRef, useState } from 'react';

import { DEFAULT_SHOOTER_TOP } from '../constants/game-page';
import { BULLET_MOVE_RANGE } from '../constants/settings';

import { useMoveShooter } from './useMoveShooter';

/**
 * 自機弾動作処理
 * @returns {{shootPos: number; bulletHidden: boolean; bulletTop: number;}} 処理結果
 */
export const useShotBullet = (): {
  shootPos: number;
  bulletHidden: boolean;
  bulletTop: number;
} => {
  // 自機移動処理結果の取得
  const shooter = useMoveShooter();

  // ローカルstateの宣言
  const [bulletHidden, setBulletHidden] = useState(true);
  const [bulletTop, setBulletTop] = useState(DEFAULT_SHOOTER_TOP - 60);
  // refの宣言
  const shootFlag = useRef(false);
  const shootPos = useRef(shooter.shootPos);

  /**
   * 自機弾の発射処理
   * 発射フラグをオンにして弾のHideを解除、弾の座標をリセットする
   */
  const shootBullet = useCallback(() => {
    const timeout = setTimeout(() => {
      setBulletHidden(false);
      shootFlag.current = true;
      setBulletTop(DEFAULT_SHOOTER_TOP - 60);
    }, 60);
    return () => clearTimeout(timeout);
  }, []);

  /**
   * 発射コマンド検知
   * スペースキーが押下された場合、発射処理を呼び出す
   * @param {KeyboardEvent} 押下したキーボードのイベント
   */
  const moveBullet = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Space' && !shootFlag.current) {
        shootBullet();
      }
    },
    [shootBullet]
  );

  /**
   * 発射横位置の購読
   * 自機が移動、かつ弾発射フラグがオフの時、自機の位置に発射位置を合わせる
   */
  useEffect(() => {
    if (!shootFlag.current) {
      shootPos.current = shooter.shootPos;
    }
  }, [shooter]);

  /**
   * ユーザーが押下するキーの購読
   * 何らかのキーが押された場合、発射コマンド検知を呼び出す
   */
  useEffect(() => {
    document.addEventListener('keydown', moveBullet, false);
  }, [moveBullet]);

  /**
   * 自機弾移動処理
   * 発射フラグがオンの時、自機弾のy座標を加算する
   * y座標が0未満になった時、発射フラグをオフにし自機弾をHide、位置をリセットする
   */
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
