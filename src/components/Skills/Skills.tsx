import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import React from 'react';
import './styles.css';
import { skillsContext } from "../../utils/context";
import { SkillsContextType } from "../../types/globalTypes";

export const Skills = (): JSX.Element => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Always looking to improve my knowledge, my main skills!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {
                  skillsContext.map((skills: SkillsContextType) => (
                    <div key={skills.id} className="cardSkill" >
                      <h1>{skills.title}</h1>
                      <p className="contentCard">
                        {skills.content}
                      </p>
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
