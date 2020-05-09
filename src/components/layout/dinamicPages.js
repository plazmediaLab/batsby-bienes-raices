import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
// Components
import Layout from "./layout"

export default props => {
  const data = props.data.allStrapiPages.nodes[0]

  const { name, content, image } = data

  return (
    <Layout>
      <div className="container">
        <h1
          className="txt-a-c mb-5 mt-4"
          css={css`
            text-transform: capitalize;
          `}
        >
          {name}
        </h1>
      </div>

      <Image
        fluid={image.sharp.fluid}
        css={css`
          height: 350px;
        `}
      />

      <div className="container vm-4">
        <p
          css={css`
            white-space: pre-line;
          `}
        >
          {content}
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allStrapiPages(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        content
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
