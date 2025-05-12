// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

// https://astro.build/config
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 4321
	},
	integrations: [
		starlight({
			title: 'AFSR',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thackmaster' }],
			editLink: { baseUrl: 'https://github.com/thackmaster/supervisor-resources/edit/main' },
			sidebar: [
				{
					label: 'Emergent',
					//link: '/emergent/index',
					autogenerate: { directory: 'emergent' },
				},
				{
					label: 'Site Information',
					autogenerate: { directory: 'site-information' },
					collapsed: true,
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Benefits',
					link: '/benefits'
				}
			],
			lastUpdated: true,
			plugins: [
				starlightGiscus({
					repo: 'thackmaster/supervisor-resources',
					repoId: 'R_kgDOOnjuSw',
					category: 'Comments',
					categoryId: 'DIC_kwDOOnjuS84Cp-3K',
					mapping: 'pathname',
					inputPosition: 'top'
				})
			],
		}),
	],
});
