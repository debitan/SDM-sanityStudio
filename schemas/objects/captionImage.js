export default {
    name: 'captionImage',
    title: 'イメージ',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'イメージ',
            type: 'image',
            fields: [
                {
                    name: 'caption',
                    title: 'キャプション',
                    type: 'localeString',
                    validation: rule => rule.required()
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'image.caption',
            media: 'image'
        }
    }
}
