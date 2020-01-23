export default {
    name: 'link',
    title: 'リンク',
    type: 'object',
    fields: [
        {
            name: 'link',
            title: 'リンク名',
            type: 'localeString',
        },
        {
            name: 'url',
            title: 'リンクURL',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'link.ja'
        }
    }
}
