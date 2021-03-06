export default {
    name: 'workshop',
    title: 'ワークショプ',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'localeString',
        },
        {
            name: 'subTitle',
            title: 'サブタイトル',
            type: 'localeString',
        },
        {
            name: 'tag',
            title: 'タグ',
            type: 'array',
            of: [{type: 'tag'}]
        },
        {
            name: 'audienceTitle',
            title: '対象タイトル',
            type: 'localeString',
        },
        {
            name: 'audience',
            title: '対象',
            type: 'localeString',
        },
        {
            name: 'contents',
            title: '内容',
            type: 'array',
            of: [{type: 'localeString'}]
        },
        {
            name: 'image',
            title: 'イメージ',
            type: 'array',
            of: [{type: 'captionImage'}]
        }
    ],
    preview: {
        select: {
            title: 'title.ja',
            media: 'image[0]'
        }
    }
}
