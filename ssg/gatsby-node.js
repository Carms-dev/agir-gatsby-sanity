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

  result.data.allSanityHomePage.edges.forEach(edge => {
    const { node: { language }} = edge
    createPage({
      path: `/${language}`,
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
