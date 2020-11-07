import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { Autorenew } from '@material-ui/icons';

const gender = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
  
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginTop:25,
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  tab_head:{
    float:'right',
    width:300,
    backgroundColor:'#dfdfdf',
  },
  login_form_tab:{
    paddingTop:40,
  },
  login_form_div:{
    padding:20,
    color:'#fff',
  },
  register_form_div:{
    padding:20,
    color:'#fff',
  },
  btn_div:{
    marginTop:50,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
 
}));

export default function SimpleTabs() {
  const [checked, setChecked] = React.useState(true);
 
  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.tabs}>
      <AppBar position="static" className={classes.tab_head}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.login_form_tab}>
        <form>
          <div className={classes.login_form_div}>
            <h4>Login</h4>
            <TextField id="outlined-basic" label="Email or Username" variant="outlined" className={classes.custom_border} />
            <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.custom_border} />
            <div className={classes.btn_div}>
            <Button variant="contained" fullWidth color="primary"> Sign In</Button>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.login_form_tab}>
      <form>
          <div className={classes.register_form_div}>
            <h4>Register for Free</h4>
            <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.custom_border} />
            <TextField id="outlined-basic" label="Username" variant="outlined" className={classes.custom_border} />
            <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.custom_border} />
            <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.custom_border} />
            <TextField
          id="outlined-select-gender"
          select
          label="Gender"
          value={gender}
          // onChange={handleChange}
          variant="outlined"
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        variant="outlined"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
          <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedB}
            onChange={handleChange1}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
            <div className={classes.btn_div}>
            <Button variant="contained" fullWidth color="primary"> Sign In</Button>
            </div>
          </div>
        </form>
      </TabPanel>
    </div>
  );
}