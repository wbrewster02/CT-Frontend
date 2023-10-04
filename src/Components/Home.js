import { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

function Home() {
  const [springs, setSprings] = useState([])
  console.log(springs)

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

  const display = springs.map((spring) => {
    return (
      <div key={spring._id}>
        <Link to={`/spring/${spring._id}`}>
          <p>{spring.name}</p>
        </Link>
      </div>
    )
  })


  return (
    <div>
      <h1>In production</h1>
      {display}
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
