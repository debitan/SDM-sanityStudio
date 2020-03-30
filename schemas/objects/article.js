export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
      validation: rule => rule.required(),
    },
    {
      name: 'tag',
      title: 'カテゴリー',
      type: 'localeString',
      validation: rule => rule.required(),
    },
    {
      name: 'date',
      title: '日付け',
      type: 'date',
      validation: rule => rule.required(),
    },
    {
      name: 'headerImage',
      title: 'ヘッダーイメージ',
      type: 'captionImage',
      validation: rule => rule.required(),
    },
    {
      name: 'body',
      title: '文章',
      type: 'localeBlock',
      validation: rule => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
