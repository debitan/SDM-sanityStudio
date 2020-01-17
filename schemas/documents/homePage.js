export default {
  name: 'homePage',
  title: 'ホームページデータ',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'ヘッダー',
      type: 'localeBlock',
    },
    {
      name: 'headerImage',
      title: 'ヘッダーイメージ',
      type: 'captionImage'
    },
    {
      name: 'intro',
      title: 'トップ文章',
      type: 'localeBlock'
    },
    {
      name: 'cartoonImage',
      title: '漫画イメージ',
      type: 'captionImage'
    },
    {
      name: 'cartoonBody',
      title: '漫画の文章',
      type: 'localeString'
    },
    {
      name: 'skillTitle',
      title: 'スキルタイトル',
      type: 'localeString'
    },
    {
      name: 'skill',
      title: 'スキル',
      type: 'array',
      of: [{type: 'skill'}]
    },
    {
      name: 'eventCollab',
      title: 'イベントコラボ',
      type: 'localeBlock'
    },
    {
      name: 'supportedDecisionMakingTitle',
      title: '意思決定支援とはのタイトル',
      type: 'localeString'
    },
    {
      name: 'supportedDecisionMaking',
      title: '意思決定支援とは',
      type: 'localeBlock',
    },
    {
      name: 'supportedDecisionMakingImage',
      title: '意思決定支援とはのイメージ',
      type: 'captionImage'
    },
    {
      name: 'activityTitle',
      title: '私たちの活動のタイトル',
      type: 'localeString'
    },
    {
      name: 'aboutSDMTitle',
      title: 'SDM-Japanについてのタイトル',
      type: 'localeString'
    },
    {
      name: 'aboutSDM',
      title: 'SDM-Japanについて',
      type: 'localeBlock'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'ourActivityImage1'
    }
  }
}
