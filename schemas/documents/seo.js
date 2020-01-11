export default {
    name: 'seo',
    type: 'document',
    title: 'SEO',
    __experimental_actions: [
      'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
        name: 'description',
        type: 'text',
        title: 'このサイトについての言葉',
        description: 'SMSとSEOの為'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'キーワード',
        description: 'SEOの為',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
    ]
  }
