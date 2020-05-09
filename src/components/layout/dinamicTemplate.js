import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// Components
import Layout from "./layout"
import Icons from "../Icons"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Price = styled.h3`
  font-weight: 700;
  display: block;
  padding: 1rem;
  border: 0.1rem dashed var(--grape);
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  color: var(--grape-light-1);
`
const CardSection = styled.section`
  margin-top: 2rem;

  > * {
    padding: 1.5rem;
    color: #fff;
  }

  div {
    background-color: var(--grape);
    border-radius: 0.8rem 0.8rem 0 0;

    > * {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  > p {
    background-color: var(--grape-light-1);
    border-radius: 0 0 0.8rem 0.8rem;
    margin: 0;
    margin-top: 0.5rem;
  }
  .title {
    font-weight: 600;
  }
`

export default props => {
  const data = props.data.allStrapiProperties.edges[0].node
  const {
    name,
    description,
    rooms,
    parking,
    wc,
    price,
    image,
    agents,
    category,
  } = data

  return (
    <Layout>
      <div className="container">
        <h1 className="txt-a-c mb-5 mt-4">{name}</h1>

        <Grid>
          <main>
            <Image fluid={image.sharp.fluid} />
            <p
              css={css`
                white-space: pre-line;
              `}
            >
              {description}
            </p>
          </main>
          <aside>
            <Price>${new Intl.NumberFormat().format(price)}</Price>

            <hr />

            <Icons rooms={rooms} parking={parking} wc={wc} />

            <CardSection>
              <div>
                <p className="title">Seller:</p>
                <hr className="hr-w vm-2" />
                <ul>
                  <li>
                    <i className="a-account_circle mr-2" />
                    {agents.name}
                  </li>
                  <li>
                    <i className="a-emoji_food_beverage mr-2" />
                    {agents.phone}
                  </li>
                  <li>
                    <i className="a-mail_outline mr-2" />
                    {agents.email}
                  </li>
                </ul>
              </div>
              <p>Category: {category.name}</p>
            </CardSection>
          </aside>
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          description
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          rooms
          parking
          wc
          price
          agents {
            name
            phone
            email
          }
          category {
            name
          }
        }
      }
    }
  }
`
