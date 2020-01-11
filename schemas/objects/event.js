export default {
    name: 'event',
    title: 'イベント',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'localeString',
        },
        {
            name: 'startDate',
            title: 'スタート日付',
            type: 'date'
        },
        {
            name: 'date',
            title: '日付',
            type: 'localeString'
        },
        {
            name: 'image',
            title: 'イメージ',
            type: 'captionImage'
        },
        {
            name: 'file',
            title: 'ファイル',
            type: 'file'
        },
        {
            name: 'location',
            title: '会場',
            type: 'localeString'
        },
        {
            name: 'directions',
            title: '道順',
            type: 'localeString'
        },
        {
            name: 'price',
            title: '参加費',
            type: 'localeString'
        },
        {
            name: 'audience',
            title: '対象',
            type: 'localeString'
        },
        {
            name: 'capacity',
            title: '定員',
            type: 'localeString'
        },
        {
            name: 'contents',
            title: '内容',
            type: 'array',
            of: [{type: 'localeString'}]
        },
        {
            name: 'link',
            title: 'リンク',
            type: 'link'
        }
    ],
    preview: {
        select: {
            title: 'title.ja',
            media: 'image'
        }
    }
}
