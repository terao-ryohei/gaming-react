import React from 'react';

import { styled } from '../../../stithces.config';

const StyledRow = styled('div', {
  width: '100%',
  variants: {
    position: {
      absolute: { position: 'absolute' },
      relative: { position: 'relative' },
    },
  },
});

// デザインブロックコンポーネントのProps
type RowProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'absolute' | 'relative' | undefined;
};

/**
 * デザインブロックコンポーネント
 *  @returns {React.MemoExoticComponent<(props: RowProps) => JSX.Element>} メモ化された描画するコンポーネント
 */
export const Row: React.MemoExoticComponent<(props: RowProps) => JSX.Element> =
  React.memo((props: RowProps) => {
    // propsを分割代入
    const { position, children, className } = props;

    return (
      <StyledRow className={`Row ${className}`} position={position}>
        {children}
      </StyledRow>
    );
  });
