import * as haneyImgs from '../../media/projects/haney'
import { Project } from '../../utils/globalTypes'

export const haney: Project = {
  name: 'Portfolio site for producer Bryan Haney',
  description: 'Creative Senior Producer Bryan Haney wanted a straightforward but exciting website to showcase his high-profile work. I built him a custom WordPress theme that allows him to easily manage his portfolio himself and features a memorable and interesting take on the horizontal accordion design pattern.',
  approach: [
    'Custom-built, mobile-friendly portfolio theme in easy-to-use WordPress.',
    'Compelling splash page featuring  horizontal accordion showcase with "Ken Burns-style" animation.',
    'Satisfying flutter-in animation of  elements throughout site using GreenSock Animation Platform.',
  ],
  featuredImg: haneyImgs.featured,
  galleryImgsSm: [
    haneyImgs.oneSm,
    haneyImgs.twoSm,
    haneyImgs.threeSm,
  ],
  galleryImgsLg: [
    haneyImgs.oneLg,
    haneyImgs.twoLg,
    haneyImgs.threeLg,
  ],
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
}
