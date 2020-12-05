# Evaluación final módulo 3 [Adalab](www.adalab.es)
## Ejercicio de evaluación final del módulo 3 de Adalab: Desarrollo de una aplicación web con React. 

El ejercicio consiste en desarrollar una página web con React, consistente en un listado de personajes de Rick and Morty que podemos filtrar por el nombre del personaje.
Clickando en la tarjeta del personaje deseado podemos acceder a la tarjeta de detalle de éste con información más extendida.

![gif de Rick y Morty](https://media.giphy.com/media/W0ckhyMhIOxZN55FjW/giphy.gif)

## Código

### Estructura

```
src
├── components
│   ├── ApiError.js -> Gestiona el error de la Api en caso de haberlo
│   ├── App.js -> Desarrollado en componentes
│   ├── CharacterCard.js -> Desarrollado en componentes
│   ├── CharacterDetail.js -> Desarrollado en componentes
│   ├── CharacterList.js -> Desarrollado en componentes
│   ├── Filters.js -> Desarrollado en componentes
│   ├── Footer.js -> Contenido del Footer
│   ├── Header.js -> Contenido del Header
│   ├── Loader.js -> Muestra el loader mientras el fetch se carga
│   └── UpButton.js -> Redirige al inicio de la página
│
├── images
├── services
│   └── apiCharacter.js
├── styleSheets
│   ├── ApiError.scss
│   └── CharacterCard.scss
│   └── CharacterDetail.scss
│   └── CharacterList.scss
│   └── Filters.scss
│   └── Footer.scss
│   └── Header.scss
│   └── index.scss
│   └── Loader.scss
│   └── UpButton.scss
└── index.js
```

### Componentes

A continuación se desarrollan los cinco componentes más complejos:

- App.js: Componente raíz, guarda en su estado toda la información de la app web. Asimismo, recibe por lifting información de acciones del usuario en la interfaz y opera con esta información.

- CharacterList.js: Componente secundario, se encarga de filtrar y mapear el array de resultados con la información de los personajes. Para renderizarlo utiliza la estructura del componente CharacterCard.js (BONUS): El listado aparece ordenado alfabéticamente, cuando la búsqueda no encuentra resultados se muestra un mensaje de error al usuario, añadido un preventDefault() para evitar el comportamiento por defecto del enter en el input.

- CharacterCard.js: Contiene la estructura de renderizado y recibe por props de CharacterList.js la información del array de personajes para renderizarse (nombre, dibujo del personaje y especie).

- Filters.js: Contiene un formulario con un input de texto y otro de tipo botón. En el input de texto el usuario escribirá el nombre del personaje que desea consultar y los resultados mostrados se irán filtrando a medida que el usuario escriba. El input de botón cumple la función de limpiar el campo de búsqueda. (BONUS): La búsqueda se realiza sin distinguir entre mayúsculas y minúsculas, el formulario debe estar recubierto por una etiqueta form.

- CharacterDetail.js: Es el componente encargado de renderizar la tarjeta de detalle del personaje seleccionado. Utiliza react-dom-router y recibe por props el array de personajes y el id único diferenciador de cada personaje mediante match. Cuando el usuario hace click en una tarjeta, CharacterDetail.js recibirá el array de personajes y el id diferenciador del que se ha clickado para filtrar y renderizar la información. (BONUS): La URL es compartible y en caso de introducir una inexistente la página muestra un mensaje de error al usuario y un botón con el que se accede de nuevo a la página de resultados.

### Stylesheets

Se han creado diez hojas de estilos utilizando SASS, correspondiendo con los cinco componentes anteriormente listados y conteniendo todos los estilos de éstos (Excepto en el caso de App.js, que no tiene estilos propios). Además, existe una hoja adicional index.scss que contiene los estilos de index.js

La maquetación de este ejercicio es libre y para llevarla a cabo se ha tomado en consideración la paleta de colores y diseños generalmente utilizados en la serie.

(BONUS): En el CharacterDetail.js, se muestra la especie y el estado de un personaje por escrito y con iconos, se ha utilizado un sistema de grid para mostrar la lista de resultados de personajes, ejercicio responsive en mobile first, con breakpoint a tablet (768px) y desktop (1200px).

### Services

La carpeta Services contiene al módulo encargado de realizar la petición a la API. Posteriormente este servicio es importado a App.js, donde se guardan en el estado estos resultados.
Al fetch se le ha añadido un catch para mostrar un mensaje al usuario si ha habido algún problema con la carga de los resultados. Además, se le ha añadido un sistema de loading para los casos de conexión lenta.

## Interfaz

Página principal:

![Página principal](./src/images/readme1.JPG)

Página de detalle de personaje:

![Página de detalle de personaje](./src/images/readme2.JPG)

## Arranque del proyecto:

- npm install: Para instalar las dependencias
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run docs: Para publicar el proyecto a producción
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">

Hecho con :cat2: por @martreyz


# Final evaluation module 3 [Adalab](www.adalab.es)
## Final evaluation exercise of module 3 in Adalab: Development of a web application with React.

The exercise consists in develop a webpage with React, consisting in a list of Rick and Morty characters that user can filter by character name.
Clicking in the character card we can access to the detail card, with extended information.

![gif de Rick y Morty](https://media.giphy.com/media/W0ckhyMhIOxZN55FjW/giphy.gif)

## Code

### Structure

```
src
├── components
│   ├── ApiError.js -> Manage Api.js error in case of existing.
│   ├── App.js -> Developed in section "components"
│   ├── CharacterCard.js -> Developed in section "components"
│   ├── CharacterDetail.js -> Developed in section "components"
│   ├── CharacterList.js -> Developed in section "components"
│   ├── Filters.js -> Developed in section "components"
│   ├── Footer.js -> Footer content
│   ├── Header.js -> Header content
│   ├── Loader.js -> Shows loader while fetch is making the request
│   └── UpButton.js -> Redirects to webpage beginning.
│
├── images
├── services
│   └── apiCharacter.js
├── styleSheets
│   ├── ApiError.scss
│   └── CharacterCard.scss
│   └── CharacterDetail.scss
│   └── CharacterList.scss
│   └── Filters.scss
│   └── Footer.scss
│   └── Header.scss
│   └── index.scss
│   └── Loader.scss
│   └── UpButton.scss
└── index.js
```

### Components

Following are detailed the most complex components:

- App.js: Root component, save in its state all the information of the web app. Also, receives user interactions information by lifting and operates with that information. 

- CharacterList.js: Secondary component, it is in charge of filter and map the results array with the characters information. In order to render uses the structure of CharacterCard.js (BONUS): The list must be shown alphabetically; if the search does not return results an Error Message must be shown to the user; add a preventDefault() to avoid by deffect behaviour of making enter in the text input. 

- CharacterCard.js: Contains the render structure and receives by props from CharacterList.js the characters information in order to render (name, picture and specie).

- Filters.js: Contains a form with a text input and a button input. The user must write in the text input the character name to be searched and the shown results must be filtered as the user is writing in the text input. The button input meets the function of cleaning the search field. (BONUS): Search does not take into account the upper or lower case; form must be contained in HTML in a form tag. 

- CharacterDetail.js: It is the component in charge of rendering the character's detail card. It uses react-dom-router and receives by props the characters array and the unique ID of clicked character through match. When the user clicks in a card, CharacterDetail.js will receive the characters array and this unique ID to filter and render the correct information. (BONUS): URL is sharable and in case of introducing an inexisting webpage, an error message will be shown with a "home" button to improve the user experience. 

### Stylesheets

There are 10 stylesheets using SASS, corresponding to each of the components previously detailed and its styles (Except in App.js, hat does not have its own styles). Also, it exists an additional stylesheet: index.scss that contains index.js styles. 

Mock-up in this exercise is free and to make it the designs and colors normally used in the TV serie have been taking into account.

(BONUS): In CharacterDetaiil.js it is shown the specie and status of the character by written and with icons, grid has been used to show the results list; exercise developed with mobile first, with tablet (768px) and desktop (1200px) breakpoints. 

### Services

Services folder contains the module in charge of making the API request. This service is after exported and imported to App.js, where the results are saved in the component's state. 
A catch has been added to fetch to show the user any error with the results. Also, a loading system has been added for the slow connection occassions. 

## Interfaz

Main:

![Página principal](./src/images/readme1.JPG)

Character detail:

![Página de detalle de personaje](./src/images/readme2.JPG)

## How to start the proyect:

- npm install: To install dependencies
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: To start the project and try it in development server through URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run docs: To publish project to production
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">

Made with :cat2: by @martreyz
