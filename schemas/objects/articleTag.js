export default {
  name: 'articleTag',
  title: 'Article Tag',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'tag[0]',
    },
  },
}
