export default {
    name: 'events',
    title: 'イベント',
    type: 'document',
    fields: [
        {
            name: 'event',
            title: 'イベント',
            type: 'array',
            of: [{type: 'event'}]
        },
        {
            name: 'eventBody',
            title: 'イベント文章',
            type: 'localeBlock'
        },
        {
            name: 'review',
            title: '参加者　体験談',
            type: 'array',
            of: [{type: 'review'}]
        }
    ],
    preview: {
        select: {
            title: 'event.0.title.jp'
        }
    }
}
