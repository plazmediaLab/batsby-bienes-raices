// Gatsby
import { graphql, useStaticQuery } from 'gatsby';

const useHome = () => {

  const reqGql = useStaticQuery(graphql`
    query{
      allStrapiPages(filter: {name: {eq: "home"}}) {
        edges {
          node {
            id
            name
            content
            image {
              sharp: childImageSharp {
                fluid( maxWidth: 1200 ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return reqGql.allStrapiPages.edges[0].node;

};

export default useHome;