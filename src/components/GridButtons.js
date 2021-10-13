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
              1.- Declaraciones
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff" >
              2.- Servidores públicos en contrataciones
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              3.- Sancionados
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              4.- Fiscalización
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              5.- Denuncias
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              5.- Denuncias
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              5.- Denuncias
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              5.- Denuncias
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link href="#" underline="none" color="#fff">
              5.- Denuncias
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
