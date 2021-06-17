import { FaQuoteLeft as icon } from 'react-icons/fa'

export default {
  name: 'testimonial',
  title: 'Testimonial ',
  type: 'document',
  icon,
  initialValue: {
    isActive: false,
  },
  fields: [
    {
      name: 'isActive',
      title: 'Show on home page?',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'citation',
      title: 'Citation',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      citation: 'citation',
      quote: 'quote',
      isActive: 'isActive'
    },
    prepare: ({ citation, quote, isActive }) => {
      return {
        title: `${isActive ? '🟢' : '🔴'} ${citation[`en`]}`,
        subtitle: quote,
      }
    }
  }
}