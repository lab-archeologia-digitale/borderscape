import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Slide() {
  return (
    <Slider>
      <Carousel>
        <Carousel.Item>
        <StaticImage
            src="../images/desert/01-nile-at-first-cataract.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide2"
          />
           <Carousel.Caption>
            <p>The Nile at the First Cataract (© AKAP Archive)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/02-dynasty-zero-rock-art.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide2"
          />
          <Carousel.Caption>
            <p>Documenting Dynasty Zero rock art at Nag el-Hamdulab (© AKAP Archive)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/03-predynastic-cemetery.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide3"
          />
          <Carousel.Caption>
            <p>Excavating the Predynastic cemetery of Nag el-Qarmila (© AKAP Archive)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/04-eastern-desert.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide3"
          />
          <Carousel.Caption>
            <p>Surveying the Eastern Desert at Wadi Abu Subeira (© AKAP Archive)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Slider>
  )
}

//style
const Slider = styled.div`
  margin-bottom: 3rem; 
  border-bottom: var(--project-color) solid .3rem;

  .carousel-caption{
    background: rgba(0,0,0,.3);
  }
`

export default Slide
