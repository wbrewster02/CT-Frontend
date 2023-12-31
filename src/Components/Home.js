import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
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

  const display2= (
    <Table striped bordered variant = 'dark'>
        {/* thead will show initial values for the table */}
    <thead>
        <tr>
          <th>Name</th>
          <th>Lot Date</th>
          <th>Type</th>
          <th>Initial Count</th>
        </tr>
    </thead>
        {springs.map((spring) => (
            <tbody>
              <tr key ={spring._id}>
                <th><Link to={`/springs/${spring._id}`}>{spring.name}</Link></th>
                <th>{spring.lotdate}</th>
                <th>{spring.type}</th>
                <th>{spring.initialcount}</th>
              </tr>
            </tbody>
        ))}
    </Table>
)


  return (
    <div>
      <h1 className='homeHeader'>In Production</h1>
      {display2}
    </div>
  );
}

export default Home;

// const display = (
//   <Row xs={1} md={2} lg={3} className="g-4">
//     {springs.map((spring) => (
//       <Col key={spring._id} className="col">
//         <Card>
//           <Card.Body>
//             <Card.Title>{spring.name}</Card.Title>
//             <Button variant="primary" className="btn btn-primary btn-sm">
//               <Link to={`/springs/${spring._id}`} className="btn btn-primary">
//                 View spring
//               </Link>
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
// );

// return (
//   <div className="container">
//     <h1>spring HomePage</h1>
//     <div className="row">
//       {display}
//     </div>
//   </div>
// );
