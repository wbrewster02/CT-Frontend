import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import companyLogo from './assets/ctlogo2.png';

function NavigationBar() {
    return (
      <>
        <Navbar className="navColor">
          <Container>
            <Navbar.Brand href="/" className="fw-bolder"><img src={companyLogo} alt="company logo"style={{marginTop: -1}} /></Navbar.Brand>
            
            <Nav className="me-auto">
              <Nav.Link href="/new" className="fw-bold">Add New Batch</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
export default NavigationBar;