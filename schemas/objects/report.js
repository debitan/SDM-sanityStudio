export default {
    name: 'report',
    title: 'リポート',
    type: 'object',
    fields: [
        {
            name: 'report',
            title: 'リポート',
            type: 'file',
            fields: [
                {
                    name: 'title',
                    title: 'リポート名',
                    type: 'localeString'
                }
            ]
        },
        {
            name: 'image',
            title: 'イメージ',
            type: 'captionImage'
        }
    ],
    preview: {
        select: {
            title: 'report.title.ja'
        }
    }
}
