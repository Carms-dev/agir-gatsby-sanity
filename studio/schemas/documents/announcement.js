import { GrAnnounce as icon } from 'react-icons/gr'

export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon,
  initialValue: {
    isActive: false,
  },
  fields: [
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'What text do you want to appear on the bar?',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Link text to Popup',
      type: 'localeString',
      description: 'If you want a popup with more information about your announcement, what text would you like the user to click on to trigger the popup?',
    },
    {
      name: 'modalText',
      title: 'Popup Text',
      type: 'localePortableText',
      description: 'If you want a popup message, what text do you want to appear in the popup? Feel free to include links or anything you like.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => {
      return {
        title: title.en,
      }
    }
  }
}