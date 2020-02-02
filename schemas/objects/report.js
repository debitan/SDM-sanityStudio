export default {
    name: 'report',
    title: 'レポート',
    type: 'object',
    fields: [
        {
            name: 'report',
            title: 'レポート',
            type: 'file'
        },
        {
            name: 'title',
            title: 'レポート名',
            type: 'localeString'
        },
        {
            name: 'image',
            title: 'イメージ',
            type: 'captionImage'
        }
    ],
    preview: {
        select: {
            title: 'title.ja'
        }
    }
}
