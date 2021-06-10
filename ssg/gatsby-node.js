const { graphql } = require("gatsby")
const path = require(`path`)

// create homePage dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const HomepageTemplate = path.resolve("./src/templates/HomePage.js")
  const AboutpageTemplate = path.resolve("./src/templates/AboutPage.js")

  const result = await graphql(`
    query {
      allSanityHomePages {
        edges {
          node {
            language
            slug {
              current
            }
          }
        }
      }
      allSanityAboutPages {
        edges {
          node {
            language
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // console.log(result.data.allSanityHomePages.edges.node)
  result.data.allSanityHomePages.edges.forEach(edge => {
    const { node: { language, slug }} = edge
    createPage({
      path: `/${language}/${slug.current}`,
      component: HomepageTemplate,
      context: { language: language }
    })
  })
  result.data.allSanityAboutPages.edges.forEach(edge => {
    const { node: { language, slug }} = edge
    createPage({
      path: `/${language}/${slug.current}`,
      component: AboutpageTemplate,
      context: { language: language }
    })
  })
}
