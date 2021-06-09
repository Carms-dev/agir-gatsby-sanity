import { AiOutlineHome as icon } from 'react-icons/ai'
import client from 'part:@sanity/base/client'
// import { object } from "prop-types";
import React from 'react' 


export default {
  name: 'homePages',
  title: 'Home Pages',
  type: 'document',
  icon,
  initialValue: async () => ({

  }),
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Arabic', value: 'ar'},
          {title: 'English', value: 'en'},
          {title: 'French', value: 'fr'},
          {title: 'Spanish', value: 'es'}
        ]
      },
      validation: Rule => Rule.required().custom((language) => {
        return client.fetch(`count(*[_type == "homePage" && language == "${language}"])`)
        .then(count => {
          if (count > 1){
            return 'Only one page per language is allowed. Edit existing please.'
          } else{
            return true
          }
        })
      })
    },
    {
      name: 'title',
      title: 'Title',
      type: "string",
      description: "The title of this page (this will show up in your browser heading and internal links)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug for this page",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'homeSections',
    }
  ],
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
        media: <span style={{fontSize: '1.5rem'}}>{language ? EMOJIS[language] : '🚫'}</span>
      }
    }
  }
}