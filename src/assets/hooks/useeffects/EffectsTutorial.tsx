import axios from "axios";
import { useEffect, useState } from "react";
import { FormatoStringAxios } from "../../types/Tipos";

const EffectsTutorial = () => {
    const [data, setData] = useState<FormatoStringAxios |null>(null);
    const [data2, setData2] = useState<FormatoStringAxios |null>(null);
    const [contador, setContador] = useState<number>(0);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            setData(response.data[0]);
            setData2(response.data[0]);
        })
    },[])

    useEffect(()=>{
        if(contador >= 0){
            axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
                setData2(response.data[contador % response.data.length]);
            })
        }
        else
        setData2({id: 0, name: "Indice incorrecto", body: "Índice Incorrecto", email: "Índice Incorrecto", postId: 0})
    },[contador])


    return ( 
        <>
        <h2 className="cabeceras">UseEffect Tutorial</h2>
        <h3 className="subcabeceras">Get del primer elemento</h3>
            <div className="contenidoUseState flex-col gap-2">
                {data && data.email}
            </div>
                <h3 className="subcabeceras">Get elemento con un contador</h3>
                {data2 && 
                    <div className="contenidoUseState grid grid-cols-[auto_1fr] gap-2 p-4"> 
                        <div className="font-bold text-right">Nombre:</div>
                        <div>{data2.name}</div>
                        <div className="font-bold text-right">Cuerpo:</div>
                        <div>{data2.body}</div>
                        <div className="font-bold text-right">E-mail:</div>
                        <div>{data2.email}</div>
                        <div className="flex flex-row items-center justify-center col-span-2">
                        <button onClick={() => setContador(contador+1)}
                            className="botonesUS">+ 
                        </button>
                        {contador} 
                        <button onClick={() => setContador(contador-1)} 
                            className="botonesUS">- 
                        </button>
                        </div>
                    </div>
                }
        </>
     );
}
 
export default EffectsTutorial;