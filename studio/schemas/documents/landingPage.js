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
      description: "The title of this page (this will show up in your browser heading and internal links)",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   description: "The slug for this page",
    //   options: {
    //     source: "title",
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
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
        media: image
      }
    }
  }
}