import pageLink from "../objects/pageLink";

export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { "title": "Strong", "value": "strong" },
          { "title": "Emphasis", "value": "em" },
          { "title": "Underline", "value": "underline" },
        ],
        annotations: [
          {name: 'pageLink', title: 'Page Link', type: 'pageLink'},
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'url',
                type: 'url'
              }
            ]
          },

        ]
      }
    }
  ]
}