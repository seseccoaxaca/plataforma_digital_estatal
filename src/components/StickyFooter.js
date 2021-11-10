import React from 'react'
import { Box, Link, Typography, Container, Grid} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {withStyles} from '@material-ui/core/styles';
import LogoSesna from '../components/assets/iconos_azul/Logo-SESNA.svg';
const styles = theme => ({
  root: {
      flexGrow: 1,
  },
  parteGris: {
      background: '#666666',
      minHeight: 150,

      paddingTop: '94px',
      paddingBottom: '64px',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
  },
  logo: {
      
      height: "35vh"
  },
  libreUso: {
      maxWidth: 140,
      paddingTop: 40,
      paddingBottom: 20
  },
  item: {
      maxWidth: "1100px!important"
  },
  grayText: {
      color: '#4BB5B1',
      textDecoration: 'none',
      fontSize: 14
  },
  blueText: {
      color: '#34b3eb',
      fontSize: 14
  },
  logoSESNA: {
    paddingBottom: 50,
    position: 'absolute',
    maxWidth: 85
  },
  logoPDN: {
      paddingTop: 15,
      maxWidth: 85
  },
  link: {
      textDecoration: "none"
  },
  contentsSN: {
      paddingBottom: 50,
      position: 'absolute',
      textAlign: 'center',
      width: '100%'
  },
  redSocial: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      color: '#0B1D1F'
  }
});


function Copyright() {
    return (
      <Typography variant="body2" color="white">
        {'Copyright © '}
        <Link color="inherit" href="#">
          PDE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}


const Footer = props => {
    const {classes} = props;
    return (
      
        <Box>
          <Grid container spacing={0} justifyContent="center">
                <Grid item xs={12} align="center">
                    <img
                        alt="SESNA"
                        src={LogoSesna}
                        className={classes.logo}
                    />
                </Grid>
        
            </Grid>
            <Grid item xs={12} align={"center"}>
                    <div className={classes.contentsSN}>
                        <a href={"https://www.facebook.com/SESECCOaxaca"} target={"_blank"} rel="noopener noreferrer"
                           className={classes.redSocial}><FontAwesomeIcon
                            icon={faFacebookSquare} size="2x"/></a>
                        <a href={"https://twitter.com/SESECCOaxaca"} target={"_blank" }className={classes.redSocial} rel="noopener noreferrer"><FontAwesomeIcon
                            icon={faTwitter} size="2x"/></a>
                        <a href={"https://www.youtube.com/channel/UCGPW2yCI5ZtIbG08g28785g"} target={"_blank" } rel="noopener noreferrer"
                           className={classes.redSocial}><FontAwesomeIcon
                            icon={faYoutube} size="2x"/></a>

                    </div>
                </Grid>
            

        </Box>
        
    );
}
export default withStyles(styles)(Footer);