import { FaCompass as icon } from 'react-icons/fa'
import React from 'react' 

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'locale',
    },
    {
      name: 'navItems',
      title: 'Nav Items',
      description: 'Ordered list of links to Home Page for each languages',
      type: 'array',
      of: [{
        type: 'internalLink'
      }],
      // of: [{
      //   type: 'reference',
      //   to: [
      //     {type: 'homePages'}
      //   ]
      // }],
      validation: Rule => Rule.unique()
    },
  ],
  preview: {
    select: {
      context: 'context',
      language: 'language'
    },
    prepare: ({ title, language }) => {
      const EMOJIS = {
        'en': '🇬🇧',
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'ar': '🇦🇪',
      }
      return {
        title: `Navbar (${language.toUpperCase()})`,
        media: <span style={{fontSize: '1.5rem'}}>{language ? EMOJIS[language] : '🚫'}</span>
      }
    }
  }
}