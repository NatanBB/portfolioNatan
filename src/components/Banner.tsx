import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Banner = (): JSX.Element => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full-Stack Developer", "Web Designer", "Gamer!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

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
                  <h1>{`Hi! I'm Natan`} <span className="txt-rotate" data-rotate='[ "Full-Stack Developer", "Web Designer", "Gamer!" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Studying a Bachelor's degree in Information Systems, improving my knowledge and learning about programming algorithms, object-oriented programming, database, computer network, data structure and software engineering in addition to planning, acquiring and managing services and technology resources of Information and Computing applied to the development and evolution of systems and infrastructures for automating organizational processes, and acting as a Junior Full-Stack Developer, where I have the pleasure of working with several technologies, including JavaScript, C#, Typescript, Git and Node . Using framework like React.js and Next.js, performing implementations with AWS and S3 database. Using code versioning tools like Fork and agile scrum methodology.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
