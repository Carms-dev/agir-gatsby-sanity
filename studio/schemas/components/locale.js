import client from 'part:@sanity/base/client'

export default {
  name: 'locale',
  title: 'Language',
  type: 'string',
  options: {
    list: [
      { title: 'ﺎﻨﻫ ﻞﺧدأ', value: 'ar' },
      { title: 'English', value: 'en' },
      { title: 'Français', value: 'fr' },
      { title: 'Espagñol', value: 'es' }
    ]
  },
  // validation: Rule => Rule.required().custom((language, context) => {
  //   return client.fetch(`count(*[_type == "${context.document._type}" && language == "${language}"])`)
  //     .then(count => {
  //       if (count > 1) {
  //         return `Only one ${context.document._type} per language is allowed. Edit existing please.`
  //       } else {
  //         return true
  //       }
  //     })
  // })
}