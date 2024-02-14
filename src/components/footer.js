import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <div className="d-flex justify-content-center flex-row align-items-center mb-3">
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/borderscape.jpg"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="Borderscapes"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/ncn.jpg"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="NCN"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/pols.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="POLS"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/iksiopan.gif"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="IKSIOPAN"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/pan.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="PAN"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/dlr.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="DLR"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/akap.jpg"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="AKAP"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3">
            <Link href="https://lad.saras.uniroma1.it">
              <StaticImage
                src="../images/scms-lad.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="sCMS by LAD"
                className="img-fluid"
              />
            </Link>
          </div>
        </div>
        <div className="text-center">
            <p className="p-s-3">
              <strong>Borderscapes</strong>
              <br />
              WebGIS of Egyptian State Formation and the Changing Socio-Spatial Landscape of the Nile First Cataract Region in the 4th and 3rd millennia BCE
            </p>
          </div>
      </Container>
    </Footer>
  )
}

//style
const Footer = styled.footer`
  background-color: #ececec;
  border-top: #000 solid 0.5rem;
  min-height: auto;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default FooterSection
