import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pages/Games.css'; // Файл со стилями

// Пример данных об играх (добавлены новые игры)
const gamesData = [
  { id: 1, title: 'Game 1', description: 'Description of Game 1', type: 'Free to Play', link: '/game1', price: 999 },
  { id: 2, title: 'Game 2', description: 'Description of Game 2', type: 'Pay to Play', link: '/game2', price: 1499, discount: 0.51 },
  { id: 3, title: 'Game 3', description: 'Description of Game 3', type: 'Free to Play', link: '/game3', price: 799 },
  { id: 4, title: 'Game 4', description: 'Description of Game 4', type: 'Pay to Play', link: '/game4', price: 1999, discount: 0.15 },
  { id: 5, title: 'Game 5', description: 'Description of Game 5', type: 'Free to Play', link: '/game5', price: 1299 },
  { id: 6, title: 'Game 6', description: 'Description of Game 6', type: 'Pay to Play', link: '/game6', price: 999, discount: 0.12 },
  // Добавьте другие игры...
  { id: 7, title: 'Game 7', description: 'Description of Game 7', type: 'Free to Play', link: '/game7', price: 1499 },
  { id: 8, title: 'Game 8', description: 'Description of Game 8', type: 'Free to Play', link: '/game8', price: 1999 },
  { id: 9, title: 'Game 9', description: 'Description of Game 9', type: 'Free to Play', link: '/game9', price: 899 },
];

class GameCard extends Component {
  render() {
    const { title, description, link, price, discount, type } = this.props.game;
    const originalPrice = price;
    const currency = '₽'; // Символ валюты

    return (
      <Col xs={12} sm={6} md={4} lg={30} className="mb-4">
        <a href={link} className="game-link">
          <Card className={`game-card ${type === 'Free to Play' ? 'free-to-play' : ''}`}>
            <Card.Img variant="top" src={require(`../pages/images/fall.jpg`)} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <div className="price">
                {type === 'Free to Play' ? (
                  <>
                    <span className="original-price free-label">Бесплатно</span>
                  </>
                ) : (
                  <>
                    <span className="original-price" style={{ textDecoration: 'line-through' }}>{originalPrice.toLocaleString()} {currency}</span>
                    <br />
                    <span className="discounted-price">Бесплатно</span>
                  </>
                )}
              </div>
            </Card.Body>
          </Card>
        </a>
      </Col>
    );
  }
}

export default class Portfolio extends Component {
  state = {
    filter: 'all',
  };

  setFilter = (filterType) => {
    this.setState({ filter: filterType });
  };

  render() {
    const { filter } = this.state;
    const filteredGames = filter === 'all' ? gamesData : gamesData.filter((game) => game.type === filter);

    return (
      <Container className="portfolio-container mt-4 mb-4">
        <div className="filter-buttons">
          <button onClick={() => this.setFilter('all')}>All Games</button>
          <button onClick={() => this.setFilter('Free to Play')}>Free to Play</button>
          <button onClick={() => this.setFilter('Pay to Play')}>Pay to Play</button>
        </div>
        <Row className="justify-content-center">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Row>
      </Container>
    );
  }
}
