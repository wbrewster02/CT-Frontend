import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
