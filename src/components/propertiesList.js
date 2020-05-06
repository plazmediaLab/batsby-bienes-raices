import React, { useState, useEffect } from 'react';
import useProperties from '../hooks/useProperties';
import { css } from '@emotion/core';

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

      <hr css={css`margin: 3rem;`}/>

      <h3>Our properties</h3>

      {properties.slice(0, 4).map(item =>(
        <p>Item</p>
      ))}

    </div>
  );
};

export default PropertiesList;