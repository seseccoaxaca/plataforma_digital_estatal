//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Panel from '../components/Panel';
import Description from '../components/Description';
import Accordion from '../components/Accordion';
import { Button  } from '@mui/material';

const Home = () => {
    const queEsLaPDE = (
        <div>
            <p>
                Una fuente de inteligencia para construir integridad y combatir la corrupción que creará valor para el gobierno y la sociedad a partir de grandes cantidades de datos. 
                <br/><br/> Un medio para el intercambio de datos anticorrupción del gobierno, que busca quitar barreras y romper silos de información para que los datos sean comparables, accesibles y utilizables.
                <br/><br/> El desarrollo de la PDN considera seis sistemas que contienen datos estratégicos para la lucha contra la corrupción, contemplados en la Ley General del Sistema Nacional Anticorrupción (LGSNA):
            </p>
            <br/>
            <ul>
                <li>Sistema 1 | Declaraciones patrimonial, de intereses y constancia de declaración fiscal.</li>
                <li>Sistema 2 | Servidores públicos que intervienen en procedimientos de contratación.</li>
                <li>Sistema 3 | Servidores públicos y particulares sancionados.</li>
                <li>Sistema 4 | Información y comunicación del Sistema Nacional Anticorrupción y el Sistema Nacional de Fiscalización.</li>
                <li>Sistema 5 | Denuncias por faltas administrativas y hechos de corrupción.</li>
                <li>Sistema 6 | Contrataciones Públicas.</li>
            </ul>
            <br/>
            <p>Es importante señalar que la PDN no es un repositorio ni generadora de los datos de cada sistema, sino que es una plataforma de interoperabilidad.</p>
                <Button variant="contained" sx={{ mx:1 }}>¿QUÉ ES LA PDN?</Button>
                <Button variant="contained" sx={{ mx:1 }}>¿CÓMO SE CONTRUYE?</Button>
                <Button variant="contained" sx={{ mx:1 }}>¿GUÍA DESARROLLO PDE?</Button>
        </div>
    );

    const objetivosPDE = (
        <div>
            Usar nuevas tecnologías y metodologías de trabajo como apoyo al trabajo de las autoridades del Sistema Nacional Anticorrupción para:
            <br/><br/>
            <ul>
                <li>Analizar y alertar a las autoridades sobre riesgos de corrupción;</li>
                <li>Automatizar procesos, evitar discrecionalidad y conflicto de interés;</li>
                <li>Promover el uso de los datos para respaldar sanciones;</li>
                <li>Dar seguimiento, en tiempo real, a los procesos y proyectos de contratación pública, y garantizar una mayor eficiencia en las compras públicas;</li>
                <li>Fortalecer la participación ciudadana en el combate a la corrupción;</li>
                <li>Incorporar información sobre indicadores para evaluar la Política Nacional Anticorrupción;</li>
                <li>Dar evidencia para generar recomendaciones de política pública a las autoridades;</li>
            </ul>
        </div>
    );


    const data = [
        {
            'id': 'panel1',
            'heading': '¿Qué es la PDE?',
            // 'secondaryHeading': 'Hello world',
            'details': queEsLaPDE
        },
        {
            'id': 'panel2',
            'heading': 'Objetivos de la PDE',
            'details': objetivosPDE
        },
        {
            'id': 'panel3',
            'heading': 'Marco normativo',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel4',
            'heading': '¿Qué hace la SESNA y la USTPDN?',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel5',
            'heading': 'Sistemas Estatales Anticorrupción',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel6',
            'heading': 'Preguntas técnicas frecuentes',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel7',
            'heading': 'Preguntas frecuentes - datos',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel8',
            'heading': 'Protocolo de conexión',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel9',
            'heading': 'Sistema declaración patrimonial y de intereses',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam'
        },
        {
            'id': 'panel10',
            'heading': 'Contáctanos',
            'details': 'Escribenos si tienes dudas sobre la construcción de la PDN. pdnsesna@gob.mx'
        },
    ]

    return (
        <div>
            <BreadCrumb />
            <Panel titulo={"Mesa de ayuda"} />
            <Description descripcion={"Consulta las dudas más frecuentes sobre el desarrollo y construcción de la PDN, además encontrarás preguntas y respuestas sobre los datos que conforman la PDN así como un correo electrónico de apoyo en caso de no haber solucionado tus dudas."} />
            <Accordion data={data} />
        </div>
    );
};
export default Home;