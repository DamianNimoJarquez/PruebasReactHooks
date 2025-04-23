import { forwardRef, useImperativeHandle, useState } from "react";
export interface BotonHandle {
    cambiarEstado: () => void;
  }
const ImperativeHandleTutorialButton = forwardRef<BotonHandle>((_, ref) => {
    const [toggle, setToggle] = useState<boolean>(false);
    useImperativeHandle(ref,()=>({
        cambiarEstado(){
            setToggle(!toggle);
        }
    }))
    return ( 
        <>
        <button className="cursor-pointer bg-blue-300 dark:bg-amber-200 dark:text-green-500 rounded-full p-4 m-2 hover:bg-[#8ea6b6] transition duration-300 ease-in-out dark:transition-all"
        onClick={()=>setToggle(!toggle)}>
        Boton Hijo
        </button>
        {toggle && <span className="pb-4">Toggle</span>}
        </>
     );
})
 
export default ImperativeHandleTutorialButton;