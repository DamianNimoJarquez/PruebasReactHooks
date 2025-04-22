### Código useLayoutEffect

<a id="ul1"></a>

```js
const inputRef = useRef<HTMLInputElement>(null);
useLayoutEffect(()=>{
    console.log(inputRef.current?.value);
},[]);
useEffect(()=>{
    inputRef.current!.value = "Nombre cambiado en UseEffect";
},[])
```

<a id="ul2"></a>

```js
<div className="contenidoUseState">
    <input className="inputs" value={"Nombre"} ref={inputRef} />
</div>
```