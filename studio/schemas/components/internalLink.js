export default {
  name: 'internalLink',
  title: 'Internal link',
  type: 'reference',
  to: [
    // { type: 'homePage' },
    { type: 'aboutPage' },
    { type: 'getSupportPage' },
    { type: 'getInvolvedPage' },
    { type: 'donatePage' },
    { type: 'contactPage' },
  ],
  options: {
    filter: ({document}) => {
      // Always make sure to check for document properties
      // before attempting to use them
      if (document.language) {
        return {
          filter: 'language == $currentLanguage && _type',
          params: {
            currentLanguage: document.language,
          }
        }
      }
    }
  }
}