import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const UlGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;

  li {
    display: flex;
    justify-content: center;

    img {
      height: 2.5rem;
      margin-right: 1rem;
    }
  }
`

const IconsSvg = ({ rooms, parking, wc }) => {
  const reqGql = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  return (
    <UlGrid>
      <li>
        <img src={reqGql.icons.edges[0].node.publicURL} alt="Icon Rooms" />
        {rooms}
      </li>
      <li>
        <img src={reqGql.icons.edges[1].node.publicURL} alt="Icon Parking" />
        {parking}
      </li>
      <li>
        <img src={reqGql.icons.edges[2].node.publicURL} alt="Icon WC" />
        {wc}
      </li>
    </UlGrid>
  )
}

export default IconsSvg
