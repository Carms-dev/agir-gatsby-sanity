import { AiOutlineHome as icon } from 'react-icons/ai'
import { object } from "prop-types";


export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'hero',
          title: 'Hero Section',
          type: 'object',
          options: {collapsible: true},
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ]
        },
      ]
    }

  ]
}