import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Spring from './Components/Spring';
import Navbar from './Components/NavBar';
import New from './Components/New';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/spring/:id' element = {<Spring />} />
          <Route path = '/new' element = {<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
