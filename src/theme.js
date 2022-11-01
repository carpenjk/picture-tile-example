import { withThemeweaver, variant, value } from '@carpenjk/themeweaver';

const theme = withThemeweaver(
  {
    colors: {
      primary: ['#696f92', '#C6D8FF'], // create a scale with an array
      secondary: '#047F5E',
      tertiary: '#FEFDEC',
      action: '#B64D57',
      actionText: '#F6FEFF',
      lightText: '#6d6d6d',
      mainText: '#444649',
      secondaryText: '#D53D5A',
      formBackground: '#F6FEFF',
      disabledBackground: '#909090',
      white: '#ffffff',
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
    },
    fontSizes: [10, 12, 14, 18, 24, 32],
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    sizes: [0, '100%', 80],
    space: [0, 4, 8, 16, 20, 32, 64],
    breakpoints: {
      0: 0,
      1: 880,
      2: 1050,
      3: 1200,
      4: 1400,
    },
  },
  {
    // beginning of themeweaver asignments *****************
    button: {
      ...variant('expander', {
        color: 'lightText', // refers to lightText color #F6FEFF
        fontFamily: 'poppins',
        fontSize: 2, // refers to 14px font size
        paddingTop: 2, // refers to 8px space
        paddingRight: 2,
        paddingBottom: 2,
        paddingLeft: 2,
      }),
      ...variant('expander-expanded', {
        color: 'lightText',
        fontFamily: 'poppins',
        fontSize: 2,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingLeft: 2,
      }),
      ...variant('search', {
        backgroundColor: 'action',
        color: 'actionText',
        fontFamily: 'roboto',
        fontSize: 2,
      }),
      ...variant('search-hover', {
        backgroundColor: 'action',
        color: 'actionText',
        transform: value('scale(1.04)'),
      }),
    },
    searchBar: {
      backgroundColor: 'formBackground',
      width: value('auto'),
      maxWidth: [value('500px'), value('none')],
      borderRadius: 2,
      paddingTop: [2, 2], // assign different values by breakpoint with an arroy
      paddingRight: [2, 2],
      paddingBottom: [2, 2],
      paddingLeft: [2, 2],
    },
    searchBar__buttonContainer: {
      paddingTop: 4,
      paddingRight: 2,
      paddingBottom: 4,
      paddingLeft: 2,
    },
  },
);

export default theme;
