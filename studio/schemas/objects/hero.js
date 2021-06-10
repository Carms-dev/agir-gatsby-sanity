export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'featuredImage', title: 'Featured Image', type: 'imageBlock'}
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   fields: [
    //     {
    //       name: 'alt',
    //       title: 'Alternative Text',
    //       type: 'string',
    //       options: {
    //         isHighlighted: true // <-- make this field easily accessible
    //       }
    //     },
    //     {
    //       // Editing this field will be hidden behind an "Edit"-button
    //       name: 'attribution',
    //       type: 'string',
    //       title: 'Attribution',
    //     }
    //   ]
    // }
  ]
}
