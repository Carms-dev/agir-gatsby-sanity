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
      description: 'Optional. If you want a popup with more information about your announcement, what text would you like the user to click on to trigger the popup?',
    },
    {
      name: 'modalText',
      title: 'Popup Message',
      type: 'localePortableText',
      description: 'Required, when Link text to Popup is defined. This, along with the Title, will be displayed in the popup!',
      validation: Rule => Rule.custom((field, context) => {
        // implement popup if linkText is defined, validate that pop up message is defined
        const isPopup = context.document.linkText[`en`] !== undefined

        if (isPopup && field[`en`] === undefined) {
          return "Link text to popup isn't empty, hence Popup message must not be empty."
        } else {
          return true
        }
      })
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