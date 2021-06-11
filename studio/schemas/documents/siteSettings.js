import { MdSettings as icon } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'Website Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
      description: 'Website description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'imageBlock',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'logo.asset',
    },
    prepare: ({ title, image }) => {
      return {
        title: title.en,
        media: image
      }
    }
  }
}