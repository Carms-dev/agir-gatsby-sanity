import client from 'part:@sanity/base/client'

export default {
  name: 'locale',
  title: 'Language',
  type: 'string',
  options: {
    list: [
      { title: 'Arabic', value: 'ar' },
      { title: 'English', value: 'en' },
      { title: 'French', value: 'fr' },
      { title: 'Spanish', value: 'es' }
    ]
  },
  validation: Rule => Rule.required().custom((language) => {
    return client.fetch(`count(*[_type == "homePage" && language == "${language}"])`)
      .then(count => {
        if (count > 1) {
          return 'Only one page per language is allowed. Edit existing please.'
        } else {
          return true
        }
      })
  })
}