import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 fas fa'> Copyright &copy; Imperial Headphones</Col>
          <Col className='text-center py-3 fas fa-at'><a href="mailto:imperialheadphones@gmail.com">imperialheadphones@gmail.com</a> </Col>
          <Col className='text-center py-3 fas fa-phone'><a href="tel:++2109999999"> +2109999999</a></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
