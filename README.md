# Seguimiento del tutorial hooks
El tutorial seguido es: https://www.youtube.com/watch?v=LlvBzyy-558

Seguramente habrá que adaptar cosas a 2025 y crear algunos estilos diferentes.

## useState

Se usa para actualizar el contenido de algo de forma dinámica.

### Contador
En el ejemplo se va a crear un contador simple que se actualizará al pulsar el botón.

Para ello se usará la función *useState* de React que habrá que importarla como se muestra en el código [US-1](./src//assets/documentation/CodesUseState.md#us1) y usarla como se muestra en [US-2](./src//assets/documentation/CodesUseState.md#us2). Le damos el valor 0 porque queremos que el primer valor que se muestre sea un 0, y todos los valores de *value* van a ser de tipo number.

Ponemos unas cabeceras para darle estrucutra con el código [US-3](./src//assets/documentation/CodesUseState.md#us3) y el contenido del código con [US-4](./src//assets/documentation/CodesUseState.md#us4).

* Aquí el primer ***div*** se usa para almacenar tanto los votones como el texto con el valor a incrementar.
* En ***onClick*** de los botones llamamos a la función ***setValue*** que hemos declarado antes como la función para actualizar el estado, y le pasamos el valor actual de la variable ***value*** más o menos 1 según el botón.

### Cambiar el contenido mediante un Input
En el ejemplo se va a tener una variable que va a ir cambiando conforme se vaya escribiendo en un *input* y cambiará por el valor que se ponga en el imput.

En este caso no necesitamos los inputos porque ya los hemos realizado antes así que podemos volver a usar *useState* con otra variable y función para este elemento como se muestra en [US-5](./src//assets/documentation/CodesUseState.md#us5)

* En la función ***onChange*** de input le pasamos el la función para modificar el texto y usamos como parámetro para la modificaicón el valor actual del input mediante la variable ***e*** que es de tipo **React.ChangeEvent\<HTMLInputElement\>**

## UseReduce
Es similar a ***useState*** en cuanto que actualiza el contenido, pero para hacer varias actualizaciones a la  vez en lugar de una en una con varios useState.

Se necesita crear una función para manejarlo. Aunque en realidad parece estar haciendo lo mismo porque llama igualmente a la función dos veces como se muestra en [UR-1](./src//assets/documentation/CodesUseReducer.md#UR1), sólo que no a dos funciones diferentes, por lo que menos memoria consumida.

También se ha cambiado el código para que sólo cambie el visionado del texto si el número nuevo es par.

## UseEffect

Es usada para hacer llamadas a API, coger datos, etc. Se llama cada vez que la página se renderice. [UE-1](./src/assets/documentation/CodesUseEffect.md#ue1)

Para el tutorial vamos a instalar axios con `npm install axios`

En el tutorial se utiliza para cargar el primer elemento del get realizado con axios, código [UE-2](./src/assets/documentation/CodesUseEffect.md#ue2), donde se actualiza data con ese valor y luego se muestra con el código [UE-3](./src/assets/documentation/CodesUseEffect.md#ue3).

Se ha modificado el tutorial para poner un contador y que cuando se incremente o decremente, se muestre el elemento del array del get con ese valor usando también useEffect, código [UE-4](./src/assets/documentation/CodesUseEffect.md#ue4), y reutilizando el código de useState pero dándole formato de grid, código [UE-5](./src/assets/documentation/CodesUseEffect.md#ue5).



## Tailwind CSS
<a id="textcss1"></a>

Lo primero que he hecho es crearme un estilo propio para las cabeceras. El código se puede ver en [CSS-1](./src//assets/documentation/CodesCSS.md#CSS1)
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


