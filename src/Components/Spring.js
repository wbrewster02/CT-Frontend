import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Spring() {
    const navigate = useNavigate()

    const [spring, setspring] = useState(null)

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/springs/${id}`
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setspring(data)
            console.log(spring)
        }

        fetchData()
    }, [id, URL])

        const display = spring && (
            <div className='Spring-Page'>
                <h1>{spring.name}</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Process 1</Form.Label>
                                <Form.Control type="process" placeholder="initials" />
                            <Form.Text className="text-muted">
                                Please enter initials for proof of completion
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Process 2</Form.Label>
                                <Form.Control type="process" placeholder="initials" />
                            <Form.Text className="text-muted">
                                Please enter initials for proof of completion
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Process 3</Form.Label>
                                <Form.Control type="process" placeholder="initials" />
                            <Form.Text className="text-muted">
                                Please enter initials for proof of completion
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>All process' completed</Form.Label>
                            <Form.Control type="Completion" placeholder="Manager Initials" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Submit to Database" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                         Submit
                        </Button>
                    </Form>
            </div>
    )

    return (
        <div>
            <h1>{display}</h1>
        </div>
    )
}

export default Spring



// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;