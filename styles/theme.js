
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#C99E77',
      dark: '#ecebed',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
    danger: {
      main: '#eb196e',
    },
    background: {
      default: '#5B3512',
      primary: '#4A2C10',
      secondary: '#3F2207'
    },
    text: {
      primary: '#7E4E22',
      secondary: '#FFFAF2'
    },
  },
  custom: {
    palette: {
      white: '#FFFFFF'
    },
    layout: {
      maxDesktopWidth: 1260,
      topAppBarHeight: 80
    },
  }
}));

export default theme;