export default {
    name: 'skill',
    title: 'スキル',
    type: 'object',
    fields: [
        {
            name: 'skillImage',
            title: 'スキルのイメージ',
            type: 'captionImage'
        },
        {
            name: 'skill',
            title: 'スキル',
            type: 'localeString'
        }
    ],
    preview: {
        select: {
            title: 'skill.ja'
        }
    }
}
