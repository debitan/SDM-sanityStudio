export default {
  name: 'report',
  title: '活動報告書',
  type: 'object',
  fields: [
    {
      name: 'report',
      title: '活動報告書',
      type: 'file',
    },
    {
      name: 'title',
      title: '活動報告書名',
      type: 'localeString',
    },
    {
      name: 'image',
      title: 'イメージ',
      type: 'captionImage',
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
