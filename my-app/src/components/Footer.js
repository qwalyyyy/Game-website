import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import style file for footer

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <h5>About Us</h5>
                        <p>"Игровые ключи Онлайн" - это современный и надежный сайт, специализирующийся на продаже игровых ключей для самых популярных игр на различных платформах. Наш сервис предлагает быстрые и безопасные покупки, гарантируя, что каждый клиент получит свой ключ моментально после оплаты.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: marfa1984@outlook.com</p>
                        <p>Phone: +7 (997) 819-15-29</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            {/* Добавлены иконки мессенджеров */}
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                            <a href="#"><i className="fab fa-telegram-plane"></i></a>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} className="text-center">
                        <p>&copy; 2024 Epic Games. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
