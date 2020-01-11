export default {
    name: 'team',
    title: 'チーム',
    type: 'document',
    fields: [
        {
            name: 'profiles',
            title: 'プロフィール',
            type: 'array',
            of: [{type: 'profile'}]
        },
        {
            name: 'directors',
            title: '理事',
            type: 'array',
            of: [{type: 'director'}]
        },
        {
            name: 'teamIntro',
            title: 'チーム文章',
            type: 'localeBlock'
        },
        {
            name: 'teamPhoto',
            title: 'チーム写真',
            type: 'captionImage'
        },
        {
            name: 'teamBody',
            title: 'チーム文章続',
            type: 'localeBlock'
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'teamPhoto'
        }
    }
}
