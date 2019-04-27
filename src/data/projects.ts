import * as haneyImgs from '../media/projects/haney'
import * as mmufImgs from '../media/projects/mmuf'
import * as localizerImgs from '../media/projects/localizer'
import * as hubspotImgs from '../media/projects/hubspot'
import * as musicImgs from '../media/projects/music'
import * as winterlightImgs from '../media/projects/winterlight'
import { Projects } from '../utils/globalTypes'

const projects: Projects = {
  haney: {
    name: 'Portfolio site for producer Bryan Haney',
    description: 'Creative Senior Producer Bryan Haney wanted a straightforward but exciting website to showcase his high-profile work. I built him a custom WordPress theme that allows him to easily manage his portfolio himself and features a memorable and interesting take on the horizontal accordian design pattern.',
    approach: [
      'Custom-built, mobile-friendly portfolio theme in easy-to-use WordPress.',
      'Compelling splash page featuring  horizontal accordian showcase with "Ken Burns-style" animation.',
      'Satisfying flutter-in animation of  elements throughout site using GreenSock Animation Platform.',
    ],
    featuredImg: haneyImgs.featured,
    galleryImgs: [haneyImgs.one, haneyImgs.two, haneyImgs.three],
    url: 'http://www.bryanhaney.com',
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery, GreenSock Animation Platform',
      }, {
        icon: ['fab', 'gulp'],
        label: 'Gulp',
      }, {
        icon: ['fab', 'wordpress'],
        label: 'WordPress',
      }, {
        icon: ['fab', 'sketch'],
        label: 'Sketch',
      },
    ],
  },
  mmuf: {
    name: 'Mellon Mays Undergraduate Fellowship',
    description: 'The University of Chicago branch of the Mellon Mays Undergraduate Fellowship mentors and supports highly qualified undergraduate students, preparing them to pursue a PhD in fields where diversity has not been historically present. A complete website redesign was needed, adding new content as well as preserving many existing pages of copy. They also wanted to create a new design language for the site, seeking a new logo and color scheme.',
    approach: [
      'Intensive content inventory and information architecture planning and consulting.',
      'Created new logo and design language based on historical inspirations of the Fellowship.',
      'Designed high-fidelity site mockups with many rounds of feedback and collaboration with client.',
      'Developed from scratch a beautiful and original responsive WordPress theme.',
      'Theme supports features such as events calendar, staff profile custom post types, blog-style news feed.',
    ],
    featuredImg: mmufImgs.featured,
    galleryImgs: [mmufImgs.one, mmufImgs.two, mmufImgs.three],
    url: 'https://mellonmays.uchicago.edu',
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery',
      }, {
        icon: ['fab', 'wordpress'],
        label: 'WordPress',
      }, {
        icon: ['fab', 'sketch'],
        label: 'Sketch',
      },
    ],
  },
  music: {
    name: 'UC Music Graduate Curriculum Platform',
    description: "The University of Chicago's Department of Music has an unusually intricate curriculum for their PhD programs, with lots of varied tracks and options that students need to know about. Previously it had existed as one giant Word document that was cumbersome and hard to understand for the students, arduous to maintain and update for the curriculum committee, and lacked any sort of reliable version control. I worked with the curriculum committee to create a completely new platform for this complex document.",
    approach: [
      'Interviewed and ran focus groups with department professors, students, and staff.',
      'Surveyed available tech solutions, presented options to curriculum committee.',
      'Created new and highly customized WordPress theme with JavaScript features such as table of contents built on-the-fly at page load, a page "compass" to show the user where they are in the doc at all times, and robust URL hash changes triggered by both scrolling and by anchor links, allowing for natural use of browser\'s Back button and for deep linking to specific sections.',
      'Iterated on the design based on feedback from users and custom event fires in Google Analytics.',
    ],
    featuredImg: musicImgs.featured,
    galleryImgs: [musicImgs.one, musicImgs.two, musicImgs.three],
    url: 'https://lucian.uchicago.edu/blogs/musiccurriculum/',
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery',
      }, {
        icon: ['fab', 'wordpress'],
        label: 'WordPress',
      }, {
        icon: ['fab', 'adobe'],
        label: 'Photoshop',
      },
    ],
  },
  hubsput: {
    name: 'Translate.com for Hubspot',
    description: "Translate.com's enterprise-level Website Localizer service allows customers to purchase and maintain professional human translations for websites large and small. Translate.com decided to build an integration of their service for the popular CRM platform Hubspot. This integration required a new interface and I helped conduct UX research for this, design UI mockups, and then code a static front end ready to hand off to back end developers",
    approach: [
      'Conducted interviews with users and potential customers about their use of Hubspot and their translation requirements.',
      'Designed sketches and mockups for ordering and managing translations for Hubspot landing pages, social media, and blog posts.',
      'Developed designs into cross-browser front-end code using modularized, well-commented HTML, CSS, and JavaScript.',
    ],
    featuredImg: hubspotImgs.featured,
    galleryImgs: [
      hubspotImgs.one,
      hubspotImgs.two,
      hubspotImgs.three,
      hubspotImgs.four,
    ],
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery',
      }, {
        icon: ['fab', 'sketch'],
        label: 'Sketch',
      },
    ],
  },
  winterlight: {
    name: 'Winter Light',
    description: 'Winter Light is an award-winning modern-day revisionist Western short film created by writer/director Julian Higgins. The film is an adaptation of a story by James Lee Burke, set in the frozen wilderness of Montana. It garnered much attention from festivals and awards, so the director quickly need a website to showcase the film’s trailer, press coverage, and its cast and crew.',
    approach: [
      "Worked closely with the film's director to create aesthetics that matched the film's tone while still providing a unique look and feel.",
      'Built a custom WordPress theme that was responsive, cross-browser, and fast.',
      'Theme features dynamic landing page with prominent call-to-action to bring users to trailer page.',
    ],
    featuredImg: winterlightImgs.featured,
    galleryImgs: [winterlightImgs.one, winterlightImgs.two, winterlightImgs.three],
    url: 'http://www.winterlightfilm.com',
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery',
      }, {
        icon: ['fab', 'wordpress'],
        label: 'WordPress',
      }, {
        icon: ['fab', 'adobe'],
        label: 'Photoshop',
      },
    ],
  },
  localizer: {
    name: 'Website Localizer Widget',
    description: "One of Translate.com's primary features is a lightweight but powerful widget that customers can put on their website enabling translation of its text. I designed and built a complete visual reskinning of the widget, to be featured on all Translate.com customers' websites.",
    approach: [
      'Redesigned widget with a more professional esthetic.',
      'Functional and pleasing animations.',
      'Developed with mobile-friendly CSS and cross-browser, light-weight vanilla JS.',
    ],
    featuredImg: localizerImgs.featured,
    galleryImgs: [localizerImgs.one],
    tech: [
      {
        icon: ['fab', 'js'],
        label: 'JavaScript',
      },
    ],
  },
}

export default projects
