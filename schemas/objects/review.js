export default {
    name: 'review',
    title: '参加者　体験談',
    type: 'object',
    fields: [
        {
            name: 'reviewer',
            title: '参加者名',
            type: 'localeString'
        },
        {
            name: 'review',
            title: '体験談',
            type: 'localeString'
        }
    ],
    preview: {
        select: {
            title: 'reviewer'
        }
    }
}
