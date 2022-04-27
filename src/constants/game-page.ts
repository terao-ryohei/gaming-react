import { FIELD_SIZE } from './settings';

export const DEFAULT_SHOOTER_TOP: number = window.innerHeight - 150;
export const DEFAULT_SHOOTER_LEFT: number =
  (window.innerWidth - FIELD_SIZE) / 2;

const BASE_ENEMY_TOP = 50;
const BASE_ENEMY_LEFT = (window.innerWidth - FIELD_SIZE + 25) / 2;

export const DEFAULT_ENEMY_TOP = (): number[] => {
  let n = 0;
  const top: number[] = [];

  while (n < 2) {
    n += 1;
    top.push(BASE_ENEMY_TOP * n);
  }

  return top;
};

export const DEFAULT_ENEMY_LEFT = (): number[] => {
  let n = 0;
  const left: number[] = [];

  while (n < 3) {
    n += 1;
    left.push(BASE_ENEMY_LEFT * n);
  }

  return left;
};
