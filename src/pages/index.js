import React from 'react';
// Components 
import Layout from '../components/layout/layout';
// Hooks
import useHome from '../hooks/useHome';
import BackgroundImage from 'gatsby-background-image';
// Styled components
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Encuentra from '../components/encuentra';
import PropertiesList from '../components/propertiesList';

const ImageBackground = styled(BackgroundImage)`
  height: 500px;

  @media(max-width: 768px){
    height: 350px;
  }
`;

const GridDiv = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 70rem;
  color: #fff;
  text-align: center;

  h1{
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 4.5rem;
    padding: 0 0rem;

    @media(max-width: 768px){
      font-size: 3.8rem;
      padding: 0 3.5rem;
    }
  }
`;

export default () => {
  
  const { name, content, image } = useHome();

  

  return (
    <Layout>

      <ImageBackground
        fluid={image.sharp.fluid}
      >
        <GridDiv className="conTxtBann">
          <h1>Your best option in buying and selling real estate.</h1>
        </GridDiv>
      </ImageBackground>

      <main className="container mt-5">
        <section className="txt-a-c">
          <h1 className="txt-strong" css={css`text-transform: capitalize;`}>{ name }</h1>
          <p>{ content }</p>
        </section>


      </main>

      <Encuentra />

      <main className="container mt-5">

        <PropertiesList />

      </main>

    </Layout>
  );
};