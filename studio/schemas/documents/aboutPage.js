import { FaRainbow as icon } from 'react-icons/fa'
import React from 'react' 

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon,
  initialValue: {
    templateKey: 'aboutPage'
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
      validation: (Rule) => Rule.required(),
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
      type: 'aboutSections',
    }
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      slug: 'slug'
    },
    prepare: ({ title, language, slug }) => {
      console.log(slug)
      const EMOJIS = {
        'en': '🇬🇧',
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'ar': '🇦🇪',
      }
      return {
        title,
        subtitle: `/${language}/${slug.current}`,
        media: <span style={{fontSize: '1.5rem'}}>{EMOJIS[language]}</span>
      }
    }
  }
}