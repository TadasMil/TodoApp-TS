import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[200],
    },
  },
});

export default theme;
