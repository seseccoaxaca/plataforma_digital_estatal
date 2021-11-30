//file: src/webpages/index.js
import React from 'react';
import Layout from '../components/Layout';



import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link
} from "react-router-dom";
import Home from './home';
import MesaAyuda from './mesaAyuda';
import CalidadDatos from './calidadDatos';
import s1 from './sistemas/s1Declaraciones';
import s2 from './sistemas/s2ServidoresContrataciones';
import s3 from './sistemas/s3CatalogoDeEmpresas';
import s4 from './sistemas/s4Sancionados';
import s5 from './sistemas/s5InformacionComunicacion';
import s6 from './sistemas/s6DenunciasPublicas';
import s7 from './sistemas/s7Contrataciones';
import s8 from './sistemas/s8Seguimiento';
import s9 from './sistemas/s9Indicadores';
import table from './sistemas/table_prueba';

const Webpages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mesa-ayuda" component={MesaAyuda} />
                <Route path="/calidad-datos" component={CalidadDatos} />
                <Route path="/sistemas/declaraciones" component={s1} />
                <Route path="/sistemas/servidores" component={s2} />
                <Route path="/sistemas/catalogo" component={s3} />
                <Route path="/sistemas/sancionados" component={s4} />
                <Route path="/sistemas/info-comunicacion" component={s5} />
                <Route path="/sistemas/denuncias" component={s6} />
                <Route path="/sistemas/contrataciones" component={s7} />
                <Route path="/sistemas/seguimiento" component={s8} />
                <Route path="/sistemas/indicadores" component={s9} />
                <Route path="/sistemas/table_prueba" component={table} />
                <Route path="/loaderio-7abcfac4bac461f6787a3bde94ff104e/" render={() => <p>loaderio-7abcfac4bac461f6787a3bde94ff104e</p>} />
            </Layout>
        </Router>
    );
};
export default Webpages;