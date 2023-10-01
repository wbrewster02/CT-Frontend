import { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
    const navigate = useNavigate()

    const [springInput, setspringInput] = useState({
        name: '',
        lotdate: '',
        type: '',
        initialcount: '',
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setspringInput({
        ...springInput,
        [e.target.name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const URL = `${process.env.REACT_APP_BACKEND_URI}/springs`
        console.log(URL)
        console.log('spring input', springInput)
        const response = await fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(springInput)
        })
        const data = await response.json()
        console.log('response', data)
        navigate('/')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={springInput.name} name='name' placeholder='name' />
            <input onChange={handleChange} value={springInput.lotdate} name='lotdate' placeholder='lot date' />
            <input onChange={handleChange} value={springInput.type} name='type' placeholder='type' />
            <input onChange={handleChange} value={springInput.initialcount} name='initialcount' placeholder='initial count' />
            <input type='submit' />
        </form>
    )
}

export default New