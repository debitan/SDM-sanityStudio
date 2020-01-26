export default {
    name: 'event',
    title: 'イベント',
    type: 'document',
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
            name: 'locationTitle',
            title: '会場のタイトル',
            type: 'localeString'
        },
        {
            name: 'location',
            title: '会場',
            type: 'localeBlock'
        },
        {
            name: 'priceTitle',
            title: '参加費タイトル',
            type: 'localeString'
        },
        {
            name: 'price',
            title: '参加費',
            type: 'localeBlock'
        },
        {
            name: 'audienceTitle',
            title: '対象のタイトル',
            type: 'localeString'
        },
        {
            name: 'audience',
            title: '対象',
            type: 'localeBlock'
        },
        {
            name: 'capacityTitle',
            title: '定員のタイトル',
            type: 'localeString'
        },
        {
            name: 'capacity',
            title: '定員',
            type: 'localeBlock'
        },
        {
            name: 'contentsTitle',
            title: '内容のタイトル',
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
