import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={4} sm={{ span: 2, offset: 1}}>
            <a
              href="https://www.borderscapeproject.org/"
              target="_blank"
              rel="noreferrer nooper"
              title="Borderscape project"
            >
              <StaticImage
                src="../images/borderscape.svg"
                formats={["AUTO", "WEBP"]}
                alt="Borderscapes Borderscape project"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://eeagrants.org/"
              target="_blank"
              rel="noreferrer nooper"
              title="Norway Grants"
            >
              <StaticImage
                src="../images/norway-grants.svg"
                formats={["AUTO", "WEBP"]}
                alt="Norway Grants"
                className="img-fluid"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://www.ncn.gov.pl/"
              target="_blank"
              rel="noreferrer nooper"
              title="Narodowe Centrum Nauki"
            >
              <StaticImage
                src="../images/ncn.svg"
                formats={["AUTO", "WEBP"]}
                alt="Narodowe Centrum Nauki"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://ncn.gov.pl/en/ogloszenia/konkursy/pols"
              target="_blank"
              rel="noreferrer nooper"
              title="POLS (The POLS call is part of the Basic Research Programme operated by the National Science Centre under the EEA and Norway Grants and is prepared in cooperation with the Research Council of Norway)"
            >
              <StaticImage
                src="../images/pols.svg"
                formats={["AUTO", "WEBP"]}
                alt="POLS (The POLS call is part of the Basic Research Programme operated by the National Science Centre under the EEA and Norway Grants and is prepared in cooperation with the Research Council of Norway)"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="http://iksiopan.pl/index.php/pl/"
              target="_blank"
              rel="noreferrer nooper"
              title="IKSIO PAN (Instytut Kultur Śródziemnomorskich i Orientalnych Polskiej Akademii Nauk)"
            >
              <StaticImage
                src="../images/iksiopan.svg"
                formats={["AUTO", "WEBP"]}
                alt="IKSIO PAN (Instytut Kultur Śródziemnomorskich i Orientalnych Polskiej Akademii Nauk)"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://pan.pl/"
              target="_blank"
              rel="noreferrer nooper"
              title="PAN (Polska Akademia Nauk)"
            >
              <StaticImage
                src="../images/pan.svg"
                formats={["AUTO", "WEBP"]}
                alt="PAN (Polska Akademia Nauk)"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://www.dlr.de/en/"
              target="_blank"
              rel="noreferrer nooper"
              title="Deutsches Zentrum für Luft- und Raumfahrt"
            >
              <StaticImage
                src="../images/dlr.svg"
                formats={["AUTO", "WEBP"]}
                alt="Deutsches Zentrum für Luft- und Raumfahrt"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://www.akapegypt.org/"
              target="_blank"
              rel="noreferrer nooper"
              title="AKAP"
            >
              <StaticImage
                src="../images/akap.svg"
                formats={["AUTO", "WEBP"]}
                alt="AKAP"
              />
            </a>
          </Col>
          <Col xs={4} sm={1}>
            <a
              href="https://lad.saras.uniroma1.it"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/scms-lad.png"
                formats={["AUTO", "WEBP"]}
                alt="sCMS by LAD"
              />
            </a>
          </Col>
        </Row>
        <div className="text-center">
          <p className="p-s-3">
            <strong>Borderscapes</strong>
            <br />
            WebGIS of Egyptian State Formation and the Changing Socio-Spatial
            Landscape of the Nile First Cataract Region in the 4th and 3rd
            millennia BCE
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
