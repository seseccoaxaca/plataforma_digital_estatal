import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { useCookies } from 'react-cookie';

import "./modal.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);
  const [cookies, setCookie] = useCookies(["modal"]);


  const handleClose = () => {
    setOpen(false);
  };

  function handleCookie(){
      setCookie("modal", "activo", { path: '/', maxAge: 60 * 60 * 24 });
      handleClose();
  };


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Plataforma Digital estatal"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Esta es la versión <b>1.0</b> de la Plataforma Digital Estatal (PDE), lo cual significa que:
            <br/>
            <ul>
              <li>Contiene datos reales del sistema 2 </li>
              <br/>
              <li>Contiene nuevas secciones y funcionalidades.</li>
              <br/>
              <li>La PDE se construye de manera progresiva, modular y escalable. Como lo establece el acuerdo mediante el cual el Comité Coordinador del Sistema Estatal de combate a la Corrupción emita el análisis para la implementación y Operación de la Plataforma Digital Estatal y las <a rel="noopener" rel="noreferrer" target="_blank" href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf">Bases para el funcionamiento de la Plataforma Digital Estatal</a> de acuerdo al artículo 18 , 22 , 29 , 31 , 32. La Plataforma tendrá constantes actualizaciones y mejoras, por lo que esta versión <b>NO</b> debe ser vista como la última. </li>
            </ul>
            Todos los usuarios de la PDE deberán privilegiar los intereses de las personas titulares de los datos personales contenidos en los sistemas. El tratamiento de los datos consultables en la PDE no debe utilizarse para ningún tipo de discriminación, trato injusto, arbitrario o contrario a lo establecido en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y la local.
            <br/>Te invitamos a revisar los <a rel="noopener" rel="noreferrer"  target="_blank" href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf">"Términos y Condiciones de Uso". </a> 
            <br/>Así como también nuestra <a rel="noopener" rel="noreferrer"  target="_blank" href="https://drive.google.com/file/d/1XnECmFSTvScLkJ_4a5vRcdRxVTK5ansB/view?usp=sharing">"Política de Privacidad".</a>

          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            // onClick={handleTerminos}
            target="_blank"
            rel="noopener"
            rel="noreferrer"
            href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf"
            sx={{

              width: '150px',
              height: '45px',
              margin: '10px',
              border: 'none',
              backgroundColor: '#0B1D1F',
              color: 'white',
              borderRadius: '8px',
              fontSize: '20px',
              cursor: 'pointer',

            }}

          >Terminos</Button>
          <Button
            onClick={handleCookie}
            autoFocus
            sx={{
              width: '150px',
              height: '45px',
              margin: '10px',
              border: 'none',
              backgroundColor: '#27CCAC',
              color: 'white',
              borderRadius: '8px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}