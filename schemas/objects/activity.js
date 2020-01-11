export default {
    name: 'activity',
    title: '活動',
    type: 'object',
    fields: [
        {
            name: 'ourActivityImage',
            title: '活動イメージ',
            type: 'captionImage'
            },
            {
            name: 'ourActivity',
            title: '活動文章',
            type: 'localeString',
            }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'ourActivityImage1'
      }
    }
  }
