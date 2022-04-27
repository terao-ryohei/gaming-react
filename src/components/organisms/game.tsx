import React from 'react';

import { useDestroy } from '../../actions/useDestroy';
import { useMoveShooter } from '../../actions/useMoveShooter';
import { useShotBullet } from '../../actions/useShotBullet';
import {
  DEFAULT_ENEMY_LEFT,
  DEFAULT_ENEMY_TOP,
  DEFAULT_SHOOTER_TOP,
} from '../../constants/game-page';
import { styled } from '../../stithces.config';
import { Row } from '../atoms/common/row';
import { Bullet } from '../atoms/game/bullet';
import { Field } from '../atoms/game/field';
import { Shooter } from '../atoms/game/shooter';
import { Enemy } from '../molecules/game/enemy';

const BackGround = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$black',
});

/**
 * ゲームページのレイアウト
 * @returns {React.MemoExoticComponent<() => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Game: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => {
    // 自機移動処理結果の取得
    const { shooterLeft } = useMoveShooter();
    // 自機弾動作処理結果の取得
    const { shootPos, bulletHidden, bulletTop } = useShotBullet();
    // 敵機撃墜処理結果の取得
    const { aliveEnemy } = useDestroy();

    return (
      <BackGround className="Game">
        <>
          <Field />
          <Row>
            {DEFAULT_ENEMY_TOP().map((top: number, topIndex: number) => (
              <>
                {DEFAULT_ENEMY_LEFT().map((left: number, leftIndex: number) => (
                  <Enemy
                    key={`enemy${topIndex}-${leftIndex}`}
                    alive={aliveEnemy[topIndex][leftIndex]}
                    top={top}
                    left={left}
                  />
                ))}
              </>
            ))}
            <Shooter
              top={`${DEFAULT_SHOOTER_TOP}px`}
              left={`${shooterLeft}px`}
            />
            {!bulletHidden && (
              <Bullet top={`${bulletTop}px`} left={`${shootPos + 12}px`} />
            )}
          </Row>
        </>
      </BackGround>
    );
  }
);
