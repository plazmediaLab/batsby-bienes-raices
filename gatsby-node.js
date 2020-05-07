const path = require('path');

exports.createPages= async ({ graphql, actions }) => {
  const { createPage } = actions;
  const DinamicTemplate = path.resolve(`src/components/layout/dinamicTemplate.js`);

  const reqGql = await graphql(`
    query{
      allStrapiProperties{
        edges{
          node{
            id
          }
        }
      }
    }
  `);

  reqGql.data.allStrapiProperties.edges.map(item => {
    const slug = item.node.id;
    createPage({
      path: `${slug}`,
      component: DinamicTemplate,
      context:{
        slug: `${slug}`
      }
    })
  });
}