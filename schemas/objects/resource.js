export default {
  name: 'resource',
  title: '事績',
  type: 'document',
  fields: [
    {
      name: 'publisher',
      title: '出版社',
      type: 'localeString',
    },
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
    },
    {
      name: 'link',
      title: 'リンクURL',
      type: 'url',
    },
    {
      name: 'date',
      title: '日付',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    },
    {
      name: 'video',
      title: '動画',
      type: 'youtube',
    },
    {
      name: 'description',
      title: '出版の文章',
      type: 'localeBlock',
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
      media: 'youtube',
    },
  },
}
