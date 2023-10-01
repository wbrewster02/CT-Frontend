import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Spring() {
    const [spring, setspring] = useState({})

    const { id } = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            const URL = `${process.env.REACT_APP_BACKEND_URI}/springs/${id}`
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setspring(data)
        }

        fetchData()
    }, [id])

    return (
        <div>
            <h1>{spring.name}</h1>
        </div>
    )
}

export default Spring