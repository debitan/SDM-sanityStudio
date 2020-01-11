export default {
    name: 'workshops',
    title: 'ワークショップ',
    type: 'document',
    fields: [
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
