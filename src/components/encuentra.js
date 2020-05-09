import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const GridDiv = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 70rem;
  color: #fff;
  text-align: center;

  > * {
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 1);
  }
  p {
    padding: 1rem;
    border: 0.1rem solid #fff;
    border-radius: 0.5rem;
  }
`

const Encuentra = () => {
  const reqGql = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={reqGql.image.sharp.fluid}
      css={css`
        padding: 7rem 2rem;
        margin-top: 4rem;
      `}
    >
      <GridDiv>
        <h2>Find the home of your dreams.</h2>
        <p>15 years of experience.</p>
      </GridDiv>
    </BackgroundImage>
  )
}

export default Encuentra
