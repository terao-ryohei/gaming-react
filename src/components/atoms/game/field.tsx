import React from 'react';

import StageBG from '../../../assets/stage.jpg';
import { FIELD_SIZE } from '../../../constants/settings';
import { styled } from '../../../stithces.config';
import { Row } from '../common/row';

const Stage = styled('div', {
  height: '100vh',
  backgroundColor: '$black',
  backgroundImage: `url(${StageBG})`,
  backgroundSize: 'cover',
  position: 'relative',
});

const FieldWrap = styled(Row, {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
});

/**
 * ステージコンポーネント
 *  @returns {React.MemoExoticComponent<() => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Field: React.MemoExoticComponent<() => JSX.Element> = React.memo(
  () => (
    <FieldWrap>
      <Stage style={{ width: `${FIELD_SIZE}px` }} />
    </FieldWrap>
  )
);
