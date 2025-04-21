
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