import { useContext } from "react";
import { appContext } from "./UseContextsTutorial";

const UseContextsTutorialLogin2 = () => {
    const {setValue: setUsername} = useContext(appContext)!;
    return ( 
        <>
        <input className="inputs" onChange={(e) => setUsername(e.currentTarget.value)}/>

        </>
     );
}
 
export default UseContextsTutorialLogin2;