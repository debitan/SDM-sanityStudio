export default {
    name: 'captionImage',
    title: 'イメージ',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'イメージ',
            type: 'image'
        },
        {
            name: 'caption',
            title: '代替テクスト',
            type: 'localeString',
            validation: rule => rule.required()
        }
    ],
    preview: {
        select: {
            title: 'caption.ja',
            media: 'image'
        }
    }
}
