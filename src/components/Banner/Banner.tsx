import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";
import './styles.css'

export const Banner = (): JSX.Element => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const toRotate = ["Full-Stack Developer", "Web Designer", "Gamer!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ?
      fullText.substring(0, text.length - 1) :
      fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Natan`}
                    <span className="txt-rotate" data-rotate='[ "Full-Stack Developer", "Web Designer", "Gamer!" ]'>
                      <span className="wrap">
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p>Studying a Bachelor's degree in Information Systems, improving my knowledge and learning about programming algorithms, object-oriented programming, database, computer network, data structure and software engineering.</p>
                  <p>Full Stack Software Developer with experience in end-to-end development of robust systems, especially in ERP for international logistics. Specialist in React, Next.js, TypeScript, C#, and integrations with external APIs. Focus on front-end and back-end performance, using practices such as ORM, Dependency Injection and Cache Implementation. Experience with unit testing (TDD), REST APIs, microservices and AWS-based solutions, including DynamoDB and Lambda. I also worked as a freelancer, delivering complete systems and automations for different niches.</p>
                  <button
                    onClick={
                      () => window.location.href = '#connect'
                    }
                  >
                    Let's Connect
                    <ArrowRightCircle
                      size={25}
                    />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
