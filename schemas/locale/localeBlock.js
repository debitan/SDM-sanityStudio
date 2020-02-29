import supportedLanguages from './supportedLanguages'

export default {
name: 'localeBlock',
title: '日英文章',
type: 'object',
fieldsets: [
    {
    title: 'Translations',
    name: 'translations',
    options: {collapsible: true}
    }
],
fields: supportedLanguages.map(lang => (
    {
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{type: 'block'}, {type: 'captionImage'}, {type: 'youtube'}],
    fieldset: lang.isDefault ? null : 'translations'
    }
))
}
