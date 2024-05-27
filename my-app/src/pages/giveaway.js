import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './giveaway.css'; // Подключаем файл стилей

const games = [
  { id: 1, title: 'Игра 1', discount: '50%', price: '$10', endDate: '2024-06-01' },
  { id: 2, title: 'Игра 2', discount: '25%', price: '$20', endDate: '2024-06-15' },
  { id: 3, title: 'Игра 3', discount: '75%', price: '$5', endDate: '2024-07-01' },
  // Добавьте больше игр здесь
];

const GiveawayPage = () => {
  return (
    <Container fluid className="giveaway-container">
      <h1 className="giveaway-heading">Игры для розыгрыша</h1>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
        {games.map((game) => (
          <Col key={game.id}>
            <Card className="game-card">
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>
                  Скидка: <s>{game.discount}</s> Бесплатно
                </Card.Text>
                <Card.Text>Оригинальная цена: {game.price}</Card.Text>
                <Button variant="info" className="enter-button">Участвовать</Button>
                <p className="timer">До конца акции: {game.endDate}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GiveawayPage;

