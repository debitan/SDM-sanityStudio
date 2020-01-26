export default {
    name: 'internalLink',
    title: 'サイト内リンク',
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
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'link.ja'
        }
    }
}
