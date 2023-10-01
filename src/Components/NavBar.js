import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import companyLogo from './assets/ctlogo.PNG';

function NavigationBar() {
    return (
      <>
        <Navbar className="navColor">
          <Container>
            <Navbar.Brand href="/" className="fw-bolder"></Navbar.Brand>
            <img src={companyLogo} alt="company logo"style={{marginTop: -1}} />
            <Nav className="me-auto">
              <Nav.Link href="/new" className="fw-bold">Add New Batch</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
export default NavigationBar;