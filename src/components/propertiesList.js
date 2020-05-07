import React, { useState, useEffect } from 'react';
import useProperties from '../hooks/useProperties';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropertiePreview from './propertiePreview';

const Grid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;

  @media(max-width: 930px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

const PropertiesList = () => {

  const response = useProperties();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(response);
  }, [/* dependencia */]);

  return (
    <div css={css`
      text-align: center;
    `}>

      <h3>Our properties</h3>

      <Grid>
        {properties.slice(0, 6).map(item =>(
        
          <PropertiePreview 
            key={item.id}
            item={item}
          />
          
        ))}
      </Grid>

    </div>
  );
};

export default PropertiesList;