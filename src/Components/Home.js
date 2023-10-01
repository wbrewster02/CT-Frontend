import { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

function Home() {
  const [springs, setSprings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/springs`
      console.log(URL)
      const response = await fetch(URL)
      const data = await response.json()
      setSprings(data)
    }

    fetchData()
  }, [])

  const display = springs.map(spring => {
    return (
      <div key={spring._id}>
        <Link to={`/spring/${spring._id}`}>
          <p>{spring.name}</p>
        </Link>
      </div>
    )
  })
  // const display = (
  //   function SmallExample() {
  //     return (
  //       <Table striped bordered hover size="sm">
  //         <thead>
  //           <tr>
  //             <th>#</th>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             <th>Username</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>1</td>
  //             <td>Mark</td>
  //             <td>Otto</td>
  //             <td>@mdo</td>
  //           </tr>
  //           <tr>
  //             <td>2</td>
  //             <td>Jacob</td>
  //             <td>Thornton</td>
  //             <td>@fat</td>
  //           </tr>
  //           <tr>
  //             <td>3</td>
  //             <td colSpan={2}>Larry the Bird</td>
  //             <td>@twitter</td>
  //           </tr>
  //         </tbody>
  //       </Table>
  //     );
  //   }
  // )

  return (
    <div>
      <h1>In production</h1>
      {display}
    </div>
  );
}

export default Home;
