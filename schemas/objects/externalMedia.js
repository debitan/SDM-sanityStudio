export default {
  name: 'externalMedia',
  title: '外部メディア',
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
      name: 'image',
      title: 'イメージ',
      type: 'captionImage',
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
      media: 'image',
    },
  },
}
