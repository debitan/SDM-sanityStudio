export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
    },
    {
      name: 'body',
      title: '文章',
      type: 'localeBlock',
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
