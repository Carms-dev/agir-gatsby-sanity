import { AiOutlineHome as icon } from 'react-icons/ai'
import React from 'react' 

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  initialValue: {
    templateKey: 'homePage',
  },
  fields: [
    {
      name: 'templateKey',
      title: 'Template Key',
      type: 'string',
      hidden: true,
    },
    {
      name: 'language',
      title: 'Language',
      type: 'locale',
    },
    {
      name: 'title',
      title: 'Title',
      type: "string",
      description: "The title of this page (this will show up in your browser heading and internal links)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'homeSections',
    }
  ],
  initialValue: {
    templateKey: 'homePage'
  },
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare: ({ title, language }) => {
      const EMOJIS = {
        'en': '🇬🇧',
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'ar': '🇦🇪',
      }
      return {
        title: `${title} (${language.toUpperCase()})`,
        subtitle: `/${language}`,
        media: <span style={{fontSize: '1.5rem'}}>{language ? EMOJIS[language] : '🚫'}</span>
      }
    }
  }
}