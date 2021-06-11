// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import documents to schema
import landingPage from './documents/landingPage'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import navigation from './documents/navigation'
import siteSettings from './documents/siteSettings'
import partner from './documents/partner'

// import reusable components to schema
import locale from './components/locale'
import imageBlock from './components/imageBlock'
import internalLink from './components/internalLink'

// import section to schema
import homeSections from './objects/homeSections'
import aboutSections from './objects/aboutSections'
import hero from './objects/hero'
import pageLink from './objects/pageLink'
import { localeString, localeText } from './objects/localizedFields'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Pages
    landingPage,
    homePage,
    aboutPage,
    
    // Sections Object of pages
    homeSections,
    aboutSections,
    
    // Reusable Section
    hero,
    
    // Objects
    partner,

    // localizedFields
    localeString,
    localeText,

    // Components
    imageBlock,
    internalLink,
    locale,
    pageLink,

    // General Settings
    siteSettings,
    navigation,
  ]),
})
