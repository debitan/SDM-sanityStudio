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
      name: 'imageResources',
      title: 'イメージ事績',
      type: 'array',
      of: [{ type: 'externalMedia' }],
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
    },
  },
}
