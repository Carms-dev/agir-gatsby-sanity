import { MdSettings as icon } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'name',
      title: 'Organization name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Organization address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Website Title',
      type: 'localeString',
      description: 'For SEO localization purposes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'localeText',
      description: 'For SEO localization purposes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'imageBlock',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title.en',
      image: 'logo.asset',
    },
    prepare: ({ name, title, image }) => {
      return {
        title: name,
        subtitle: title,
        media: image,
      }
    }
  }
}