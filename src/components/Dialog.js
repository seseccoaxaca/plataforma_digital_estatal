import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Abrir modal
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Plataforma Digital Estatal"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
            Esta es la versión 1.0 de la Plataforma Digital Estatal (PDE), lo cual significa que:
            <br/><br/>
            Contiene datos reales de los Sistemas: 1, 2, 3, y 6.
            Contiene nuevas secciones y funcionalidades.
            <br/><br/>
            La Plataforma se construye de manera modular y escalable. Como lo establecen las Bases para el Funcionamiento de la Plataforma Digital Estatal en el Capítulo IX, la Plataforma tendrá constantes actualizaciones y mejoras, por lo que esta versión NO debe ser vista como la última.
            Todos los usuarios de la PDE deberán privilegiar los intereses de las personas titulares de los datos personales contenidos en los sistemas. El tratamiento de los datos consultables en la PDE no debe utilizarse para ningún tipo de discriminación, trato injusto, arbitrario o contrario a lo establecido en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
            <br/><br/>
            Te invitamos a revisar los "Términos y Condiciones de Uso", así como a dejar tus comentarios sobre las funcionalidades y experiencia de usuario en la sección de "Comenta".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          <Button onClick={handleClose} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
