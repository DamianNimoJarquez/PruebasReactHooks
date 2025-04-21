import { useState } from "react";

const StateTutorial = () => {
    const [value, setValue] = useState<number>(0);
    const [texto, setTexto] = useState<string>("Escribe algo...")

    return (  
        <>
        <h2 className="cabeceras">UseState Tutorial</h2>
        <h3 className="subcabeceras">Sumar y restar</h3>
        <div className="contenidoUseState gap-2">
            <button onClick={() => setValue(value+1)}
                className="botonesUS">+ 
            </button>
            {value} 
            <button onClick={() => setValue(value-1)} 
                className="botonesUS">- 
            </button>
        </div>
        <h3 className="subcabeceras">Input</h3>
        <div className="contenidoUseState mb-2 gap-4">
            <input className="inputs" type="text" onChange={(e) => setTexto(e.currentTarget.value)} placeholder="Escribe algo..." />
            {texto}
        </div>
        </>
    );
}
 
export default StateTutorial;