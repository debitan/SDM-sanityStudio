export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
    },
    {
      name: 'tag',
      title: 'タグ',
      type: 'localeString',
    },
    {
      name: 'date',
      title: '日付け',
      type: 'date',
    },
    {
      name: 'headerImage',
      title: 'ヘッダーイメージ',
      type: 'captionImage',
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
