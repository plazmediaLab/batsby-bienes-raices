const urlSlug = require("url-slug")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const DinamicTemplate = path.resolve(
    `src/components/layout/dinamicTemplate.js`
  )
  const DinamicPage = path.resolve(`src/components/layout/dinamicPages.js`)

  const reqGql = await graphql(`
    query {
      allStrapiPages {
        nodes {
          id
          name
        }
      }
      allStrapiProperties {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  reqGql.data.allStrapiPages.nodes.map(item => {
    const slug = item.name
    if (slug !== "home") {
      createPage({
        path: `${slug}`,
        component: DinamicPage,
        context: {
          id: `${item.id}`,
        },
      })
    }
  })

  reqGql.data.allStrapiProperties.edges.map(item => {
    const slug = urlSlug(item.node.name)
    createPage({
      path: `${slug}`,
      component: DinamicTemplate,
      context: {
        id: `${item.node.id}`,
      },
    })
  })
}
