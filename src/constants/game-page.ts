import { FIELD_SIZE } from './settings';

// 自機初期高さ
export const DEFAULT_SHOOTER_TOP: number = window.innerHeight - 150;
// 自機初期横
export const DEFAULT_SHOOTER_LEFT: number =
  (window.innerWidth - FIELD_SIZE) / 2;

// 敵機縦間隔
const BASE_ENEMY_TOP = 50;
// 敵機横間隔
const BASE_ENEMY_LEFT = (window.innerWidth - FIELD_SIZE + 25) / 2;

/**
 * 敵機の縦配置
 * @returns {number[]} 敵機のy座標配列
 */
export const DEFAULT_ENEMY_TOP = (): number[] => {
  let n = 0;
  const top: number[] = [];

  // 縦に二段敵機を配置
  while (n < 2) {
    n += 1;
    top.push(BASE_ENEMY_TOP * n);
  }

  return top;
};

/**
 * 敵機の横配置
 * @returns {number[]} 敵機のx座標配列
 */
export const DEFAULT_ENEMY_LEFT = (): number[] => {
  let n = 0;
  const left: number[] = [];

  // 横に二段敵機を配置
  while (n < 3) {
    n += 1;
    left.push(BASE_ENEMY_LEFT * n);
  }

  return left;
};
