import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Link } from '@mui/material';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  textAlign: 'center',
  color: "#fff",
  fontWeight: "Bold",
  // backgroundColor: "#FEA142",
  backgroundColor: "#0A1D1F",

  width: "15vw",
  height: "15vw",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",

}));

export default function BasicGrid() {
  return (
    <Box
      sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}
        paddingTop="5vh"
        paddingBottom="5vh"
        // alignItems="center"
        // justifyContent="center"

      >
        <Grid item xs={12}
          alignItems="center"
          justifyContent="center">
          <Item>
            <Link href="#" underline="none" color="#fff" >
            S1 Declaraciones
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff" >
            S2 Publicos & Particulares en contrataciones
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
            S3 Catálogo de empresas
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
            S4 Sancionados
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
            S5 Información & Comunicación
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
            S6 Denuncias públicas
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
            S7 Contrataciones
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              S8 Seguimiento
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              S9 Indicadores
            </Link>
          </Item>
        </Grid>
        {/* <Grid item xs={4}>
          <Item>Contrataciones</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
