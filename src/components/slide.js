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
            src="../images/desert/desert-1.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide2"
          />
           <Carousel.Caption>
            <p>LORE IPSUM DOLOR SIT AMET</p>
            <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/desert-2.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide2"
          />
          <Carousel.Caption>
            <p>LORE IPSUM DOLOR SIT AMET</p>
            <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/desert-3.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide3"
          />
          <Carousel.Caption>
            <p>LORE IPSUM DOLOR SIT AMET</p>
            <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/desert/desert-4.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="slide3"
          />
          <Carousel.Caption>
            <p>LORE IPSUM DOLOR SIT AMET</p>
            <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
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
