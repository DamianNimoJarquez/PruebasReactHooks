import { createContext, useState } from "react";
import Cabecera, { SubCabecera } from "../../Components/Cabeceras";
import UseContextsTutorialLogin from "./UseContextsTutorialLogin";
import UseContextsTutorialUser from "./UseContextsTutorialUser";
import UseContextsTutorialLogin2 from "./UseContextsTutorialLogin2";
import UseContextsTutorialUser2 from "./UseContextsTutorialUser2";

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

interface typo<T>{
    value: T
    setValue: StateSetter<T>
}

export const appContext = createContext<typo<string> | null>(null); //colección de estados

const UseContextsTutorial = () => {
    const [userName, setUsername] = useState<string>("");
    const [userName2, setUsername2] = useState<string>("");

    return ( 
        <>
            <Cabecera titulo="useContext Tutorial"/>
            <SubCabecera titulo="Antes de usar useContext" />
            <div className="contenidoUseState">
                <UseContextsTutorialLogin setUsername={setUsername} />
                <UseContextsTutorialUser username={userName}/>
            </div>
            <SubCabecera titulo="Tras de usar useContext" />
            <appContext.Provider value={{value: userName2, setValue: setUsername2}}>
                <div className="contenidoUseState">
                    <UseContextsTutorialLogin2 />
                    <UseContextsTutorialUser2 />
                </div>
            </appContext.Provider>
        </>
    );
}
 
export default UseContextsTutorial;