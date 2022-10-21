import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from '../../assets/img/whatsapp.svg';
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/github.svg";
import React from 'react';
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/natan-borba-boos/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/natan_boos/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=5547992594036&text=Ol%C3%A1!%20Me%20interessei%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20marcarmos%20uma%20conversa." target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/NatanBB" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
