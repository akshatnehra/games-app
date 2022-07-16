import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function Navbarr({gameData}) {

  let setGameData = gameData[1];
  let gameDataOriginal = gameData[2];
  gameData = gameData[0];

  console.log(gameDataOriginal);

  let platforms = [];

  for(let i in gameDataOriginal){
    if(!platforms.includes(gameDataOriginal[i].platform) && gameDataOriginal[i].platform !==undefined){
      platforms.push(gameDataOriginal[i].platform)
    } 
  }

  platforms.sort();

  const filterPlatform = (platform) => {
    const updatedList = gameDataOriginal.filter((currentGame)=>{
      return currentGame.platform === platform;
    });

    setGameData(updatedList);
  }

  const sortAscending = () => {
    var newList = gameData.slice(0);
    newList.sort(function(a,b) {
      return a.score - b.score;
    });
    setGameData(newList)
  }

  const sortDescending = () => {
    var newList = gameData.slice(0);
    newList.sort(function(a,b) {
      return b.score - a.score;
    });
    setGameData(newList)
  }

  const searchGames = (searchedString) => {
    let arr = [];
    for(let game in gameDataOriginal){
      if(gameDataOriginal[game].title != undefined){
        searchedString = searchedString.toUpperCase();
        let gameName = (gameDataOriginal[game].title).toUpperCase();

        if((gameName).indexOf(searchedString) == 0){
          arr.push(gameDataOriginal[game]);
        }
      }
    }
    console.log(arr);
    setGameData(arr)
  }

  const Dropdown = platforms.map((platform, index) => {
    let ref = "#"+platform;
    return (<NavDropdown.Item href={ref} key={index} onClick={()=>filterPlatform(platform)}>{platform}</NavDropdown.Item>)
  })

  const defaultPlatform = () => {
    const updatedList = gameDataOriginal.filter((currentGame)=>{
      return 1;
    });

    setGameData(updatedList);
  }


  return (
    <div className="navbar-container">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" onClick={()=>defaultPlatform()}>Games App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#ascending" onClick={()=>sortAscending()}>Sort Ascending</Nav.Link>
              <Nav.Link href="#descending" onClick={()=>sortDescending()}>Sort Descending</Nav.Link>
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
                onChange={(e)=>searchGames(e.target.value)}
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