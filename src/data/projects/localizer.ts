import { Project } from '../../utils/globalTypes'
import * as localizerImgs from '../../media/projects/localizer'

export const localizer: Project = {
	name: 'Website Localizer Widget',
	description:
		"One of Translate.com's primary features is a lightweight but powerful widget that customers can put on their website enabling translation of its text. I designed and built a complete visual reskinning of the widget, to be featured on all Translate.com customers' websites.",
	approach: [
		'Redesigned widget with a more professional esthetic.',
		'Functional and pleasing animations.',
		'Developed with mobile-friendly CSS and cross-browser, light-weight vanilla JS.',
	],
	featuredImg: localizerImgs.featured,
	galleryImgsSm: [localizerImgs.one],
	tech: [
		{
			icon: ['fab', 'js'],
			label: 'JavaScript',
		},
	],
}
