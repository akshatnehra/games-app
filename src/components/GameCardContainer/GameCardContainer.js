import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './GameCardContainer.css'

const GameCardContainer = (gameData) => {

  gameData = gameData.gameData;
  gameData = Object.values(gameData);

  const GameCards = gameData.map((data) => {
    console.log(data);
    if(data.title){
      return (
        <div className="game-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ width: '18rem', height: '12rem' }} className="rounded img-fluid" src="https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
                <Card.Title><strong> {data.title} </strong></Card.Title>
                {data.editors_choice == "Y" ? <Card.Text>Editor's Choice</Card.Text> : <></>}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><strong> Platform: </strong> {data.platform}</ListGroup.Item>
                <ListGroup.Item><strong> Genre: </strong>  {data.genre}</ListGroup.Item>
                <ListGroup.Item><strong> Score: </strong> {data.score}</ListGroup.Item>
            </ListGroup>
            </Card>
        </div>
      );
    }
   })


  return (
    <div className="game-card-container">
        {GameCards}
    </div>
  )
}

export default GameCardContainer