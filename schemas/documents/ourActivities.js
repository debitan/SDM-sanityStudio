export default {
  name: 'ourActivities',
  title: '私たちの活動',
  type: 'document',
  fields: [
    {
      name: 'activities',
      title: '活動',
      type: 'array',
      of: [{type: 'activity'}]
    },
    {
      name: 'canpanLink',
      title: 'CANPANリンク',
      type: 'localeBlock'
    }
  ],
}
