export default {
    name: 'profile',
    title: 'プロフィール',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: '名前',
            type: 'localeString'
        },
        {
            name: 'furigana',
            title: 'フリガナ',
            type: 'string'
        },
        {
            name: 'photo',
            title: '写真',
            type: 'captionImage'
        },
        {
            name: 'role',
            title: '肩書き',
            type: 'localeString'
        },
        {
            name: 'dayJob',
            title: '職業',
            type: 'localeString'
        },
        {
            name: 'duties',
            title: '役割',
            type: 'localeBlock'
        },
        {
            name: 'aboutSDM',
            title: 'SDMについて一言',
            type: 'localeBlock'
        },
    ],
    preview: {
        select: {
            title: 'name.ja',
            media: 'photo'
        }
    }
}
