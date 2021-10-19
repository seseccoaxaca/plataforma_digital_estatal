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
import Especificaciones from './especificaciones';
import Login from './login';

const Webpages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mesa-ayuda" component={MesaAyuda} />
                <Route path="/calidad-datos" component={CalidadDatos} />
            </Layout>
        </Router>
    );
};
export default Webpages;