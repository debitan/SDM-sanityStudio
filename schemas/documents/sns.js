export default {
  name: 'sns',
  title: 'SNS',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
    },
    {
      name: 'mailingList',
      title: 'メーリングリスト文章',
      type: 'localeBlock',
    },
    {
      name: 'sns',
      title: 'SNS',
      type: 'localeBlock',
    },
    {
      name: 'facebookImage',
      title: 'フェイスブックのイメージ',
      type: 'captionImage',
    },
    {
      name: 'instagramImage',
      title: 'インストグラムのイメージ',
      type: 'captionImage',
    },
    {
      name: 'facebookLink',
      title: 'フェイスブックリンク',
      type: 'image',
    },
    {
      name: 'instagramLink',
      title: 'インストグラムリンク',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
      media: 'facebookImage',
    },
  },
}
