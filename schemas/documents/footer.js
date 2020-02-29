export default {
    name: 'footer',
    title: 'フッター',
    type: 'document',
    fields: [
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
        }
    ],
    preview: {
        select: {
            title: 'donateTitle.ja'
        }
    }
}
