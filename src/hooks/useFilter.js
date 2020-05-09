import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import urlSlug from "url-slug"
import styled from "@emotion/styled"

const Form = styled.form`
  margin-top: 3rem;

  select {
    width: 100%;
  }
`

export default function useFilter() {
  const reqGql = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)
  const categories = reqGql.allStrapiCategories.nodes

  const [categorie, setCategorie] = useState("")

  const FilterUI = () => (
    <Form>
      <select
        // eslint-disable-next-line no-console
        onChange={e => setCategorie(e.target.value)}
        value={categorie}
      >
        <option value="">--- Filter ---</option>

        {categories.map(item => (
          <option value={urlSlug(item.name)} key={item.id}>
            {" "}
            {item.name}{" "}
          </option>
        ))}
      </select>
    </Form>
  )

  return {
    categorie,
    FilterUI,
  }
}
