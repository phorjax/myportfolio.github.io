import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Kalygo',
		color: 'blue',
		description:
			'This project was an internship I had in 2023 where I helped developing features. Some of them were translating the website to 40+ languages dinamycally, Working on the google login integration and enhancing existing features. You can check on the website by clicking on the Kalygo link right above the skills, or at https://kalygo.io/en',
		shortDescription:
			'Process data according to your preferences',
		links: [{ to: 'https://kalygo.io/en', label: 'Kalygo' }],
		logo: Assets.Kalygo,
		name: 'Kalygo Project',
		period: {
			from: new Date(2023, 5, 31), to: new Date(2023, 9, 31)
		},
		skills: getSkills('ts', 'tailwind', 'js', 'html'),
		type: 'Software as a Service.',
	},
	{
		slug: 'RC TRACKS',
		color: '#ff3e00',
		description:
			`This was one of my very first websites created for a client. This website was built from scratch with little to no styling tools. Most of the designs in this website were handcrafted based on the cleint's preferences. You can check on this project by clicking on the link above the skills or here: https://rc-tracks-2.vercel.app/`,
		shortDescription:
			'RC TRACKS Landing Page',
		links: [{ to: 'https://rc-tracks-2.vercel.app/', label: 'RC TRACKS' }],
		logo: Assets.RC,
		name: 'RC TRACKS',
		period: {
			from: new Date(2023, 3, 1), to: new Date(2023, 4, 1)
		},
		skills: getSkills('ts', 'tailwind', ),
		type: 'Website Landing Page',
	},
	{
		slug: 'Stagewood Inc.',
		color: 'palevioletred',
		description:
			`In this group project, I mainly worked on an internal software, the Navigation Bar and login UI and login integrations that are shared across all websites they own. The internal software was a tool built for the management of the company to be able to update information across all their websites and mobile applications without the need to code or have any techie knowledge. I worked on the UI of the platform, created API endpoints on the backend with .NET, and setted up MongoDB databases to push information from the backend. As this is an internal tool of the company, I can't show it to the world, but I can show the Navigation Bar and login UI with the Google, Facebook and Apple login integrations that I created and are shared across all websites this company owns. https://dev.tykbroker.com/`,
		shortDescription:
			'Stagewood Inc. TykBroker project.',
		links: [{ to: 'https://stagewood.com/', label: 'Stagewood Inc.' }],
		logo: Assets.Stagewood,
		name: 'Stagewood Inc.',
		period: {
			from: new Date(2023, 7, 1), to: new Date(2023, 10, 1)
		},
		skills: getSkills('ts', 'mui', 'js', 'c#', '.net', 'azuredevops', 'mongodb', 'nextjs', 'reactjs'),
		type: 'Software as a Service.',
	},
	{
		slug: 'Java Project',
		color: 'mediumorchid',
		description:
			`This is a personal project I decided to make to practice and showcase my abilities as a backend developer, so it is not a full stack project like the others. For this project, I utilized all the knowledge I have in Java to create a hypothetical backend for a social media app, where users can sign up, log in, send and receive messages, and post comments. I also added test cases and did everything within the javalin framework.`,
		shortDescription:
			'Back end of a hypothetical Social Media Blog API',
		links: [{ to: 'https://github.com/phorjax/phorjax-pep-project', label: 'Github' }],
		logo: Assets.Unknown,
		name: 'Java Backend Project',
		period: {
			from: new Date(2023, 7, 1), to: new Date(2023, 10, 1)
		},
		skills: getSkills('java', 'javalin', 'mysql'),
		type: 'Personal Project',
	}
];

export const title = 'Projects';
