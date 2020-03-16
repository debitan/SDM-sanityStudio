export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'articles',
      title: '記事',
      type: 'array',
      of: [{ type: 'article' }],
    },
  ],
}
