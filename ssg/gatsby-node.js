const { graphql } = require("gatsby")
const path = require(`path`)

// create homePage dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allSanityHomePage {
        nodes {
          language
          templateKey
        }
      }
      allSanityAboutPage {
        nodes {
          language
          templateKey
          slug {
            current
          }
        }
      }
      allSanityGetSupportPage {
        nodes {
          language
          templateKey
          slug {
            current
          }
        }
      }
      allSanityGetInvolvedPage {
        nodes {
          language
          templateKey
          slug {
            current
          }
        }
      }
      allSanityDonatePage {
        nodes {
          language
          templateKey
          slug {
            current
          }
        }
      }
      allSanityContactPage {
        nodes {
          language
          templateKey
          slug {
            current
          }
        }
      }
    }
  `)

  Object.keys(result.data).forEach(key => {
    result.data[key].nodes.forEach(node => {
      createPage({
        path: node.slug ? `/${node.language}/${node.slug.current}` : `/${node.language}`,
        component: path.resolve(`./src/templates/${node.templateKey}.js`),
        context: { language: node.language }
      })
    })
  })
  // result.data.allSanityHomePage.nodes.forEach(node => {
  //   const { language, templateKey } = edge
  //   createPage({
  //     path: `/${language}`,
  //     component: path.resolve("./src/templates/homePage.js"),
  //     context: { language: language }
  //   })
  // })
  // result.data.allSanityAboutPage.edges.forEach(edge => {
  //   const { node: { language, slug }} = edge
  //   createPage({
  //     path: `/${language}/${slug.current}`,
  //     component: path.resolve("./src/templates/aboutPage.js"),
  //     context: { language: language }
  //   })
  // })
}
