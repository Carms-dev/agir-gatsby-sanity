import { MdAttachMoney as icon } from 'react-icons/md'
import React from 'react' 

export default {
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  icon,
  initialValue: {
    templateKey: 'donatePage'
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
      type: 'donateSections',
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