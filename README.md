# Tarjeta de vista previa del blog.

Esta es mi solución para el componente [desafío de la tarjeta de vista previa del blog en Frontend Mentor.](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de programación mediante la creación de proyectos realistas.

## Tabla de contenido.

- [Tarjeta de vista previa del blog.](#tarjeta-de-vista-previa-del-blog)
  - [Tabla de contenido.](#tabla-de-contenido)
  - [Descripción general.](#descripción-general)
    - [Capturas de pantalla.](#capturas-de-pantalla)
    - [Enlaces.](#enlaces)
  - [Mi proceso.](#mi-proceso)
    - [Construido con:](#construido-con)
    - [Lo que aprendí:](#lo-que-aprendí)
    - [Desarrollo continuo.](#desarrollo-continuo)
    - [Recursos útiles:](#recursos-útiles)
    - [Colaboración AI.](#colaboración-ai)
  - [Autor:](#autor)
  - [Agradecimiento.](#agradecimiento)

## Descripción general.

### Capturas de pantalla.

![Captura de pantalla Desktop](/assets/images/desktop.webp)

![Captura de pantalla Movil](/assets/images/movil.webp)

### Enlaces.

- URL de solución: [GitHub](https://github.com/lionsyseng/blog-component.git)
- URL del sitio en vivo: [Vercel](https://blog-component-delta.vercel.app/)

## Mi proceso.

### Construido con:

- Marcado HTML5 semántico.
- Propiedades personalizadas de CSS.
- JavaScript

### Lo que aprendí:

Con este problema aprendí a desarrollar una estructura html y a maquetizar con CSS para solucionar mi primer dasfío; además he agregado dos funciones en javaScript para mostrar un mensaje sobre el contenido del blog.

Contenido del index.html:

```html
    <body>
    <!-- Cuerpo de la tarjeta de presentación del blog -->
    <main class="card-blog">

        <!-- Contenedor para la imagen del blog -->
        <div class="container-img">

            <!-- Imágen principal del blog -->
            <img src="./assets/images/illustration-article.svg" alt="Imagen logo" class="logo" />

        </div>

        <!-- Contenedor de información del blog -->
        <div class="container-main">

            <!-- Botón de ingreso al blog -->
            <button class="button" id="button" onclick="button()" title="Ir al curso">Aprendiendo</button>
            
            <!-- Fecha de publicación del blog-->
            <p class="fecha">Publicado: <time datetime="yyyy-mm-dd">20 de Marzo, 2026</time></p>

            <!-- Título de la tarjeta del blog-->
            <h1 onclick="titulo()" class="titulo">HTML & CSS foundations</h1>

            <!-- Párrafo de mensaje del blog -->
            <p class="mensaje">Estos lenguajes son la columna vertebral de cada sitio web, definiendo la estructura y la
                presentación.</p>

        </div>

        <!-- Contenedor de avatar -->
        <div class="container-avatar">

            <!-- Imágen avatar -->
            <img src="./assets/images/avatar.webp" alt="Avatar" class="avatar" />

            <!-- Nombre avatar -->
            <h2 class="autor">Lionsyseng</h2>

        </div>

    </main>

    <!-- Descripción de autor-->
    <footer class="atribution">
        Desafío de <a href="http://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
        Codificado por <a href="http://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Lionsyseng</a>
    </footer>

    <!-- Importación de manejo de control con JavaScript-->
    <script src="js/control.js"></script>

</body>
```

Estilos CSS para la maquetación:

```css
/** Importación de api de Google Fonts **/
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');

/** Declaración de Constantes **/
:root {

    /** Declaración de colores **/
    --yellow: hsl(47, 88%, 63%);
    --yellow2: hsl(17, 88%, 63%);
    --white: hsl(0, 0%, 100%);
    --gray-500: hsl(0, 0%, 42%);
    --gray-950: hsl(0, 0%, 7%);

    /** Declaración de formato de fuente Figtree **/
    --fuente-titulo: 'Figtree', sans-serif;
    --fuente-peso-titulo: 800;

    /** Declaración de formato de fuente Outfit **/
    --fuente-cuerpo: 'Outfit', sans-serif;
    --fuente-peso-cuerpo: 500;

    /** Declaración de tamaños de fuente **/
    --fuente-tamano-btn: 14px;
    --fuente-tamano-title: 20px;
    --fuente-tamano-cuerpo: 16px;
}

/** Estilo del cuerpo de la página **/
body {
    background-color: var(--yellow);
    display: grid;
    justify-content: center;
    margin: 0;
    padding: 0;
}

/** Estilo de la tajerta del blog **/
.card-blog {
    background-color: var(--white);
    border: 1px solid;
    border-radius: 15px;
    box-shadow: 10px 10px 2px var(--gray-950);
    height: auto;
    margin: 80px auto;
    width: 45%;
}

/** Estilo de los contenedores de la imagen y la información del blog **/
.container-img, .container-main {
    margin: 15px auto;
    width: 90%;
}

/** Estilo para la imagen del blog**/
.container-img .logo {
    border-radius: 15px;
    margin: 0px auto;
    width: 100%;   
}

/** Estilo del botón del blog **/
.container-main .button {
    background-color: var(--yellow);
    cursor: pointer;
    font-family: var(--fuente-titulo);
    font-size: var(--fuente-tamano-btn);
    font-weight: var(--fuente-peso-titulo);
    border: none;
    border-radius: 5px;
    height: 30px;
    transition: transform 0.2s ease; /* Suaviza el efecto */
}

.container-main .button a {
    text-decoration: none;
    color: black;
}

/** Efecto del botón del blog **/
.container-main .button:hover {
    background-color: var(--yellow);
    transform: scale(1.1);
}

/** Estilo de la fecha de publicación del blog **/
.container-main .fecha {
    color: var(--gray-950);
    font-family: var(--fuente-cuerpo);
    font-size: var(--fuente-tamano-btn);
    font-weight: var(--fuente-peso-cuerpo);
}

/** Estilo del título del blog **/
.container-main .titulo {
    cursor: pointer;
    font-family: var(--fuente-titulo);
    font-size: var(--fuente-tamano-title);
    font-weight: var(--fuente-peso-titulo);
}

/** Efecto del título del blog **/
.container-main .titulo:hover {
    color: var(--yellow2);
}

/** Estilo del mensaje del blog **/
.container-main .mensaje {
    color: var(--gray-500);
    font-family: var(--fuente-cuerpo);
    font-size: var(--fuente-tamano-cuerpo);
    font-weight: var(--fuente-peso-cuerpo);
}

/** Estilo para el contenedor del avatar del blog **/
.container-avatar{
    align-items: center;
    display: flex;
    height: auto;
    justify-content: left;
    margin: 15px auto;
    width: 90%;
}

/** Estilo del avatar del blog **/
.container-avatar .avatar {
    border-radius: 50%;         /* Hace el avatar circular */
    height: 30px;               /* Ajusta el tamaño vertical */
    object-fit: cover;          /* Ajusta la imagen sin deformar */
    vertical-align: middle;     /* Alinea verticalmente si hay texto */
    width: 30px;                /* Ajusta el tamaño horizontal */
}

/** Estilo del autor del blog **/
.container-avatar .autor{
    font-family: var(--fuente-titulo);
    font-size: var(--fuente-tamano-cuerpo);
    font-weight: var(--fuente-peso-titulo);
    margin: 10px;
}

/* Estilos del footer */
.atribution {
    color: var(--slate-500);
    font-size: 11px; 
    margin: 5px auto;
    text-align: center;
}

.atribution a {
    text-decoration: none;
}
```

### Desarrollo continuo.

En este punto, he aprendido los conceptos básicos de HTML y CSS; ahora debo pronfundizar en mejorar estos temas además de aprender javascript.

### Recursos útiles:

- [Aprende HTML y CSS - Curso Desde Cero](https://sl1nk.com/Curso-HTML-CSS-desde-cero) - Con este recurso obtuve los fundamentos básicos de HTML y CSS.
- [Crea una Página Web Responsive con HTML y CSS](https://sl1nk.com/Web-Responsive-con-HTML-y-CSS) - Con este recurso aprendí los fundamentos de responsividad para crear web adaptables.
- [¿Qué es Javascript?](https://sl1nk.com/qu-es-javascript) - Con este recurso obtuve los fundamentos básicos de JavaScript.

### Colaboración AI.

Al estar iniciando con el aprendizaje de desarrollo web en esta oportunidad, he optado por no hacer uso de ningún recurso de IA para el desarrollo de mi desafío.

## Autor:

- Frontend Mentor - [@lionsyseng](https://www.frontendmentor.io/profile/lionsyseng)

## Agradecimiento.

Agradezco a Frontend Mentor por tener este espacio de aprendizaje, espero seguir aprnediendo más sobre estos temas de desarrollo.