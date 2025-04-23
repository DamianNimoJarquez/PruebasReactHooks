import { useEffect } from "react";
interface promps{
    returnComentario: (value: string) => string
}

const CallbackTutorialChild = ({returnComentario}: promps) => {
    useEffect(()=>{
        console.log("Función Llamada");
    },[returnComentario])
    return ( 
        <>
        <p>{returnComentario("Texto nuevo")}</p>
        </>
     );
}
 
export default CallbackTutorialChild;