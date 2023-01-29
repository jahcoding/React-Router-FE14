import {useState, useEffect} from 'react'

import { useParams, useNavigate, useLocation } from "react-router-dom"

const SinglePage = () => {
    let [data, setData] = useState(null)
    let { userId } = useParams()
    let { pathname } = useLocation()

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(setData)
    }, [userId])

    return (
        <div style={{width: "max-content", margin: "0 auto"}}>
            <h1>User info</h1>
            { data && (
                <>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Username:</strong> {data.username}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Website:</strong> {data.website}</p>
                    <button onClick={() => navigate( "contact" , { state: pathname, replace: false })}>Go back</button>
                </>
            )}
            
        </div>
    )
}

export {SinglePage}
