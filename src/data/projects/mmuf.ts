import * as mmufImgs from '../../media/projects/mmuf'
import { Project } from '../../utils/globalTypes'

export const mmuf: Project = {
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
  galleryImgsSm: [
    mmufImgs.oneSm,
    mmufImgs.twoSm,
    mmufImgs.threeSm,
  ],
  galleryImgsLg: [
    mmufImgs.oneLg,
    mmufImgs.twoLg,
    mmufImgs.threeLg,
  ],
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
}
