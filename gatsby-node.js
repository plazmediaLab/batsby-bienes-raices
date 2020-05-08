const urlSlug = require('url-slug');
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
            name
          }
        }
      }
    }
  `);

  reqGql.data.allStrapiProperties.edges.map(item => {
    const slug = urlSlug(item.node.name);
    console.log(slug);
    createPage({
      path: `${slug}`,
      component: DinamicTemplate,
      context:{
        id: `${item.node.id}`
      }
    })
  });
}