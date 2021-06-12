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
}
