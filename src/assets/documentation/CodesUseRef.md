### Códigos useRef

<a id="ur1"></a>

```js
const inputREf = useRef<HTMLInputElement>(null);
const hRef = useRef<HTMLHeadingElement>(null)
```

<a id="ur2"></a>

```js
<Cabecera titulo="UseRef Tutorial"/>
<div className="contenidoUseState">
    <h4 className="text-3xl" ref={hRef}>Nombre</h4>
    <div>
        <input className="inputs" type="text" placeholder="Ejemplo..." ref={inputREf} />
        <button onClick={()=>{
            {
                hRef.current ? (hRef.current.textContent = inputREf.current ? inputREf.current.value.toString() : hRef.current.textContent): null;
                inputREf.current && inputREf.current.focus();
            }
        }} className="botonesUS">Cambiar nombre</button>
    </div>
</div>
```
