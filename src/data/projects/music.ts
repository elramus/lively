import * as musicImgs from '../../media/projects/music'
import { Project } from '../../utils/globalTypes'

export const music: Project = {
	name: 'UC Music Graduate Curriculum Platform',
	description:
		"The University of Chicago's Department of Music has an unusually intricate curriculum for their PhD programs, with lots of varied tracks and options that students need to know about. Previously it had existed as one giant Word document that was cumbersome and hard to understand for the students, arduous to maintain and update for the curriculum committee, and lacked any sort of reliable version control. I worked with the curriculum committee to create a completely new platform for this complex document.",
	approach: [
		'Interviewed and ran focus groups with department professors, students, and staff.',
		'Surveyed available tech solutions, presented options to curriculum committee.',
		'Created new and highly customized WordPress theme with JavaScript features such as table of contents built on-the-fly at page load, a page "compass" to show the user where they are in the doc at all times, and robust URL hash changes triggered by both scrolling and by anchor links, allowing for natural use of browser\'s Back button and for deep linking to specific sections.',
		'Iterated on the design based on feedback from users and custom event fires in Google Analytics.',
	],
	featuredImg: musicImgs.featured,
	galleryImgsSm: [musicImgs.oneSm, musicImgs.twoSm, musicImgs.threeSm],
	galleryImgsLg: [musicImgs.oneLg, musicImgs.twoLg, musicImgs.threeLg],
	url: 'https://lucian.uchicago.edu/blogs/musiccurriculum/',
	tech: [
		{
			icon: ['fab', 'js'],
			label: 'JavaScript, jQuery',
		},
		{
			icon: ['fab', 'wordpress'],
			label: 'WordPress',
		},
		{
			icon: ['far', 'palette'],
			label: 'Photoshop',
		},
	],
}
