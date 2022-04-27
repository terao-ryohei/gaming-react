import React from 'react';

import BG from '../../assets/bg.jpg';
import { GAME_URL } from '../../constants/page-url';
import { BUTTON_TEXT, TITLE_TEXT } from '../../constants/title-page';
import { styled } from '../../stithces.config';
import { TitleButton } from '../atoms/title/title-button';
import { TitleTexts } from '../molecules/title/title-texts';

const BackGround = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
});

/**
 * タイトルページのレイアウト
 * @returns {React.MemoExoticComponent<() => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Title: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => (
    <BackGround className="Title">
      <TitleTexts text={TITLE_TEXT} />
      <TitleButton to={GAME_URL} text={BUTTON_TEXT} />
    </BackGround>
  )
);
