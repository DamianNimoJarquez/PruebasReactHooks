interface paramCabecera{
    titulo: string
}
const Cabecera = ({titulo} :paramCabecera) => {
    return ( 
        <>
        <h2 className="cabeceras">{titulo}</h2>
        </>
     );
}

export function SubCabecera({titulo} :paramCabecera){
    return(
        <>
        <h3 className="subcabeceras">{titulo}</h3>
        </>
    )
}
 
export default Cabecera;