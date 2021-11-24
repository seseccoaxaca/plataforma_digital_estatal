import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import s1 from '../components/assets/iconos_azul/1_icono.svg';
import s2 from '../components/assets/iconos_azul/2_icono.svg';
import s3 from '../components/assets/iconos_azul/3_icono.svg';
import s4 from '../components/assets/iconos_azul/4_icono.svg';
import s5 from '../components/assets/iconos_azul/5_icono.svg';
import s6 from '../components/assets/iconos_azul/6_icono.svg';
import s7 from '../components/assets/iconos_azul/6_icono.svg';
import s8 from '../components/assets/iconos_azul/8_icono.svg';
import s9 from '../components/assets/iconos_azul/9_icono.svg';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const styles = theme => ({
  root: {
      flexGrow: 1
  },
  container: {
      paddingTop: 110,
      paddingBottom: 100
  },
  link: {
      textDecoration: "none"
  },
  text: {
    color: '#0B1D1F',
      paddingBottom: 60,
      [theme.breakpoints.down('sm')]:{
          fontSize: '22px',
      },
  },
  disabled: {
      opacity: 0.3,
      maxWidth: 200,
      [theme.breakpoints.down('sm')]:{
          maxWidth: 150
      },
  },
  iconosSistemas: {
      maxWidth: 200,
      [theme.breakpoints.down('sm')]:{
          maxWidth: 150
      },
      '&:hover':{
          opacity: 0.5,
          cursor: "pointer"
      }
  },
  textExplora: {
    color: '#0B1D1F', 
      fontWeight: 500,
      fontSize: '48px',
      [theme.breakpoints.down('sm')]:{
          fontSize: '40px',
      },
      paddingBottom: theme.spacing(12)
  }

});

const Sistemas = props => {
  const { classes } = props;
  return (
      <div className={classes.root}>
          <Grid
              container
              spacing={0}
              justifyContent="center"
              className={classes.container}
             
          >
              <Grid item xs={12} align="center">
                  <Typography className={classes.textExplora} paragraph>
                      Explora los 9 sistemas
                  </Typography>
              </Grid>

              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal"
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s1}
                              alt="Sistema 1"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                              Declaraciones
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de los Servidores públicos y particulares que intervengan en procedimientos de contrataciones públicas"
                      placement="top"
                  >
                      <Link
                          to="/sistemas/servidores"
                          className={classes.link}
                      >
                          <img
                              src={s2}
                              alt="Sistema 2"
                               className={classes.iconosSistemas}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Servidores en contrataciones
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Catálogo de empresas prestadoras de servicios de los Poderes del Estado y Municipios."
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s3}
                              alt="Sistema 3"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Catálogo de empresas
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema Estatal de Servidores públicos y particulares sancionados."
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s4}
                              alt="Sistema 4"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Sancionados
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de información y comunicación del Sistema Estatal."
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s5}
                              alt="Sistema 5"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Información & Comunicación
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de denuncias públicas, de faltas administrativas y hechos de corrupción."
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s6}
                              alt="Sistema 6"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Denuncias
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de informacion Públicas de Contrataciones."
                      placement="top"
                  >
                      <Link
                          to="/sistemas/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s7}
                              alt="Sistema 7"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                            Contrataciones
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de Seguimientos a las recomendaciones emitidas."
                      placement="top"
                  >
                      <Link
                          to="/sistemas/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s8}
                              alt="Sistema 8"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Recomendaciones
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
              <Grid item xl={2} lg={4} md={6} sm={6} xs={12} align="center">
                  <Tooltip
                      title="Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal"
                      placement="top"
                  >
                      <Link
                          to="/declaraciones"
                          className={classes.link}
                      >
                          <img
                              src={s9}
                              alt="Sistema 9"
                              className={classes.disabled}
                          />
                          <br />
                          <Typography variant="h5" className={classes.text}>
                          Indicadores de evaluación
                          </Typography>
                      </Link>
                  </Tooltip>
              </Grid>
          </Grid>
      </div>
  );
}
export default withStyles(styles)(Sistemas);