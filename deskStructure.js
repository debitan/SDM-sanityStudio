import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('SEO')
        .child(S.editor().schemaType('seo').documentId('seo')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor().schemaType('homePage').documentId('homePage')
                ),
              S.listItem()
                .title('Header')
                .child(S.editor().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .child(S.editor().schemaType('footer').documentId('footer')),
              S.listItem()
                .title('Our activities')
                .child(
                  S.editor()
                    .schemaType('ourActivities')
                    .documentId('ourActivities')
                ),
              S.listItem()
                .title('Who we are')
                .child(
                  S.editor().schemaType('whoWeAre').documentId('whoWeAre')
                ),
              S.listItem()
                .title('Team')
                .child(S.editor().schemaType('team').documentId('team')),
              S.listItem()
                .title('Report')
                .child(S.editor().schemaType('reports').documentId('reports')),
              S.listItem()
                .title('Publications')
                .child(
                  S.editor()
                    .schemaType('publications')
                    .documentId('publications')
                ),
              S.listItem()
                .title('Workshops')
                .child(
                  S.editor().schemaType('workshops').documentId('workshops')
                ),
              S.listItem()
                .title('Events')
                .child(
                  S.editor().schemaType('eventsPage').documentId('eventsPage')
                ),
              S.listItem()
                .title('Contact')
                .child(S.editor().schemaType('contact').documentId('contact')),
              S.listItem()
                .title('Talking Mats')
                .child(
                  S.editor().schemaType('talkingMats').documentId('talkingMats')
                ),
              S.listItem()
                .title('News')
                .child(S.editor().schemaType('news').documentId('news')),
              S.listItem()
                .title('Request a speaker')
                .child(
                  S.editor()
                    .schemaType('requestASpeaker')
                    .documentId('requestASpeaker')
                ),
              S.listItem()
                .title('SNS')
                .child(S.editor().schemaType('sns').documentId('sns')),
              S.listItem()
                .title('Become a member')
                .child(
                  S.editor()
                    .schemaType('becomeAMember')
                    .documentId('becomeAMember')
                ),
              S.listItem()
                .title('Resources')
                .child(
                  S.editor()
                    .schemaType('resourcesPage')
                    .documentId('resourcesPage')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItems =>
          ![
            'seo',
            'homePage',
            'header',
            'footer',
            'ourActivities',
            'whoWeAre',
            'team',
            'reports',
            'publications',
            'workshops',
            'event',
            'profile',
            'printedMedia',
            'externalMedia',
            'internalMedia',
            'contact',
            'eventsPage',
            'talkingMats',
            'news',
            'article',
            'articleTag',
            'requestASpeaker',
            'sns',
            'becomeAMember',
            'resourcesPage',
          ].includes(listItems.getId())
      ),
    ])
