export default {
    name: 'whoWeAre',
    title: '私たちについて',
    type: 'document',
    fields: [
        {
            name: 'sectionOneTitle',
            title: 'セクション１タイトル',
            type: 'localeString'
        },
        {
            name: 'sectionOneBackgroundImage',
            title: 'セクション１背景イメージ',
            type: 'captionImage'
        },
        {
            name: 'sectionOneBody',
            title: 'セクション１の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionTwoTitle',
            title: 'セクション２タイトル',
            type: 'localeString'
        },
        {
            name: 'sectionTwoBody',
            title: 'セクション２の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionThreeTitle',
            title: 'セクション３タイトル',
            type: 'localeString'
        },
        {
            name: 'sectionThreeImage',
            title: 'セクション３イメージ',
            type: 'captionImage'
        },
        {
            name: 'sectionThreeBody',
            title: 'セクション３の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionFourTitle',
            title: 'セクション４タイトル',
            type: 'localeString'
        },
        {
            name: 'sectionFourBackgroundImage',
            title: 'セクション４背景イメージ',
            type: 'captionImage'
        },
        {
            name: 'sectionFourBody',
            title: 'セクション４の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionFourBodyCont',
            title: 'セクション４の文章続',
            type: 'localeBlock'
        },
        {
            name: 'sectionFourImage',
            title: 'セクション４のイメージ',
            type: 'array',
            of: [{type: 'captionImage'}]
        },
        {
            name: 'sectionFiveTitle',
            title: 'セクション５のタイトル',
            type: 'localeString'
        },
        {
            name: 'sectionFiveBody',
            title: 'セクション５の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionFiveImage',
            title: 'セクション５のイメージ',
            type: 'captionImage'
        },
        {
            name: 'sectionSixTitle',
            title: 'セクション６タイトル',
            type: 'localeString'
        },
        {
            name: 'sectionSixBackgroundImage',
            title: 'セクション６背景イメージ',
            type: 'captionImage'
        },
        {
            name: 'sectionSixBody',
            title: 'セクション６の文章',
            type: 'localeBlock'
        },
        {
            name: 'sectionSixBodyCont',
            title: 'セクション６の文章続',
            type: 'localeBlock'
        },

    ],
    preview: {
        select: {
            title: 'title',
            media: 'sectionOneBackgroundImage'
        }
    }
}
