import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9BCC37",
      default:"#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      'proxima-regular',
    ].join(',')
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#fff',
        width:'100%',
        borderColor:'#fff',
      },
    },
    MuiTextField:{
      root:{
      color:'#fff',
      borderColor:'1px solid #fff',
      width:'100%',
      marginTop:10,
      marginBottom:15,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding:14,
        color: '#fff',
        borderColor:'#fff',
      },
      notchedOutline: {
        borderColor: '#fff',
        color:'#fff',
      },
      root: {
        borderColor:'#fff',
        color:'#fff',
        fontSize:13,
      },
    },
  },
  shape:{
    borderRadius:30
  },
});

export default theme;
