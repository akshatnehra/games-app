import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function Navbarr(gameData) {

  gameData = gameData.gameData;

  let platforms = [];

  for(let i in gameData){
    if(!platforms.includes(gameData[i].platform) && gameData[i].platform !==undefined){
      platforms.push(gameData[i].platform)
    } 
  }

  platforms.sort();

  const Dropdown = platforms.map((platform, index) => {
    let ref = "#"+platform;
    return (<NavDropdown.Item href={ref} key={index}>{platform}</NavDropdown.Item>)
  })

  return (
    <div className="navbar-container">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Games App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#ascending">Sort Ascending</Nav.Link>
              <Nav.Link href="#descending">Sort Descending</Nav.Link>
              <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                {Dropdown}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;