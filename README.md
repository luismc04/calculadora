# Calculadora de Luis Mascías Cañada

## Ejecutar aplicación
1. Clonar proyecto
2. Abrir el HTML con algún navegador

## Arquitectura
 Mi estructura se basa en un archivo [```.html```](./index.html) y dos carpetas, una que contiene los estilos [```.css```](./css/style.css)
 y otra carpeta que contiene los [```scripts```](./js/script.js)

 ## Estructura

 ### HTML
En mi [```.html```](./index.html) he creado un div que contiene a la calculadora, la he dividido en dos partes, la cabecera y el cuerpo de la calculadora, 
 
#####   Cabecera
- En la cabecera, nos mostrará las operaciones y sus resultados, ademas de que no mostrará nada 
          si la calculadora está apagada
#####   Cuerpo
- En el cuerpo, nos mostrará los números, operadores y las opciones de la calculadora
    - __Numeros__:
        -   Numeros del 0 al 9
        -   Punto para números decimales
    - __Operadores__:
        -   Sumar
        -   Restar
        -   Multiplicar
        -   Dividir
        -   Mod
    - __Opciones de la calculadora__:
        -   Encender
        -   Apagar 
        -   Guardar en memoria
        -   Eliminar memoria
        -   Recuperar datos de la memoria
        -   Borrar numeros
 ### CSS
 La estructura de mi [```style.css```](./css/style.css)  se divide en cuatro partes:
 -  La primera es un estilo al fondo de la pantalla y al títlo de la página
 -  La segunda es un estilo para la calculadora y su forma
 -  La tercera para estilar los botones
 -  La cuarta para controlar el css en tamaño de pantallas inferiores a 425px

### JavaScripts
 La estructura de mi [```script.js```](./js/script.js)  se divide en dos partes principales:
 - Delaraciones de variables
 - Los metodos y funciones que voy autilizar