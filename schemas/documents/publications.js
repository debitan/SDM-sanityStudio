export default {
    name: 'publications',
    title: '出版',
    type: 'document',
    fieldsets: [
        {name: 'publications', title: '出版'},
        {name: 'media', title: 'メディア'}
    ],
    fields: [
        {
            name: 'publicationsTitle',
            title: '出版タイトル',
            type: 'localeString'
        },
        {
            name: 'publications',
            title: '出版',
            type: 'array',
            of: [{type: 'printedMedia'}],
            fieldset: 'publications'
        },
        {
            name: 'mediaTitle',
            title: 'メデイアタイトル',
            type: 'localeString'
        },
        {
            name: 'internalMedia',
            title: '内部メディア',
            type: 'array',
            of: [{type: 'internalMedia'}],
            fieldset: 'media'
        },
        {
            name: 'externalMedia',
            title: '外部メディア',
            type: 'array',
            of: [{type: 'externalMedia'}],
            fieldset: 'media'
        }
    ]
}
