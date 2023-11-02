import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

function Archive() {
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

  // const display = springs.map((spring) => {
  //   return (
  //     <div key={spring._id}>
  //       <Link to={`/spring/${spring._id}`}>
  //         <p>{spring.name}</p>
  //       </Link>
  //     </div>
  //   )
  // })
  const displayArchive= (
    <Table striped bordered variant = 'dark'>
        {/* thead will show initial values for the table */}
    <thead>
        <tr>
          <th>Name</th>
          <th>Lot Date</th>
          <th>Type</th>
          <th>Initial Count</th>
          <th>Final Count</th>
        </tr>
    </thead>
        {springs.map((spring) => (
            <tbody>
              <tr key ={spring._id}>
                <th><Link to={`/springs/${spring._id}`}>{spring.name}</Link></th>
                <th>{spring.lotdate}</th>
                <th>{spring.type}</th>
                <th>{spring.initialcount}</th>
                <th>{spring.finalcount}</th>
              </tr>
            </tbody>
        ))}
    </Table>
)


  return (
    <div>
      <h1>In production</h1>
      {displayArchive}
    </div>
  );
}

export default Archive;