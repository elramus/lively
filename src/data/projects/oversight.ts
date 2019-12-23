import { Project } from '../../utils/globalTypes'
import tsLogo from '../../media/tools/typescript.png'
import * as oversightImgs from '../../media/projects/oversight'

export const oversight: Project = {
  name: 'Police Oversight Agencies',
  description: 'A University of Chicago Law School professor conducted an internet survey of the government bodies responsible for civilian oversight of municipal law enforcement entities in the top 100 U.S. jurisdictions based on population. We built a website to make the data accessible and explorable through data visualization and tables.',
  approach: [
    'Create interactive map of the U.S. using D3.js.',
    'Searchable and sortable table of raw agency data.',
    'Boost SEO using Next.js\'s server-side rendering capabilities.',
  ],
  featuredImg: oversightImgs.featured,
  galleryImgsSm: [
    oversightImgs.oneSm,
    oversightImgs.twoSm,
    oversightImgs.threeSm,
    oversightImgs.fourSm,
  ],
  galleryImgsLg: [
    oversightImgs.oneLg,
    oversightImgs.twoLg,
    oversightImgs.threeLg,
    oversightImgs.fourLg,
  ],
  url: 'https://policeoversight.uchicago.edu',
  github: 'https://github.com/chicago-law/police-oversight-agencies',
  tech: [
    {
      icon: ['fab', 'react'],
      label: 'React, Next.js',
    }, {
      img: tsLogo,
      label: 'TypeScript',
    }, {
      icon: ['fab', 'js'],
      label: 'D3.js',
    }, {
      icon: ['fab', 'sketch'],
      label: 'Sketch',
    },
  ],
}
