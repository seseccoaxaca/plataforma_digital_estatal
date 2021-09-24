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
import MyBooks from './mybooks';
import Favorites from './favorites';
import MesaAyuda from './mesaAyuda';
import CalidadDatos from './calidadDatos';
import Especificaciones from './especificaciones';
const Webpages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mybooks" component={MyBooks} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/mesa-ayuda" component={MesaAyuda} />
                <Route path="/calidad-datos" component={CalidadDatos} />
                <Route path="/especificaciones" component={Especificaciones} />
            </Layout>
        </Router>
    );
};
export default Webpages;