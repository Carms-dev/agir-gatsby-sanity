// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import documents to schema
import landingPage from './documents/landingPage'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import getSupportPage from './documents/getSupportPage'
import getInvolvedPage from './documents/getInvolvedPage'
import donatePage from './documents/donatePage'
import privacyPolicyPage from './documents/privacyPolicyPage'
import contactPage from './documents/contactPage'

import navigation from './documents/navigation'
import siteSettings from './documents/siteSettings'

import partner from './documents/partner'
import announcement from './documents/announcement'

// import reusable components to schema
import locale from './components/locale'
import imageBlock from './components/imageBlock'
import internalLink from './components/internalLink'

// import section to schema
import { homeSections, aboutSections, getSupportSections, contactSections, getInvolvedSections, donateSections } from './objects/sections'
import { hero, heroAlt } from './objects/hero'
import pageLink from './objects/pageLink'
import { localePortableText, localeString, localeText } from './objects/localizedFields'
import portableText from './components/portableText'

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
    getSupportPage,
    getInvolvedPage,
    donatePage,
    contactPage,
    privacyPolicyPage,
    
    // Sections Object of pages
    homeSections,
    aboutSections,
    getSupportSections,
    getInvolvedSections,
    donateSections,
    contactSections,

    // Reusable Section
    hero,
    heroAlt,
    
    // Objects
    partner,
    announcement,

    // localizedFields
    localeString,
    localeText,
    localePortableText,

    // Components
    imageBlock,
    internalLink,
    locale,
    pageLink,
    portableText,

    // General Settings
    siteSettings,
    navigation,
  ]),
})
