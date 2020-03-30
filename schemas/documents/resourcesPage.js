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
      name: 'videoResources',
      title: '動画事績',
      type: 'array',
      of: [{ type: 'resource' }],
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
