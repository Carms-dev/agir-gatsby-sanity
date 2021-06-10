// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import documents to schema
import partner from './partner'
import homePage from './homePage'
import aboutPage from './aboutPage'

// import objects to schema
import hero from './components/hero'
import imageBlock from './objects/imageBlock'

// import section objects to schema
import homeSections from './components/homeSections'
import locale from './objects/locale'
import aboutSections from './components/aboutSections'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Doc types here! */
    homePage,
    aboutPage,
    partner,
    /* Object types here! */
    hero,
    imageBlock,

    locale,
    homeSections,
    aboutSections,
  ]),
})
