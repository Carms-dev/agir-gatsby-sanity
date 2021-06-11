import { AiOutlineHeart as icon } from 'react-icons/ai'

export default {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'localeString',
    },
    {
      name: 'websiteUrl',
      title: 'Partner website url',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
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