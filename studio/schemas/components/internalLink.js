export default {
  name: 'internalLink',
  title: 'Internal link',
  type: 'reference',
  to: [
    // { type: 'homePage' },
    { type: 'aboutPage' },
  ],
  options: {
    filter: ({document}) => {
      // Always make sure to check for document properties
      // before attempting to use them
      if (document.language) {
        return {
          filter: 'language == $currentLanguage && _type != $currentType || _type == "landingPage"',
          params: {
            // role: 'InternalLink',
            currentLanguage: document.language,
            currentType: document._type
          }
        }
      }
    }
  }
}