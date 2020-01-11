export default {
    name: 'reports',
    title: 'リポート',
    type: 'document',
    fields: [
        {
            name: 'reports',
            title: 'リポート',
            type: 'array',
            of: [{type: 'report'}]
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'teamPhoto'
        }
    }
}
