import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BlogPage = () => {
    let [data, setData] = useState(null)
    let location = useLocation()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(setData)


        console.log(location);
    }, [])

    return (
        <div style={ {width: "100%"} }>
            <h1>Blogs</h1>
            <ol style={{margin: '25px auto', width: "max-content"}}>
                {data?.map((user) => {
                    let {id, name} = user
                    return <li key={id}><Link to={`/blog/${id}`}>{name}</Link></li>
                })}
            </ol>
        </div>
    )
}

export {BlogPage}
