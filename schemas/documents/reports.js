export default {
  name: 'reports',
  title: '活動報告書',
  type: 'document',
  fields: [
    {
      name: 'reports',
      title: '活動報告書',
      type: 'array',
      of: [{ type: 'report' }],
    },
  ],
}
