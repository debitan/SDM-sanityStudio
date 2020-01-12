export default {
    name: 'tag',
    title: 'タグ',
    type: 'object',
    fields: [
        {
            name: 'tag',
            title: 'タグ',
            type: 'localeString',
        },
        {
            name: 'colour',
            title: '色',
            type: 'color',
        },
    ],
    preview: {
        select: {
            title: 'tag.ja',
            media: 'colour'
        }
    }
}
