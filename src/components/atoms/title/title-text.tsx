import React from 'react';

import { styled } from '../../../stithces.config';

const StyledText = styled('span', {
  fontSize: '$titleSize',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  textAlign: 'center',
  fontFamily: '$title, $main',
  transform: 'rotateX(40deg)',
  textShadow:
    '1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000, 1px 0px 0px #000, -1px 0px 0px #000, 0px 1px 0px #000, 0px -1px 0px #000',
});

// タイトルテキストデザインコンポーネントのProps
type TitleTextProps = {
  text: string;
};

/**
 * タイトルテキストコンポーネント
 *  @returns {React.MemoExoticComponent<(props: TitleTextProps) => JSX.Element>} メモ化された描画するコンポーネント
 */
export const TitleText: React.MemoExoticComponent<
  (props: TitleTextProps) => JSX.Element
> = React.memo((props: TitleTextProps) => {
  // propsを分割代入
  const { text } = props;

  return <StyledText className="TitleText">{text}</StyledText>;
});
