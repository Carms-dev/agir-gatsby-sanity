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
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      }
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
  ]
}