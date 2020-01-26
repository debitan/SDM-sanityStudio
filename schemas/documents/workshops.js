export default {
    name: 'workshops',
    title: 'ワークショップ',
    type: 'document',
    fields: [
        {
            name: 'workshopTitle',
            title: 'ワークショップページタイトル',
            type: 'localeString'
        },
        {
            name: 'currentEvents',
            title: '開催予定イベントリンク',
            type: 'internalLink'
        },
        {
            name: 'requestSpeaker',
            title: '講師を依頼',
            type: 'internalLink'
        },
        {
            name: 'workshop',
            title: 'ワークショップ',
            type: 'array',
            of: [{type: 'workshop'}]
        }
    ],
    preview: {
        select: {
            title: 'workshop[0].title.ja',
            media: 'workshop[0].image[0]'
        }
    }
}
