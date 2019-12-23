import * as winterlightImgs from '../../media/projects/winterlight'
import { Project } from '../../utils/globalTypes'

export const winterlight: Project = {
  name: 'Winter Light',
  description: 'Winter Light is an award-winning modern-day revisionist Western short film created by writer/director Julian Higgins. The film is an adaptation of a story by James Lee Burke, set in the frozen wilderness of Montana. It garnered much attention from festivals and awards, so the director quickly need a website to showcase the film’s trailer, press coverage, and its cast and crew.',
  approach: [
    "Worked closely with the film's director to create aesthetics that matched the film's tone while still providing a unique look and feel.",
    'Built a custom WordPress theme that was responsive, cross-browser, and fast.',
    'Theme features dynamic landing page with prominent call-to-action to bring users to trailer page.',
  ],
  featuredImg: winterlightImgs.featured,
  galleryImgsSm: [
    winterlightImgs.oneSm,
    winterlightImgs.twoSm,
    winterlightImgs.threeSm,
  ],
  galleryImgsLg: [
    winterlightImgs.oneLg,
    winterlightImgs.twoLg,
    winterlightImgs.threeLg,
  ],
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
}
