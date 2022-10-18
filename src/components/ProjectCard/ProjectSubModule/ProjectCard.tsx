import { Col } from "react-bootstrap";
import React from 'react';
import { ProjectCardData } from "../../../types/globalTypes";
import '../styles.css'

export const ProjectCard = ({
  title,
  description,
  imgUrl
}: ProjectCardData): JSX.Element => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
