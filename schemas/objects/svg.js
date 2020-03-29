export default {
  name: 'svg',
  title: 'SVG',
  type: 'object',
  fields: [
    {
      name: 'svg',
      title: 'SVG',
      type: 'image',
    },
    {
      name: 'caption',
      title: '代替テクスト',
      type: 'localeString',
      validation: rule => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'caption.ja',
      media: 'svg',
    },
  },
}
