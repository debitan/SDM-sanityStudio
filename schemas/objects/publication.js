export default {
    name: 'publication',
    title: '出版',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'localeString',
        },
        {
            name: 'image',
            title: 'イメージ',
            type: 'captionImage'
        },
        {
            name: 'description',
            title: '出版の文章',
            type: 'localeBlock'
        },
        {
            name: 'publicationDate',
            title: '発売日付',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        },
        {
            name: 'link',
            title: 'リンク',
            type: 'array',
            of: [{type: 'link'}]
        }
    ],
    preview: {
        select: {
            title: 'title.ja',
            media: 'image'
        }
    }
}
