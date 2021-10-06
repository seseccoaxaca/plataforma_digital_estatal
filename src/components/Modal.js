import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import "./modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </button> */}
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
            Esta es la versión 1.0 de la Plataforma Digital Estatal (PDE), lo cual significa que:
            <br/>
            <ul>
              <li>• Contiene datos reales de los Sistemas: 1, 2, 4. </li>
              <br/>
              <li>• Contiene nuevas secciones y funcionalidades.</li>
              <br/>
              <li>• La PDE se construye de manera progresiva, modular y escalable. Como lo establece el acuerdo mediante el cual el Comité Coordinador del Sistema Estatal de combate a la Corrupción emita el análisis para la implementación y Operación de la Plataforma Digital Estatal y las <a href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf">Bases para el funcionamiento de la Plataforma Digital Estatal</a> de acuerdo al artículo 18 , 22 , 29 , 31 , 32. La Plataforma tendrá constantes actualizaciones y mejoras, por lo que esta versión NO debe ser vista como la última. </li>
              
            </ul>
            <br/>
            Todos los usuarios de la PDE deberán privilegiar los intereses de las personas titulares de los datos personales contenidos en los sistemas. El tratamiento de los datos consultables en la PDE no debe utilizarse para ningún tipo de discriminación, trato injusto, arbitrario o contrario a lo establecido en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y la local.
            <br/>Te invitamos a revisar los <a href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf">"Términos y Condiciones de Uso".</a>

          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
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

          >Terminos</Button>
          <Button
            onClick={handleClose}
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









// import React from "react";
// import "./modal.css";

// function Modal({ setOpenModal }) {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You Want to Continue?</h1>
//         </div>
//         <div className="body">
//           <p>The next page looks amazing. Hope you want to go there!</p>
//         </div>
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//             id="cancelBtn"
//           >
//             Cancel
//           </button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;