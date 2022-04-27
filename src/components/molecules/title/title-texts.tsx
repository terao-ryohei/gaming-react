import { keyframes } from '@stitches/react';
import React, { useMemo } from 'react';

import { styled } from '../../../stithces.config';
import { Row } from '../../atoms/common/row';
import { TitleText } from '../../atoms/title/title-text';

const slideIn: { (): string; name: string } = keyframes({
  '0%': { opacity: '0', transform: 'translateY(100px)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
});

const StyledRow = styled(Row, {
  animation: `${slideIn} 1.6s`,
  display: 'flex',
  justifyContent: 'center',
  color: '$yellow',
  zIndex: 0,
  '&.absolute': {
    '&:nth-child(2)': {
      position: 'absolute',
      top: '8px',
      right: '2px',
      color: '$purple',
      zIndex: 1,
    },
    '&:nth-child(3)': {
      position: 'absolute',
      top: '16px',
      right: '4px',
      color: '$blue',
      zIndex: 2,
    },
  },
  '&.relative': {
    position: 'relative',
  },
});

type TitleTextsProps = { text: string };

export const TitleTexts: React.MemoExoticComponent<
  (props: TitleTextsProps) => JSX.Element
> = React.memo((props: TitleTextsProps) => {
  const { text } = props;

  const texts: JSX.Element = useMemo(
    () => (
      <StyledRow className="absolute">
        <TitleText text={text} />
      </StyledRow>
    ),
    []
  );

  return (
    <StyledRow className="TitleTexts relative">
      <>
        {texts}
        {texts}
        {texts}
      </>
    </StyledRow>
  );
});
