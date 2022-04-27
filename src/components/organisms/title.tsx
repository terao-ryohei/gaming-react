import React from 'react';

import { BUTTON_TEXT } from '../../constants/title-page';
import { styled } from '../../stithces.config';
import { TitleButton } from '../atoms/title/title-button';
import { TitleTexts } from '../molecules/title/title-texts';

const BackGround = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
});

/**
 * タイトルページのレイアウト
 * @returns {React.MemoExoticComponent<() => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Title: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => (
    <BackGround className="Title">
      <TitleTexts text="タイトル" />
      <TitleButton to="" text={BUTTON_TEXT} />
    </BackGround>
  )
);
