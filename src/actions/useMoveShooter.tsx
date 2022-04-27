import { useState, useRef, useCallback, useEffect } from 'react';

import { DEFAULT_SHOOTER_LEFT } from '../constants/game-page';
import { FIELD_SIZE, SHOOTER_MOVE_RANGE } from '../constants/settings';

/**
 * 自機移動処理
 * @returns {{shooterLeft: number; shootPos: number;}} 処理結果
 */
export const useMoveShooter = (): { shooterLeft: number; shootPos: number } => {
  // ローカルstateの宣言
  const [shooterLeft, setShooterLeft] = useState(DEFAULT_SHOOTER_LEFT);

  // refの宣言
  const shootFlag = useRef(true);
  const shootPos = useRef(DEFAULT_SHOOTER_LEFT);

  /**
   * 自機移動処理
   * 押下したキーによって自機を左右に動かす、また、ステージ端に到達した場合動かさないようにする
   * @param {KeyboardEvent} 押下したキーボードのイベント
   */
  const moveShooter = useCallback((event: KeyboardEvent) => {
    // 指定のキー押下かつ、現在位置が画面端でなければ、自機の座標を変更する
    // TODO: 3. 自機を動かす
    // if (event.code === 'ArrowLeft') {
    //   setShooterLeft((current) => {
    //     if (current > (window.innerWidth - FIELD_SIZE) / 2) {
    //       if (shootFlag.current) {
    //         shootPos.current = current - SHOOTER_MOVE_RANGE;
    //       }
    //       return current - SHOOTER_MOVE_RANGE;
    //     }
    //     return (window.innerWidth - FIELD_SIZE) / 2;
    //   });
    // }
    // if (event.code === 'ArrowRight') {
    //   setShooterLeft((current) => {
    //     if (current < (window.innerWidth + FIELD_SIZE) / 2 - 50) {
    //       if (shootFlag.current) {
    //         shootPos.current = current + SHOOTER_MOVE_RANGE;
    //       }
    //       return current + SHOOTER_MOVE_RANGE;
    //     }
    //     return (window.innerWidth + FIELD_SIZE) / 2 - 50;
    //   });
    // }
  }, []);

  /**
   * ユーザーが押下するキーの購読
   * 何らかのキーが押された場合、発射コマンド検知を呼び出す
   */
  useEffect(() => {
    document.addEventListener('keydown', moveShooter, false);
  }, [moveShooter]);

  return { shooterLeft, shootPos: shootPos.current };
};
