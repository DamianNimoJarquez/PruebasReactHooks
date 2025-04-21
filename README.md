# Seguimiento del tutorial hooks
El tutorial seguido es: https://www.youtube.com/watch?v=LlvBzyy-558

Seguramente habrá que adaptar cosas a 2025 y crear algunos estilos diferentes.

## useState

Se usa para actualizar el contenido de algo de forma dinámica.

### Contador
En el ejemplo se va a crear un contador simple que se actualizará al pulsar el botón.

Para ello se usará la función *useState* de React que habrá que importarla como se muestra en el código [US-1](#us1) y usarla como se muestra en [US-2](#us2). Le damos el valor 0 porque queremos que el primer valor que se muestre sea un 0, y todos los valores de *value* van a ser de tipo number.

Ponemos unas cabeceras para darle estrucutra con el código [US-3](#us3) y el contenido del código con [US-4](#us4).

* Aquí el primer ***div*** se usa para almacenar tanto los votones como el texto con el valor a incrementar.
* En ***onClick*** de los botones llamamos a la función ***setValue*** que hemos declarado antes como la función para actualizar el estado, y le pasamos el valor actual de la variable ***value*** más o menos 1 según el botón.

### Cambiar el contenido mediante un Input
En el ejemplo se va a tener una variable que va a ir cambiando conforme se vaya escribiendo en un *input* y cambiará por el valor que se ponga en el imput.

En este caso no necesitamos los inputos porque ya los hemos realizado antes así que podemos volver a usar *useState* con otra variable y función para este elemento como se muestra en [US-5](#us5)

* En la función ***onChange*** de input le pasamos el la función para modificar el texto y usamos como parámetro para la modificaicón el valor actual del input mediante la variable ***e*** que es de tipo **React.ChangeEvent\<HTMLInputElement\>**


## Tailwind CSS
<a id="textcss1"></a>

Lo primero que he hecho es crearme un estilo propio para las cabeceras. El código se puede ver en [CSS-1](#CSS1)
* **bg-blue-400** Fondo de la cabecera en azul por defecto.
* **text-3xl** Tamaño de la cabecera.
* **text-center** Para que el texto salga centrado.
* **text-yellow-200** El color del fondo en amarillo suave por defecto.
* **dark:bg-gray-800** En Dark Mode cambiamos el fondo a un gris oscuro.
* **dark:text-white** En Dark Mode cambiamos el color de la fuente a blanco.
* **m-2** Le damos una separación de los demás elementos que lo rodean.
* **p-2** Una separación de los márgenes internos del elemento.
* **margin-left: 20%;** Para que el margen izquirdo empiece a partir del 20% desde la izquierda.
* **margin-right: 20%;** Para que el margen derecho termine antes del 20% por la derecha.
* **rounded-ee-full** Para darle forma al borde derecho.
* **rounded-es-full** Para darle forma al borde izquierdo.

<a id="textcss2"></a>


### Códigos Tailwind CSS
<a id="CSS1"></a>

```css
/* código dentro de main.css tras el @import */
@layer components{
    .cabeceras{
      @apply bg-blue-400 text-3xl text-center text-yellow-200 dark:bg-gray-800 dark:text-white m-2 p-2 rounded-ee-full rounded-es-full;
      margin-left: 20%;
      margin-right: 20%;
    }
  }
```
<a id="CSS2"></a>

```css
.contenidoUseState{
    @apply flex justify-center items-center gap-4 bg-blue-400 text-yellow-300 dark:text-white text-2xl dark:bg-gray-500;
}
```
<a id="CSS3"></a>

```css
.botonesUS{
    @apply cursor-pointer bg-blue-300 dark:bg-gray-400 dark:text-purple-900 rounded-full p-2 m-2 hover:bg-[#8ea6b6] transition duration-300 ease-in-out dark:transition-all;
}
```
<a id="CSS4"></a>

```css
.subcabeceras{
    @apply bg-blue-400 text-3xl text-center text-yellow-200 dark:bg-gray-800 dark:text-white m-2 p-2 rounded-ee-full rounded-es-full;
    margin-left: 30%;
    margin-right: 30%;
}
```
<a id="CSS5"></a>

```css
.inputs{
    @apply pl-1 bg-yellow-300/25 border-blue-400 border-2 focus:border-blue-700;
}
```


### Códigos useState
<a id="us1"></a>
* Código 1 del apartado de ***useState***

```js
import { useState } from "react";
```
<a id="us2"></a>
* Código 52 del apartado de ***useState***

```js
// Declarando las variables donde se guardará el número
// Y la función con la que se cambiará su estado y se mostrará en tiempo real
const [value, setValue] = useState<number>(0);
```
<a id="us3"></a>
* Código 3 del apartado de ***useState***

```js
// Cabeceras
<h2 className="cabeceras">UseState Tutorial</h2>
<h3 className="subcabeceras">Sumar y restar</h3>
<div className="contenidoUseState gap-2">
```
<a id="us4"></a>
* Código 4 del apartado de ***useState***

```js
// Contenedor donde estarán los botones y el valor
<div className="contenidoUseState gap-2">
    <button onClick={() => setValue(value+1)}
        className="botonesUS">+ 
    </button>
    {value} 
    <button onClick={() => setValue(value-1)} 
        className="botonesUS">- 
    </button>
</div>
```
<a id="us5"></a>
* Código 5 del apartado de ***useState***

```js
<h3 className="subcabeceras">Input</h3>
<div className="contenidoUseState mb-2 gap-4">
    <input className="inputs" type="text" onChange={(e) => setTexto(e.currentTarget.value)} placeholder="Escribe algo..." />
    {texto}
</div>
```