// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import seo from './documents/seo'
import homePage from './documents/homePage'
import header from './documents/header'
import footer from './documents/footer'
import ourActivities from './documents/ourActivities'
import whoWeAre from './documents/whoAreWe'
import team from './documents/team'
import reports from './documents/reports'
import publications from './documents/publications'
import workshops from './documents/workshops'
import eventsPage from './documents/eventsPage'
import contact from './documents/contact'
import talkingMats from './documents/talkingMats'
import news from './documents/news'
import requestASpeaker from './documents/requestASpeaker'
import sns from './documents/sns'
import becomeAMember from './documents/becomeAMember'
import resourcesPage from './documents/resourcesPage'
import pft from './documents/pft'
import video from './documents/video'
import whatWeDo from './documents/whatWeDo'

// object schemas
import localeBlock from './locale/localeBlock'
import localeString from './locale/localeString'
import profile from './objects/profile'
import director from './objects/director'
import report from './objects/report'
import link from './objects/link'
import printedMedia from './objects/printedMedia'
import internalMedia from './objects/internalMedia'
import externalMedia from './objects/externalMedia'
import workshop from './objects/workshop'
import event from './objects/event'
import review from './objects/review'
import activity from './objects/activity'
import captionImage from './objects/captionImage'
import tag from './objects/tag'
import skill from './objects/skill'
import internalLink from './objects/internalLink'
import youtube from './objects/youtube'
import article from './objects/article'
import articleTag from './objects/articleTag'
import svg from './objects/svg'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    seo,
    localeBlock,
    localeString,
    homePage,
    header,
    footer,
    ourActivities,
    whoWeAre,
    profile,
    team,
    director,
    reports,
    report,
    link,
    printedMedia,
    publications,
    internalMedia,
    externalMedia,
    workshop,
    workshops,
    event,
    eventsPage,
    review,
    activity,
    captionImage,
    tag,
    skill,
    contact,
    internalLink,
    talkingMats,
    youtube,
    news,
    article,
    articleTag,
    requestASpeaker,
    sns,
    becomeAMember,
    svg,
    resourcesPage,
    pft,
    video,
    whatWeDo,
  ]),
})
