import React from 'react';

import { BUTTON_TEXT, TITLE_TEXT } from '../../constants/clear-page';
import { TITLE_URL } from '../../constants/page-url';
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
 * クリアページのレイアウト
 * @returns {React.MemoExoticComponent<() => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Clear: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => (
    <BackGround className="Title">
      <TitleTexts text={TITLE_TEXT} />
      <TitleButton to={TITLE_URL} text={BUTTON_TEXT} />
    </BackGround>
  )
);
