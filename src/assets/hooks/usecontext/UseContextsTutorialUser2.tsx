import { useContext } from "react";
import { appContext } from "./UseContextsTutorial";

const UseContextsTutorialUser2 = () => {
    const {value: userName} = useContext(appContext)!;
    return ( 
        <>
        <h3 className=" text-3xl text-white">User: {userName}</h3>
        </>
     );
}
 
export default UseContextsTutorialUser2;