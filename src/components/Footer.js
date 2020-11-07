import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({

  login:{
       backgroundImage: `url(${"/image/login-background.jpg"})`,
       backgroundSize:"100%",
       height:675,
       position:"relative",
      //  width:700,
      },
  logo_icon_div:{
       marginTop:45,
       color: "#fff",
       textAlign:"center",
      },
      login_logo:{
        width: 250,
        height:125,
        marginTop: 25,
       },
      footer_one:{
       backgroundColor:'#160043',
       padding:'30px 0',
       color:'#fff',
       }
}));

export default function backgroundImageDemo() {
  const classes = useStyles();




  return (
    <div className={classes.footer}>
        <div className={classes.footer_one}>
        <Container >
			<Grid container spacing={1}>
				<Grid container item xs={5} >
                <img src="/image/logo.png" className={classes.login_logo}/>
           </Grid>
				<Grid container item xs={3}  className={classes.text_right}>
            <Button variant="contained" color="primary" className={classes.text_white}>Invest Now</Button>
        </Grid>
        <Grid container item xs={4}  className={classes.text_right}>
            <Button variant="contained" color="primary" className={classes.text_white}>Invest Now</Button>
        </Grid>
			</Grid>
		</Container>
        </div>
        <div className={classes.footer_bottom}>

        </div>
    </div>
  );
}
