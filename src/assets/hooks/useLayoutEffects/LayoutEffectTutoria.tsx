import { useEffect, useLayoutEffect, useRef } from "react";
import Cabecera from "../../Components/Cabeceras";

const LayoutEffectTutorial = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    useLayoutEffect(()=>{
        console.log(inputRef.current?.value);
    },[]);
    useEffect(()=>{
        inputRef.current!.value = "Nombre cambiado en UseEffect";
    },[])
    return ( 
        <>
        <Cabecera titulo="UseLayoutEffect Tutorial" />
        <div className="contenidoUseState">
            <input className="inputs" onChange={()=>{}} value={"Nombre"} ref={inputRef} />
        </div>
        </>
     );
}
 
export default LayoutEffectTutorial;