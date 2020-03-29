export default {
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: '紹介',
      type: 'localeString',
    },
    {
      name: 'title',
      title: 'タイトル',
      type: 'localeString',
    },
    {
      name: 'resources',
      title: '事績',
      type: 'array',
      of: [{ type: 'resource' }],
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
