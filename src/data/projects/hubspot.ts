import * as hubspotImgs from '../../media/projects/hubspot'
import { Project } from '../../utils/globalTypes'

export const hubspot: Project = {
  name: 'Translate.com for Hubspot',
  description: "Translate.com's enterprise-level Website Localizer service allows customers to purchase and maintain professional human translations for websites large and small. Translate.com decided to build an integration of their service for the popular CRM platform Hubspot. This integration required a new interface and I helped conduct UX research for this, design UI mockups, and then code a static front end ready to hand off to back end developers",
  approach: [
    'Conducted interviews with users and potential customers about their use of Hubspot and their translation requirements.',
    'Designed sketches and mockups for ordering and managing translations for Hubspot landing pages, social media, and blog posts.',
    'Developed designs into cross-browser front-end code using modularized, well-commented HTML, CSS, and JavaScript.',
  ],
  featuredImg: hubspotImgs.featured,
  galleryImgsSm: [
    hubspotImgs.oneSm,
    hubspotImgs.twoSm,
    hubspotImgs.threeSm,
    hubspotImgs.fourSm,
  ],
  galleryImgsLg: [
    hubspotImgs.oneLg,
    hubspotImgs.twoLg,
    hubspotImgs.threeLg,
    hubspotImgs.fourLg,
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
}
