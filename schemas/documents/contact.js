export default {
  name: 'contact',
  title: '問い合わせ',
  type: 'document',
  fields: [
    {
      name: 'contactBody',
      title: '問い合わせ文章',
      type: 'localeBlock',
    },
    {
      name: 'follow',
      title: 'フォロー文章',
      type: 'localeString',
    },
    {
      name: 'instagramUrl',
      title: 'インストグラムのリンク',
      type: 'url',
    },
    {
      name: 'facebookUrl',
      title: 'フェイスブックのリンク',
      type: 'url',
    },
    {
      name: 'twitterUrl',
      title: 'ツイッターのリンク',
      type: 'url',
    },
    {
      name: 'instagramLogo',
      title: 'インストグラムのロゴ',
      type: 'captionImage',
    },
    {
      name: 'facebookLogo',
      title: 'フェイスブックのロゴ',
      type: 'captionImage',
    },
    {
      name: 'twitterLogo',
      title: 'ツイッターのロゴ',
      type: 'captionImage',
    },
  ],
}
