interface props{
    setUsername: (e: string)=> void
}
const UseContextsTutorialLogin = ({setUsername}: props) => {
    return ( 
        <>
        <input className="inputs" onChange={(e) => setUsername(e.currentTarget.value)}/>

        </>
     );
}
 
export default UseContextsTutorialLogin;