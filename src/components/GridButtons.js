import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Link } from '@mui/material';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h5,
    textAlign: 'center',
    color: "#fff",
    fontWeight: "Bold",
    backgroundColor: "#FEA142",

    width: "30vh",
    height: "30vh",
    borderRadius: "50%", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    
}));

export default function BasicGrid() {
  return (
    <Box
    sx={{ flexGrow: 1}}>
      <Grid container spacing={3}
        paddingTop= "5vh"
        paddingBottom= "5vh"
      alignItems="center"
      justifyContent="center"
      
      >
        <Grid item xs={5}
         alignItems="center"
         justifyContent="center">
            <Link href="#" underline="none">
                <Item>1.- Declaraciones</Item>
            </Link>
        </Grid>
        <Grid item xs={5}>
            <Link href="#" underline="none">
                <Item>2.- Servidores públicos en contrataciones</Item>
            </Link>
        </Grid>
        <Grid item xs={4}>
            <Link href="#" underline="none">
                <Item>3.- Sancionados</Item>
            </Link>
        </Grid>
        <Grid item xs={4}>
            <Link href="#" underline="none">
                <Item>4.- Fiscalización</Item>
            </Link>
        </Grid>
        <Grid item xs={4}>
            <Link href="#" underline="none">
                <Item>5.- Denuncias</Item>
            </Link>
        </Grid>
        {/* <Grid item xs={4}>
          <Item>Contrataciones</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
