import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Logintab_form from '../components/Logintab_form';
import Footer from '../components/Footer';
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
  mobile_text: {
    color: '#fff',
    '& img': {
      height: 310,
      width:350,
      marginTop:35,
      '& h4': {
        color: ''
      }
    }
  }, 
  font_20:{
    fontSize:20,
  },    
  Grid:{
   padding:"0 12px",
  },
  invest_now_div:{
    borderBottom:'2px solid #9BCC37',
    padding:'35px 0',
'& p':{
  color:'#7B7B7B',
      },
'& h4':{
  width:'100%',
  fontSize:'22px',
  marginBottom:'0px',
  color:'#7b7b7b',
     }
  },
  text_white:{
  color:'#fff',
  },
  text_right:{
    textAlign:'right',
  },
}));

export default function backgroundImageDemo() {
  const classes = useStyles();




  return (
    <div className="main-page">
	<div className={classes.login}>
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={7}>
					<div className={classes.logo_icon_div}>
						<h2>Become a part of</h2>
						<img src="/image/logo.png" className={classes.login_logo}/>
						<div className={classes.mobile_text}>
							<img src="/image/mobile-text.png" />
							<p className={classes.font_20}>think easy, Experience More, truly social</p>
						</div>
					</div>
				</Grid>
				<Grid item md={5}>
					<Logintab_form/>
				</Grid>
			</Grid>
		</Container>
		
	</div>
  <div className={classes.invest_now_div}>
  <Container >
			<Grid container spacing={1}>
				<Grid container item xs={10} >
           <h4>Are you still looking for an investment opportunity?</h4>
           <p>Invest in billion dollar market!</p>
        </Grid>
				<Grid container item xs={2}  className={classes.text_right}>
            <Button variant="contained" color="primary" className={classes.text_white}>Invest Now</Button>
        </Grid>
			</Grid>
		</Container>
  </div>
  <Footer/>
</div>
  );
}
