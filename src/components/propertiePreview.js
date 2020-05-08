import urlSlug from 'url-slug'
import React from 'react';
import Icons from './Icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

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
    id,
    category,
    agents
  } = item;

  return (
    <aside className="card br-none br-m box-shadow-s">

      <Image fluid={image.sharp.fluid} />

      <CardDody className="card-body">
        <h5>{ name }</h5>
        <p>${ new Intl.NumberFormat().format(price) }</p>

        <hr/>

        <Icons 
          rooms={rooms}
          parking={parking}
          wc={wc}
        />

        <Link to={ urlSlug(name) } className="btn btn-100 btn-empty-grape mt-5">
          See info propertie
        </Link>

      </CardDody>
    </aside>
  );
};