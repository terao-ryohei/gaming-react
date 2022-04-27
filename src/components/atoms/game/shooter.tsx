import React from 'react';

import TileImg from '../../../assets/tile.png';
import { styled } from '../../../stithces.config';

const ImgWrap = styled('div', {
  width: '50px',
  height: '110px',
  overflow: 'hidden',
  position: 'absolute',
});

const Img = styled('img', {
  width: '600px',
  height: '600px',
  objectPosition: '-136px -470px',
});

// 自機コンポーネントのProps
type ShooterProps = { top?: string; left?: string };

/**
 * 自機コンポーネント
 *  @returns {React.MemoExoticComponent<(props: ShooterProps) => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Shooter: React.MemoExoticComponent<
  (props: ShooterProps) => JSX.Element
> = React.memo((props: ShooterProps) => {
  // propsを分割代入
  const { top, left } = props;

  return (
    <ImgWrap style={{ top: `${top}`, left: `${left}` }}>
      <Img className="Shooter" src={TileImg} />
    </ImgWrap>
  );
});
