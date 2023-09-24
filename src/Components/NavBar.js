import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
      <>
        <Navbar className="navColor">
          <Container>
            <Navbar.Brand href="/" className="fw-bolder">Logo here</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/new" className="fw-bold">New Batch</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
export default NavigationBar;