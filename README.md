# Explicación de directorio

## Directorio SRC
Este directorio cuenta con todos los archivos a modificar y se dividen en 3 subdirectorios **¡¡Hasta ahora!!**

### `Components`
Los componentes son pedazos de codigo reutilizables que se ocupan en el sistema, una página puede contar con multiples components, y mediante los "props" se le pueden pasar información a desplegar

### `Webpages`
Aquí es donde se crean todas las páginas que vaya a a tener el sistema (Home, About, Faq, etc.)
Cada página puede estar formada de distintos components, aqui se le mandan los props a desplegar de cada component.

### `Images`
Solo es el directorio de imagenes a usar en el sistema.

## MUI
Mui es una librería de UI para react, tienen components preconstruidos que nosotros utilizamos para facilitar el desarrollo. Funciona muy similar a Boostrap [MUI documentación (Dar click en componentes)](https://mui.com/getting-started/usage/).

# Pasos para agregar páginas nuevas

## Crear Webpages

En la ruta `src/webpages` creamoss un archivo nuevo. Por ejemplo: `About.js`  

En este archivo nuevo importamos la librería de react y los componentes que queramos que tenga nuestra pagina de `about` y debería lucir algo como esto:

```
//file: src/webpages/About.js
import React, { useEffect } from 'react';
import Panel from '../components/Panel';

const About = () => {
    return (
        <div>
            <Panel titulo={"Página About"} />
            <p>Esta es mi página de about</p>
        </div>
    );
};
export default About;

```

En esta webpage nueva, le estamos pasando el valor de: `Página About` a nuestro prop `titulo` del componente Panel.

## Añadir props a un componente

Si revisamos el componente `Panel.js` nos podemos dar cuenta como definimos que props tendrá este componente 

```
//file: src/components/Panel.js

...
export default function Panel(props) {
  const { titulo="Sin título", subtitulo="" } = props;

    return (
...

```

Como podemos ver, el prop de titulo se inicializa como: `titulo="Sin título",` ya que si nosotros en nuestra webpage no le enviamos ningún valor, este desplegará su valor por defecto, el cual es: `"Sin título"`

## Añadir la ruta
Para que nuestra nueva webpage sea visible en nuestro sistema, debemos añadirla a las routes de React, para hacer esto nos dirigimos a `src/webpages/index.js`  

Primero se deberá importar el componente al inicio del archivo:

```
import About from './About';
```

Más adelante agregamos la siguiente línea dentro de la etiqueta `<Layout></Layout>`
```
<Route path="/about" component={About} />
```
Y eso es todo, al correr la aplicación,  nuestra página `About` deberá ser visible desde la ruta: `http://localhost:3000/About`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En el directorio del proyecto, pueden correr los siguientes scripts.

Los dos primeros scripts son necesarios para comenzar con el desarrollo


### **`npm install`**

Despues de clonar el repositorio no se les olvide correr el siguiente comando para instalar todas las dependencias necesarias:


### **`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
