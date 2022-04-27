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

// 自機弾コンポーネントのProps
type BulletProps = { top?: string; left?: string };

/**
 * 自機弾コンポーネント
 *  @returns {React.MemoExoticComponent<(props: BulletProps) => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Bullet: React.MemoExoticComponent<
  (props: BulletProps) => JSX.Element
> = React.memo((props: BulletProps) => {
  // propsを分割代入
  const { top, left } = props;

  return (
    <ImgWrap style={{ top: `${top}`, left: `${left}` }}>
      <Img className="Bullet" src={TileImg} />
    </ImgWrap>
  );
});
