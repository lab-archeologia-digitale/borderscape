import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <div className="d-md-flex justify-content-around align-items-center text-center">
        <div>
          <Link to={withPrefix("/")}>
            <StaticImage
              src="../images/borderscape.svg"
              width={250}
              quality={80}
              formats={["AUTO", "WEBP"]}
              alt={siteTitle}
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="lead ms-4">
          WebGIS of Egyptian State Formation and the Changing Socio-Spatial
          Landscape of the Nile First Cataract Region in the 4th and 3rd
          millennia BCE
        </div>
      </div>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: #ee8822;
  color: #ffffff;
  margin-bottom: 5rem;
`

export default HeaderSection
