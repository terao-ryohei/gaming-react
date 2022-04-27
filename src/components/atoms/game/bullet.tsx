import React from 'react';

import TileImg from '../../../assets/tile.png';
import { styled } from '../../../stithces.config';

const ImgWrap = styled('div', {
  width: '26px',
  height: '60px',
  overflow: 'hidden',
  position: 'absolute',
});

const Img = styled('img', {
  width: '600px',
  height: '600px',
  objectPosition: '-118px -268px',
});

type BulletProps = { top?: string; left?: string };

export const Bullet: React.MemoExoticComponent<
  (props: BulletProps) => JSX.Element
> = React.memo((props: BulletProps) => {
  const { top, left } = props;

  return (
    <ImgWrap style={{ top: `${top}`, left: `${left}` }}>
      <Img className="Bullet" src={TileImg} />
    </ImgWrap>
  );
});
