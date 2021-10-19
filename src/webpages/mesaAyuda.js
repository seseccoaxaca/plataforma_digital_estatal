//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Hero from '../components/HeroPages';
import Description from '../components/Description';
import Accordion from '../components/Accordion';

const Home = () => {
    const linkPDN = (
        <div>
            <a href="https://www.plataformadigitalnacional.org/" rel="noreferrer" target="_blank">https://www.plataformadigitalnacional.org/</a>
        </div>
    );

    const elementosPDE = (
        <div>
            De acuerdo con la Ley del Sistema Estatal de Combate a la Corrupción en su artículo 43 “La Plataforma Digital del Sistema Estatal estará conformada por la información que a ella incorporen las autoridades integrantes del Sistema Estatal y contará, al menos, con los siguientes sistemas electrónicos: 
            <br/><br/>
            <ul>
                <li>I.	Sistema de evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal;</li>
                <li>II.	Sistema de los Servidores públicos y particulares que intervengan en procedimientos de contrataciones públicas; </li>
                <li>III. Catálogo de empresas prestadoras de servicios de los Poderes del Estado y Municipios; </li>
                <li>IV.	Sistema Estatal de Servidores públicos y particulares sancionados; </li>
                <li>V. Sistema de información y comunicación del Sistema Estatal;</li>
                <li>VI. Sistema de denuncias públicas, de faltas administrativas y hechos de corrupción;</li>
                <li>VII. Sistema de Información Pública de Contrataciones; </li>
                <li>VIII.Sistema de seguimiento a las recomendaciones emitidas; </li>
                <lI>IX.	Indicadores de evaluación.</lI>
            </ul>
        </div>
    );


    const data = [
        {
            'id': 'panel1',
            'heading': '1.	¿Qué es la Plataforma Digital Estatal (PDE)?',
            // 'secondaryHeading': 'Hello world',
            'details': "La Plataforma Digital Estatal es una herramienta de inteligencia Institucional del Sistema Estatal de Combate a la Corrupción, para el cumplimiento de sus funciones, obligaciones y facultades, en donde a través de la interconexión de los nueve sistemas, se podrá detectar, prevenir, generar políticas que desalienten y combatan actos de corrupción. "
        },
        {
            'id': 'panel2',
            'heading': '2.	¿Que hace la Secretaría Ejecutiva del Sistema Estatal de Combate a la Corrupción (SESECC) con relación a la Plataforma Digital Estatal?',
            'details': "Es la encargada de administrar la Plataforma Digital Estatal en términos de la Ley del Sistema Estatal de Combate a la Corrupción."
        },
        {
            'id': 'panel3',
            'heading': '3.	¿Cuántos sistemas integran la Plataforma Digital Estatal?',
            'details': elementosPDE
        },
        {
            'id': 'panel4',
            'heading': '4.	Objetivo General de la PDE',
            'details': 'La Plataforma Digital Estatal (PDE) deberá ser el principal instrumento de inteligencia institucional con el que cuente el Sistema Estatal de Combate a la Corrupción (SECC), para coadyuvar y facilitar el cumplimiento de las obligaciones y facultades que se le atribuyen en materia de combate a la corrupción.'
        },
        {
            'id': 'panel5',
            'heading': '5.	¿Qué papel juega la PDE dentro del Sistema Estatal de Combate a la Corrupción?',
            'details': 'La plataforma será la fuente de información fiderigna, herramienta indispensable para el seguimiento de procedimientos contemplados en la normatividad aplicable y mecanismo de rendición de cuentas en el combate a la corrupción. Por su relevancia en la prevención, investigación y sanción de los actos de corrupción, la Plataforma permitirá que las acciones de los órganos ejecutores del Sistema Estatal de Combate a la Corrupción, y por tanto destinarios de sus decisiones, así como de los entes públicos con obligaciones en materia de combate a la corrupción, se lleven a cabo en función de las finalidades y objetivos para los que fueron instituidos en la Constitución Política del Estado Libre y Soberano de Oaxaca, en las leyes secundarias que de ella emanen, de conformidad con los estándares nacionales de combate a la corrupción y promoción de la integridad del servicio público.'
        },
        {
            'id': 'panel6',
            'heading': '6.	¿Se van  compartir los datos reservados o personales?',
            'details': 'No, los integrantes del Sistema Estatal de Combate a la Corrupción promoverán la publicación de la información contenida en la plataforma en formato de datos abiertos, conforme a la Ley de Transparencia, Acceso a la Información Pública y Buen Gobierno del Estado de Oaxaca'
        },
        {
            'id': 'panel7',
            'heading': '7.	¿Quiénes podrán accesar a la Plataforma Digital Estatal?',
            'details': 'Existen dos tipos de accesos, el primer acceso es para la ciudadanía donde visualizará los datos que tienen carácter público, de acuerdo a la Ley de Transparencia, Acceso a la Información Pública y Buen Gobierno del Estado de Oaxaca.'
        },
        {
            'id': 'panel8',
            'heading': '8. Marco Normativo',
            'details': "El Marco Normativo de la Plataforma Digital Estatal está compuesto por la Ley del Sistema Estatal de Combate a la Corrupción (LSECC), la Ley de Responsabilidades Administrativas del Estado y Municipios de Oaxaca y el Acuerdo Mediante el cual el Comité Coordinador del Sistema Estatal de Combate a la Corrupción emite el análisis para la implementación y operación de la Plataforma Digital Estatal y las Bases para el Funcionamiento de la Plataforma Digital Estatal."
        },
        {
            'id': 'panel9',
            'heading': '9.	¿Como accedo a consultar la información Pública de la PDN?',
            'details': linkPDN
        },
    ]

    return (
        <div>
            <BreadCrumb />
            <Hero titulo="Mesa de ayuda" link="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            {/* <Panel titulo={"Mesa de ayuda"} /> */}
            <Description descripcion={"Consulta las dudas más frecuentes sobre el desarrollo y construcción de la PDN, además encontrarás preguntas y respuestas sobre los datos que conforman la PDN así como un correo electrónico de apoyo en caso de no haber solucionado tus dudas."} />
            <Accordion data={data} />
        </div>
    );
};
export default Home;