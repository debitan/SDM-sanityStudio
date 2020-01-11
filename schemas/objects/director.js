export default {
    name: 'director',
    title: '理事',
    type: 'object',
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
            name: 'role',
            title: '肩書き',
            type: 'localeString'
        }
    ],
    preview: {
        select: {
            title: 'name.ja',
        }
    }
}
