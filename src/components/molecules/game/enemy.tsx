import React from 'react';

import TileImg from '../../../assets/tile.png';
import { styled } from '../../../stithces.config';

const EnemyImgWrap = styled('div', {
  width: '50px',
  height: '36px',
  overflow: 'hidden',
  position: 'absolute',
  transform: 'rotate(180deg)',
});

const EnemyImg = styled('img', {
  width: '1000px',
  height: '1000px',
  objectPosition: '-162px -340px',
});

const DestroyImgWrap = styled('div', {
  width: '50px',
  height: '80px',
  overflow: 'hidden',
  position: 'absolute',
});

const DestroyImg = styled('img', {
  width: '1000px',
  height: '1000px',
  objectPosition: '-463px -332px',
});

type EnemyProps = { alive: boolean; top: number; left: number };

export const Enemy: React.MemoExoticComponent<
  (props: EnemyProps) => JSX.Element
> = React.memo((props: EnemyProps) => {
  const { alive, top, left } = props;

  return (
    <div>
      {alive ? (
        <EnemyImgWrap style={{ top: `${top}px`, left: `${left}px` }}>
          <EnemyImg className="Enemy" src={TileImg} />
        </EnemyImgWrap>
      ) : (
        <DestroyImgWrap style={{ top: `${top - 20}px`, left: `${left}px` }}>
          <DestroyImg className="Enemy" src={TileImg} />
        </DestroyImgWrap>
      )}
    </div>
  );
});
