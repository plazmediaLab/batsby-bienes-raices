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
    // console.log(item.node.id)
    createPage({
      path: `${item.node.id}`,
      component: DinamicTemplate,
      context:{
        slug: `${item.node.id}`
      }
    })
  });
}