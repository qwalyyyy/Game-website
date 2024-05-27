import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pages/Games.css'; // Файл со стилями

// Пример данных об играх (добавлены новые игры)
const gamesData = [
  { id: 1, title: 'Forza Horizon 5', description: 'ЖАНР: Экшены, Приключенческие игры, Гонки, Симуляторы, Спортивные игры', type: 'Free to Play', link: '/game1', price: 999, image: '/goat.jpeg'  },
  { id: 2, title: 'Tom Clancy’s Rainbow Six® Extraction', description: 'ЖАНР: Экшены', type: 'Pay to Play', link: '/game2', price: 1499, discount: 0.51, images: '/goat.jpeg' },
  { id: 3, title: 'Assassins Creed Valhalla', description: 'ЖАНР: Экшены, Приключенческие игры, Ролевые игры', type: 'Free to Play', link: '/game3', price: 799, images: '/goat.jpeg' },
  { id: 4, title: 'Euro Truck Simulator 2', description: 'ЖАНР: Инди, Симуляторы', type: 'Pay to Play', link: '/game4', price: 1999, discount: 0.15, images: '/goat.jpeg' },
  { id: 5, title: 'Counter-Strike 2', description: 'ЖАНР: Экшены, Бесплатно', type: 'Free to Play', link: '/game5', price: 1299, images: '/goat.jpeg' },
  { id: 6, title: 'Content Warning', description: 'ЖАНР: Экшены, Приключенческие игры, Инди', type: 'Pay to Play', link: '/game6', price: 999, discount: 0.12, images: '/goat.jpeg' },
  // Добавьте другие игры...
  { id: 7, title: 'Cyberpunk 2077', description: 'ЖАНР: Ролевые игры', type: 'Free to Play', link: '/game7', price: 1499, images: '/goat.jpeg' },
  { id: 8, title: 'Kingdom Come: Deliverance', description: 'ЖАНР: Экшены, Приключенческие игры, Ролевые игры', type: 'Free to Play', link: '/game8', price: 1999, images: '/goat.jpeg' },
  { id: 9, title: 'HELLDIVERS™ 2', description: 'ЖАНР: Экшены', type: 'Free to Play', link: '/game9', price: 899 },
];

class GameCard extends Component {
  render() {
    const { title, description, link, price, discount, type, image } = this.props.game;
    const originalPrice = price;
    const currency = '₽'; // Символ валюты

    return (
      <Col xs={12} sm={6} md={4} lg={30} className="mb-4">
        <a href={link} className="game-link">
          <Card className={`game-card ${type === 'Free to Play' ? 'free-to-play' : ''}`}>
            <Card.Img variant="top"  alt={title} />
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
