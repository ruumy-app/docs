// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'ruumy docs',
			description: 'Documentation for ruumy — live rooms for the web.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ruumy-app' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quickstart', slug: 'getting-started/quickstart' },
					],
				},
				{
					label: 'Rooms',
					items: [
						{ label: 'Create a Room', slug: 'rooms/create' },
						{ label: 'Join a Room', slug: 'rooms/join' },
						{ label: 'Room Modes', slug: 'rooms/modes' },
					],
				},
				{
					label: 'Presence',
					items: [
						{ label: 'How it works', slug: 'presence/how-it-works' },
						{ label: 'Cursors & Avatars', slug: 'presence/cursors' },
					],
				},
				{
					label: 'Chat',
					items: [
						{ label: 'Real-time Chat', slug: 'chat/realtime' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: "What's coming", slug: 'roadmap/whats-coming' },
					],
				},
			],
		}),
	],
});
