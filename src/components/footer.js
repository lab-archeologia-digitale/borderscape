import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <div className="d-flex flex-row justify-content-around align-items-center flex-wrap">
          <div>
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
                width={100}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={150}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={80}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={150}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={100}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={200}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
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
                width={90}
                className="img-fluid"
              />
            </a>
          </div>
          <div>
            <a
              href="https://lad.saras.uniroma1.it"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/scms-lad.png"
                formats={["AUTO", "WEBP"]}
                alt="sCMS by LAD"
                width={100}
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        <div className="text-center mt-3 pt-3 border-top">
          <p className="p-s-3">
            <strong>BORDERSCAPE</strong>
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
  border-top: var(--project-color) solid 0.5rem;
  min-height: auto;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default FooterSection
