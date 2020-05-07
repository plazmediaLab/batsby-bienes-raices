import React from 'react';
import Icons from './Icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const CardDody = styled.div`
  text-align: left;

  >* {
    font-weight: 600;
  }
  p{
    color: var(--grape-light-1);
  }
`;

export default function PropertiePreview({ item }){

  const {
    name,
    description,
    rooms,
    parking,
    wc,
    price,
    image,
    category,
    agents
  } = item;

  return (
    <aside className="card br-none br-m box-shadow-s">

      <Image fluid={image.sharp.fluid} />

      <CardDody className="card-body">
        <h5>{ name }</h5>
        <p>${ price }</p>

        <hr/>

        <Icons 
          rooms={rooms}
          parking={parking}
          wc={wc}
        />

      </CardDody>
    </aside>
  );
};