import * as haneyImgs from '../media/projects/haney'
import * as mmufImgs from '../media/projects/mmuf'
import * as localizerImgs from '../media/projects/localizer'
import * as hubspotImgs from '../media/projects/hubspot'
import * as musicImgs from '../media/projects/music'
import * as winterlightImgs from '../media/projects/winterlight'
import { Projects } from '../utils/globalTypes'

const projects: Projects = {
  haney: {
    name: 'Portfolio for Bryan Haney',
    description: 'Erudite commune consecrate re tied. Cum deselect deserter ad, duo ex. Erato dolor em omit tam quo no, per leg ere argument um re. Romanesque acclimates investiture. Porto serenity est it. Nev regions detract ex. Quot detract misstates in per. Eel ecus linguists efficient ea, veil sale disciple at.',
    approach: ['yeah', 'yeah2', 'yeah3'],
    featuredImg: haneyImgs.featured,
    galleryImgs: [haneyImgs.one, haneyImgs.two, haneyImgs.three],
    url: 'http://www.bryanhaney.com',
    tech: [
      {
        icon: ['fab', 'wordpress'],
        label: 'WordPress',
      }, {
        icon: ['fab', 'js'],
        label: 'JavaScript, jQuery',
      },
    ],
  },
  mmuf: {
    name: 'Mellon Mays Undergraduate Fellowship',
    description:
      'Complete website redesign for the University of Chicago branch of the Mellon Mays Undergraduate Fellowship. The fellowship mentors and supports highly qualified undergraduate students, preparing them to pursue a PhD in fields where diversity has not been historically present.',
    approach: [
      'Intensive content inventory and information architecture planning and consulting',
      'High-fidelity site mockups, refined with client',
      'Developed responsive custom WordPress theme based on designs',
    ],
    featuredImg: mmufImgs.featured,
    galleryImgs: [mmufImgs.one, mmufImgs.two, mmufImgs.three],
    url: 'https://mellonmays.uchicago.edu',
  },
  music: {
    name: 'UC Music Graduate Curriculum Platform',
    description:
      "The University of Chicago's Department of Music has an unusually intricate curriculum for their PhD programs, with lots of varied tracks and options that students need to know about. Previously it had existed as one giant Word document that was cumbersome and hard to understand for the students, arduous to maintain and update for the curriculum committee, and lacked any sort of reliable version control. They knew they wanted to move to some sort of online platform for it going forward.",
    approach: [
      'Interviews and focus groups with stakeholders',
      'Surveyed available tech solutions, presented options to curriculum committee',
      'Iterated on the design based on feedback from users and custom event fires in Google Analytics',
    ],
    featuredImg: musicImgs.featured,
    galleryImgs: [musicImgs.one, musicImgs.two, musicImgs.three],
    url: 'https://lucian.uchicago.edu/blogs/musiccurriculum/',
  },
  hubsput: {
    name: 'Translate.com for Hubspot',
    description:
      "Translate.com's enterprise-level Website Localizer service allows customers to order and maintain professional human translations for their website. Translate wanted to build a custom integration of Website Localizer for Hubspot, one of the world's most popular CRM platforms.",
    approach: [
      'Conducted interviews with users and potential customers about their use of Hubspot and their potential translation needs, uncovering key features and problems we can solve through the design our new product.',
      'Designed sketches and mockups for a customized web app for ordering and managing translations for Hubspot landing pages, social media, and blog posts.',
      'Developed designs into cross-browser web app front-end using modularized, well-commented HTML, CSS, and JavaScript.',
    ],
    featuredImg: hubspotImgs.featured,
    galleryImgs: [
      hubspotImgs.one,
      hubspotImgs.two,
      hubspotImgs.three,
      hubspotImgs.four,
    ],
  },
  winterlight: {
    name: 'Winter Light',
    description:
      'Winter Light is an award-winning modern-day revisionist Western created by writer/director Julian Higgins. The film is an adaptation of a story by James Lee Burke, set in the frozen wilderness of Montana. As the film garnered more attention from festivals and awards, even being shortlisted for an Oscar nod, I was hired to quickly create a website to showcase the film’s trailer, press coverage, and its cast and crew.',
    approach: [
      "Design, developed custom WordPress theme: worked closely with the film's director to create aesthetics that matched film's tone while still providing new creative energy and a unique look and feel",
      'Dynamic landing page with prominent call-to-action bringing users to trailer page',
      'Worked under tight deadline (approx. two weeks from beginning to end of project)',
    ],
    featuredImg: winterlightImgs.featured,
    galleryImgs: [winterlightImgs.one, winterlightImgs.two, winterlightImgs.three],
    url: 'http://www.winterlightfilm.com',
  },
  localizer: {
    name: 'Website Localizer Widget',
    description:
      "One of Translate.com's primary features is a lightweight but powerful widget that customers can put on their website enabling translation of its text. I designed and built a complete visual reskinning of the widget, to be featured on all Translate.com customers' websites",
    approach: [
      'Redesigned widget with a more professional esthetic',
      'Functional and pleasing animations',
      'Developed with mobile-friendly CSS and vanilla JS',
    ],
    featuredImg: localizerImgs.featured,
    galleryImgs: [localizerImgs.one],
  },
}

export default projects
