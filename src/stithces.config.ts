import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      blue: '#fae24c',
      purple: '#767cb6',
      yellow: '#34788c',
      white: '#eee',
      gray: '#697b91',
      black: '#222',
      green: '#3ab94e',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      linkSize: '60px',
      titleSize: '160px',
    },
    fonts: {
      main: 'sans-serif',
      title: 'Anton',
      link: 'Libre Bodoni',
    },
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sp: '(max-width: 959px)',
    pc: '(min-width: 960px)',
  },
});
