export default {
  name: 'requestASpeaker',
  title: 'Request a speaker',
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
    {
      name: 'button',
      title: 'ボタン',
      type: 'localeString',
    },
    {
      name: 'image',
      title: 'イメージ',
      type: 'array',
      of: [{ type: 'captionImage' }],
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
