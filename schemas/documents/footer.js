export default {
    name: 'footer',
    title: 'フッター',
    type: 'document',
    fields: [
        {
            name: 'donateImage',
            title: '寄付イメージ',
            type: 'captionImage'
        },
        {
            name: 'donateTitle',
            title: '寄付タイトル',
            type: 'localeString'
        },
        {
            name: 'donateBody',
            title: '寄付の言葉',
            type: 'localeBlock'
        },
        {
            name: 'mailingListTitle',
            title: 'メーリングリストタイトル',
            type: 'localeString'
        },
        {
            name: 'mailingListBody',
            title: 'メーリングリストの言葉',
            type: 'localeBlock'
        },
        {
            name: 'instagramLogo',
            title: 'インストグラムのロゴ',
            type: 'captionImage'
        },
        {
            name: 'facebookLogo',
            title: 'フェースブックのロゴ',
            type: 'captionImage'
        },
        {
            name: 'nipponFoundationLogo',
            title: '日本財団のロゴ',
            type: 'captionImage'
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo'
        }
    }
}
