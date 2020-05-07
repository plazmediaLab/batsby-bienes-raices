import React from 'react';
// Components 
import Layout from './layout';
import { graphql } from 'gatsby';

export default (props) => {

  const data = props.data.allStrapiProperties.edges[0].node;
  const {
    id
  } = data;

  console.log(id);

  return (
    <Layout>

      <div className="container">
        <h2>Dinamic page...</h2>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query($slug:String){
    allStrapiProperties(filter: {id: {eq: $slug}}){
      edges{
        node{
          id
          name
          description
          image{
            sharp: childImageSharp{
              fluid(maxWidth: 1200){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          rooms
          parking
          wc
          price
          agents{
            name
            phone
            email
          }
          category{
            name
          }
        }
      }
    }
  }
`;