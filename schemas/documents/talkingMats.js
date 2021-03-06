export default {
    name: 'talkingMats',
    title: 'Talking Mats',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'localeString'
        },
        {
            name: 'subTitle',
            title: 'サブタイトル',
            type: 'localeString'
        },
        {
            name: 'body',
            title: '文章',
            type: 'localeBlock',
        },
    ],
    preview: {
        select: {
            title: 'title.ja'
        }
    }
}
