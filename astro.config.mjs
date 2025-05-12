// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';

// https://astro.build/config
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 4321
	},
	integrations: [
		devServerFileWatcher([
			'./config/**', // Custom plugins and integrations
			'./astro.sidebar.ts' // Sidebar configuration file
		]),
		starlight({
			title: 'AFSR',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thackmaster' }],
			editLink: { baseUrl: 'https://github.com/thackmaster/supervisor-resources/edit/main' },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Emergent',
					autogenerate: { directory: 'emergent' },
				},
			],
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
