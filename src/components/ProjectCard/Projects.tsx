import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectSubModule/ProjectCard";
import projImg1 from "../../assets/img/bethehero.png";
import projImg2 from "../../assets/img/ecoleta.png";
import projImg3 from "../../assets/img/podcastr.png";
import projImg4 from "../../assets/img/proffy.png";
import projImg5 from "../../assets/img/terrainp5.png";
import projImg6 from "../../assets/img/libproject.png";
import projImg7 from "../../assets/img/plant.png";
import projImg8 from "../../assets/img/coffe.png";
import projImg9 from "../../assets/img/pricing.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import './styles.css'

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "Be The Hero",
      description: "Development, React, React Native",
      imgUrl: projImg1,
    },
    {
      title: "Ecoleta",
      description: "Development, React, React Native",
      imgUrl: projImg2,
    },
    {
      title: "Proffy",
      description: "Development, React",
      imgUrl: projImg4,
    },
    {
      title: "Podcastr",
      description: "Development, React",
      imgUrl: projImg3,
    },
    {
      title: "Terrain Generator",
      description: "Development, JavaScript, P5",
      imgUrl: projImg5,
    },
    {
      title: "Lib Project",
      description: "Development, React",
      imgUrl: projImg6,
    },
  ];

  const projectsTab2 = [
    {
      title: "Plant Manager",
      description: "Development, React Native",
      imgUrl: projImg7,
    },
    {
      title: "Rocket Coffe",
      description: "Development, JavaScript",
      imgUrl: projImg8,
    },
    {
      title: "Princing Table",
      description: "Development, JavaScript",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>Here you can find my personal projects, developed during my training, and also during courses and events, including projects by @Rocketseat, @Udemy and others.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsTab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Future projects will be displayed here.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={"Background Color"}></img>
    </section>
  )
}
