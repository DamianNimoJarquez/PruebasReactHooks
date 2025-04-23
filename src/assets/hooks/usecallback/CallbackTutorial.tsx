import { useCallback, useState } from "react";
import Cabecera, { SubCabecera } from "../../Components/Cabeceras";
import CallbackTutorialChild from "./CallBackTutorialChidl";

const CallbackTutorial = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [data, setData] = useState<string>("Texto para probar el tutorial");

    // const returnComentario = (name:string) =>{
    //     return data + name;
    // }
    const returnComentarioCallback = useCallback((name:string) =>{
        return data + name;
    }, [data])

    return ( 
        <>
        <Cabecera titulo="UseCallback Tutorial" />
        <div className="contenidoUseState">
            <CallbackTutorialChild returnComentario={returnComentarioCallback} />
            <button onClick={()=>setToggle(!toggle)}
            className="botonesUS">
                {" "}
                Toggle
            </button>
            {toggle && <h3 className="text-3xl text-white">Toggle</h3>}
        </div>
        </>
     );
}
 
export default CallbackTutorial;