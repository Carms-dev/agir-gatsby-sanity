const { graphql } = require("gatsby")
const path = require(`path`)

// create homePage dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allSanityHomePage {
        edges {
          node {
            language
            slug {
              current
            }
          }
        }
      }
      allSanityAboutPage {
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
  result.data.allSanityHomePage.edges.forEach(edge => {
    const { node: { language, slug }} = edge
    createPage({
      path: `/${language}/${slug.current}`,
      component: path.resolve("./src/templates/homePage.js"),
      context: { language: language }
    })
  })
  result.data.allSanityAboutPage.edges.forEach(edge => {
    const { node: { language, slug }} = edge
    createPage({
      path: `/${language}/${slug.current}`,
      component: path.resolve("./src/templates/aboutPage.js"),
      context: { language: language }
    })
  })
}
