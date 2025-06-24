function Navbar(){
    const users = [
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"},
    {name : "Prashant Sarvaiya"}
]

    return(
        <> 
        {users.map((user) => {
            <h1>{users.name}</h1>
        })}
        </>

    )
} 

export default Navbar