import { useReducer } from "react";
import { ActionsUseReducerTutorial, StateUseReducerTutorial } from "../../types/Tipos";

const reducer = (state: StateUseReducerTutorial , action: ActionsUseReducerTutorial ) =>{
    switch(action.type){
        case "SUMAR":
            return {contador: state.contador + 1, mostrarTexto: (state.contador +1) %2 === 0};
        case "RESTAR":
            return {contador: state.contador - 1, mostrarTexto: (state.contador -1) %2 === 0};
        case "toggleShowText":
            return {contador: state.contador, mostrarTexto: !state.mostrarTexto};
        default:
            return state;
    }
}

const ReduceTutorial = () => {
    const [state, dispatch] = useReducer(reducer, { contador: 0, mostrarTexto: true});

    return ( 
        <>
        <h2 className="cabeceras">UseReducer Tutorial</h2>
        <div className="contenidoUseState flex-col gap-2">
            <div>
                <button onClick={() => {
                    dispatch({type: "SUMAR"});}}
                    className="botonesUS">+ 
                </button>
                {state.contador} 
                <button onClick={() => dispatch({type: "RESTAR"})} 
                    className="botonesUS">- 
                </button>
            </div>
            <div>{state.mostrarTexto && `se muestra el texto porque es ${state.mostrarTexto}`}</div>
        </div>
        </>
     );
}
 
export default ReduceTutorial;