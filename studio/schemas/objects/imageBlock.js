export default {
  name: 'imageBlock',
  title: 'Image',
  type: 'image',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      // description: 'For accessibility purposes',
      type: 'string',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }
  ]
}
