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

export const Game: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => {
    const { shooterLeft } = useMoveShooter();
    const { shootPos, bulletHidden, bulletTop } = useShotBullet();
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
