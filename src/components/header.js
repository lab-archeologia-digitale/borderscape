import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <Row className="text-center">
        <Col xs={12} md={3}>
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
        </Col>
        <Col>
          <div className="lead pt-5">
            WebGIS of Egyptian State Formation and the Changing Socio-Spatial
            Landscape of the Nile First Cataract Region in the 4th and 3rd
            millennia BCE
          </div>
        </Col>
      </Row>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: #ee8822;
  color: #ffffff;
  margin-bottom: 5rem;
`

export default HeaderSection
