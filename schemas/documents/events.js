export default {
    name: 'eventsPage',
    title: 'イベント',
    type: 'document',
    fields: [
        {
            name: 'eventPageTitle',
            title: 'イベントページタイトル',
            type: 'localeString'
        },
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
            name: 'reviewTitle',
            title: '体験談のタイトル',
            type: 'localeString'
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
