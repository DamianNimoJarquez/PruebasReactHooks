interface props{
    username: string
}
const UseContextsTutorialUser = ({username}: props) => {
    return ( 
        <>
        <h3 className=" text-3xl text-white">User: {username}</h3>
        </>
     );
}
 
export default UseContextsTutorialUser;