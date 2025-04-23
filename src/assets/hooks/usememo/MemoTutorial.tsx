import { useEffect, useMemo, useState } from "react";
import { FormatoStringAxios } from "../../types/Tipos";
import axios from "axios";
import Cabecera from "../../Components/Cabeceras";

const MemoTutorial = () => {
    const [data, setData] = useState<FormatoStringAxios[] |null>(null);
    const [toggle, setToggle] = useState<boolean>(false);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response => {
            setData(response.data);
        }));
    }, [])

    const findeLongestName = (comment: FormatoStringAxios[]) =>{
        if(!comment) return null;
        let longestName = "";
        for(let i = 0; i< comment.length; ++i){
            let currentName = comment[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("Se procesa");
        return longestName
    }

    const getLongestName = useMemo(()=> findeLongestName(data!), [data]);

    return (  
        <>
        <Cabecera titulo="useMemo Tutorial" />
        <div className="contenidoUseState">
            {/* <p>{findeLongestName(data!)}</p> */}
            <p>{getLongestName}</p>
            <button onClick={() => setToggle(!toggle)} className="botonesUS">
            Alternar Texto
            </button>
            {toggle && <h3 className="text-3xl text-white">Texto Alterando</h3>}
        </div>
        </>
    );
}
 
export default MemoTutorial;