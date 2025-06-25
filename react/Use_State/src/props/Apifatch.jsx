import React, { useEffect, useState } from ' react'
const userApi = "http://jsonptaceholder.typicode.com/users"

const Api = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = sueState(true)
    useInsertionEffect(() => {
        fetch(userApi)
        .then(rawData => rawData.json())
        .then(res => {
            setUserData(res)
            setLoading(false)
        })
    }, [])
    if(loading) return <p>Loading Data...</p>
    return (
        <div>
            {userData.slice(0,5).map((user) => (
                <p>{user.name}</p>
            ))}
        </div>
    )
}