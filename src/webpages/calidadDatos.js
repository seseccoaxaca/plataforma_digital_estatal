//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Panel from '../components/Panel';
import Description from '../components/Description';
import Accordion from '../components/Accordion';

const Home = () => {

    const motivacion = (
        <div>
            Uno de los retos más grandes para quienes usan datos del gobierno es la diversidad formatos, tipos y tamaño. Por un lado, la búsqueda de conjuntos de datos resulta compleja. Por otro, los formatos predeterminados dificultan el procesamiento. Asimismo, existe la posibilidad de que los conjuntos de datos no hayan sido actualizados y periodos de información se hayan extraviado.
            <br/><br/>
            En el gobierno se han dado importantes logros en tecnología y datos. Gracias a https://datos.gob.mx/, podemos encontrar una gran cantidad de datos del gobierno en formato procesables. Esto ya es un gran paso. Sin embargo, no todos los conjuntos de datos cuentan con las variables ni el tamaño necesarios para realizar análisis interesantes. Asimismo, a veces la periodicidad de los datos o la actualización no es la más adecuada. Entonces, el panorama actual es que hemos puesto a disposición de la ciudadanía muchos datos; sin embargo, estos son inútiles para los y las analistas y científicas de datos.
            <br/><br/>
            Este escenario se debe en parte a que los datos de https://datos.gob.mx/ son alimentados por diferentes proveedores de datos, tales como la Secretaría de Hacienda y Crédito Público, Secretaría de Economía, Servicio de Administración Tributaria, entre otras. Cada uno tiene sus procesos de recolección, guardado, publicación y actualización. Los datos están moviéndose y cambiando constantemente. Las bases de datos y sistemas de intercambio de información se rediseñan y se actualizan.
            <br/><br/>
            El resultado típico de esta dinámica es que los sistemas de información se vuelven mejores con el tiempo, pero la calidad de los datos se deteriora [1]. Sin embargo, lo que determina el valor intrínseco de los datos es su calidad; la tecnología y los sistemas de información sólo son magnificadores y expositores de este valor [1]. Entonces, una calidad alta de los datos combinada con tecnología eficiente es un gran activo, con un potencial alto de hacer impacto, pero una calidad baja de los datos combinada con tecnología baja, no solo es un activo de poco valor, sino que se convierte en un esfuerzo poco útil. Para lograr una posibilidad alta de impacto con datos es necesario tener tecnología y sistemas de información eficientes y además alta calidad de datos.


        </div>
    );

    const objetivosPDE = (
        <div>
            Usar nuevas tecnologías y metodologías de trabajo como apoyo al trabajo de las autoridades del Sistema Nacional Anticorrupción para:
            <br /><br />
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
            'heading': 'Motivación',
            // 'secondaryHeading': 'Hello world',
            'details': motivacion
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
    ]

    return (
        <div>
            <BreadCrumb />
            <Panel titulo={"Evaluación de la calidad de los datos"} />
            <Description descripcion={"En esta sección encontrarás una metodología que proponemos para evaluar la calidad de Datos Abiertos. Con esta metodología se evaluaron los 44 conjuntos de datos de la Guía de Apertura Anticorrupción."} />
            <Accordion data={data} />
        </div>
    );
};
export default Home;