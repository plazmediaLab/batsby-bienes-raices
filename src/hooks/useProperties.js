import { graphql, useStaticQuery } from 'gatsby';

const useProperties = () => {
  
  const reqGql = useStaticQuery(graphql`
    query{
      allStrapiProperties {
        edges {
          node {
            name
            rooms
            parking
            wc
            price
            category {
              name
            }
            agents {
              name
              phone
              email
            }
            description
            id
            image{
              sharp: childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return reqGql.allStrapiProperties.edges.map(item => ({
    name: item.node.name,
    description: item.node.description,
    image: item.node.image,
    id: item.node.id,
    wc: item.node.wc,
    parking: item.node.parking,
    rooms: item.node.rooms,
    price:item.node.price,
    agents: item.node.agents,
    category: item.node.category
  }))

};

export default useProperties;