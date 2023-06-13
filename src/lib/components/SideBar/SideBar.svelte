<script lang="ts">
	import Nested from './Nested.svelte';
	import WorldIcon from '$lib/assets/icon/WorldIcon.svelte';
	import { menuOpen } from '$lib/stores/MenuStore';
	import { page } from '$app/stores';
	import { activeLink } from './store';
	import { getPageName } from './helper';

	const pathName = getPageName($page.url.pathname);
	activeLink.set(pathName);

	let expanded = true;
	let files = [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: WorldIcon
		},
		{ name: 'Home', url: '/home', icon: WorldIcon },
		{ name: 'Profile', url: '/profile', icon: WorldIcon },
		{ name: 'FAQ', url: '/faq', icon: WorldIcon },
		{
			name: 'Group A',
			icon: WorldIcon,
			files: [
				{
					name: 'Subgroup 1',
					icon: WorldIcon,
					files: [
						{ name: 'Route 1', url: '/g' },
						{ name: 'Route 2', url: '/b' }
					]
				},
				{
					name: 'Subgroup 2',
					files: [
						{ name: 'Route 3', url: '/c' },
						{ name: 'Route 4', url: '/d' }
					]
				},
				{ name: 'Route 5', url: '/e' },
				{ name: 'Route 6', url: '/f' },
				{ name: 'Route 7', url: '/g' }
			]
		}
	];
</script>

<div class="sb-block" class:open={$menuOpen} class:close={$menuOpen !== undefined && !$menuOpen}>
	<Nested {files} {expanded} />
</div>

<style>
	.sb-block {
		background: #b5c6e3;
		width: 3.25rem;
		position: fixed;
		left: 0;
		z-index: 100;
		overflow-x: hidden;
		top: 4.2rem;
		bottom: 0;
		box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);
	}
	.sb-block:hover {
		width: 20rem;
		animation: expand 100ms linear;
	}
	@keyframes expand {
		from {
			width: 3.25rem;
		}
		to {
			width: auto;
		}
	}

	@media screen and (max-width: 640px) {
		.sb-block {
			width: 80vw;
			left: -90vw;
		}
		.sb-block.open {
			left: 0;
			animation: slideIn 100ms linear;
		}
		.sb-block.close {
			left: -90vw;
			animation: slideOut 100ms linear;
		}
	}

	@keyframes slideIn {
		from {
			left: -90vw;
		}
		to {
			left: 0;
		}
	}
	@keyframes slideOut {
		from {
			left: 0;
		}
		to {
			left: -90vw;
		}
	}
</style>
