import supportedLanguages from './supportedLanguages'

export default {
  name: 'localeBlock',
  title: '日英文章',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'H6', value: 'h6' },
          { title: 'Quote', value: 'blockquote' },
        ],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Underline', value: 'underline' },
            { title: 'Strikethrough', value: 'strikethrough' },
            {
              title: 'Left align',
              value: 'leftAlign',
              blockEditor: { icon: () => 'L' },
            },
            {
              title: 'Blue',
              value: 'blue',
              blockEditor: { icon: () => 'Blue' },
            },
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                },
                {
                  title: '新タブに開く',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean',
                },
              ],
            },
          ],
        },
      },
      { type: 'captionImage' },
      { type: 'youtube' },
      { type: 'svg' },
    ],
    fieldset: lang.isDefault ? null : 'translations',
  })),
}
