import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {
  const [springs, setSprings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/springs`
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

  return (
    <div>
      {display}
    </div>
  );
}

export default Home;
