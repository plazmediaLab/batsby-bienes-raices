import React, { useState, useEffect } from "react"
import useProperties from "../hooks/useProperties"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PropertiePreview from "./propertiePreview"
import urlSlug from "url-slug"
// Hooks
import useFilter from "../hooks/useFilter"

const Grid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PropertiesList = () => {
  const response = useProperties()
  const [properties] = useState(response)
  const [filtered, setFiltered] = useState([])

  const { categorie, FilterUI } = useFilter()

  useEffect(() => {
    if (categorie) {
      const filter = properties.filter(
        item => urlSlug(item.category.name) === categorie
      )
      setFiltered(filter)
    } else {
      setFiltered(properties)
    }
    // eslint-disable-next-line
  }, [categorie])

  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <h3>Our properties</h3>

      {FilterUI()}

      <hr />

      <Grid>
        {filtered.slice(0, 9).map(item => (
          <PropertiePreview key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  )
}

export default PropertiesList
