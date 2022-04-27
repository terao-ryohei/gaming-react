import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../../stithces.config';
import { Row } from '../common/row';

const StyledLink = styled(Link, {
  textDecoration: 'none',
  fontSize: '$linkSize',
  textAlign: 'center',
  fontFamily: '$link, $main',
  color: '$green',
  position: 'relative',
  '&:hover': { textShadow: '0 0 10px #3ab94e,0 0 10px #3ab94e' },
  '&::before': {
    content: `''`,
    color: '$green',
    position: 'absolute',
    top: '20px',
    left: '-30px',
    width: '0',
    height: ' 0',
    borderTop: 'solid 15px transparent',
    borderRight: 'solid 15px transparent',
    borderBottom: 'solid 15px transparent',
    borderLeft: 'solid 15px $green',
  },
  '&::after': {
    content: `''`,
    color: '$green',
    position: 'absolute',
    top: '20px',
    right: '-30px',
    width: '0',
    height: ' 0',
    borderTop: 'solid 15px transparent',
    borderRight: 'solid 15px $green',
    borderBottom: 'solid 15px transparent',
    borderLeft: 'solid 15px transparent',
  },
});

const LinkWrap = styled(Row, {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '60px',
});

type TitleButtonProps = { to: string; text: string };

export const TitleButton: React.MemoExoticComponent<
  (props: TitleButtonProps) => JSX.Element
> = React.memo((props: TitleButtonProps) => {
  const { to, text } = props;

  return (
    <LinkWrap className="TitleButton">
      <StyledLink to={to}>{text}</StyledLink>
    </LinkWrap>
  );
});
