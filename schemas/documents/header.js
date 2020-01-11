export default {
    name: 'header',
    title: 'ヘッダー',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'ブランドロゴ',
            type: 'captionImage'
        },
        {
            name: 'phone',
            title: '電話番号',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo'
        }
    }
}
