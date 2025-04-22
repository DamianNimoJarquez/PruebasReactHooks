import { useRef } from "react";
import Cabecera from "../../Components/Cabeceras";

const RefsTutorial = () => {
    const inputREf = useRef<HTMLInputElement>(null);
    const hRef = useRef<HTMLHeadingElement>(null)
    
    return ( 
        <>
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
        </>
     );
}
 
export default RefsTutorial;