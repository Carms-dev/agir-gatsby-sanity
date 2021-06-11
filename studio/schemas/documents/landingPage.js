import { GiAirplaneArrival as icon } from 'react-icons/gi'

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: "string",
      description: "The title of this page",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: "string",
    },
    {name: 'featuredImage', title: 'Featured Image', type: 'imageBlock'},
    {
      name: 'languageHomeLinks',
      title: 'Links to home',
      description: 'Ordered list of links to Home Page for each languages',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'homePage'}
        ]
      }],
      validation: Rule => Rule.unique()
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'featuredImage.asset',
    },
    prepare: ({ title, image }) => {
      return {
        title: title,
        subtitle: `/`,
        media: image
      }
    }
  }
}