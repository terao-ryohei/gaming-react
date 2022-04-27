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

type RowProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'absolute' | 'relative' | undefined;
};

export const Row = React.memo((props: RowProps) => {
  const { position, children, className } = props;

  return (
    <StyledRow className={`Row ${className}`} position={position}>
      {children}
    </StyledRow>
  );
});
