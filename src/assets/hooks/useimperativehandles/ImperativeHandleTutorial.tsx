import { useRef } from "react";
import Cabecera from "../../Components/Cabeceras";
import ImperativeHandleTutorialButton, { BotonHandle } from "./ImperativeHandleTutorialButtton";

const ImperativeHandleTutorial = () => {
    const refBoton = useRef<BotonHandle>(null);
    return ( 
        <>
        <Cabecera titulo="useImperativeHandle Tutorial" />
        <div className="contenidoUseState">
            <button onClick={()=>{refBoton.current!.cambiarEstado()}}
            className="botonesUS">Boton Padre</button>
            <ImperativeHandleTutorialButton ref={refBoton}/>
        </div>
        </>
     );
}
 
export default ImperativeHandleTutorial;