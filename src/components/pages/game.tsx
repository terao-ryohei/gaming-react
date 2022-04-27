import React from 'react';

import { FIELD_SIZE } from '../../constants/settings';
import { styled } from '../../stithces.config';
import { Game } from '../organisms/game';

const View = styled('div', {});

export const GamePage: () => JSX.Element = () => (
  <View style={{ minWidth: `${FIELD_SIZE}px` }}>
    <Game />
  </View>
);
