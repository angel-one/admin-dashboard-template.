<script lang="ts">
	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import { menuOpen } from '$lib/stores/MenuStore';
	import { activeLink } from './store';
	import { getPageName } from './helper';
	export let name: string;
	export let url: string;
	export let icon: ComponentType<SvelteComponentTyped> | null;

	function updateActiveLink(val: string) {
		activeLink.update(() => val);
		menuOpen.update(() => false); // Close the burger menu
	}

	function setActive(activeLink: string, url: string): boolean {
		const pageName = getPageName(url);

		return activeLink?.toLowerCase() === pageName?.toLowerCase();
	}
</script>

<a
	href={url}
	class="tw-flex tw-items-center "
	class:active={setActive($activeLink, url)}
	on:click={() => updateActiveLink(getPageName(url))}
	><div class="sb-icon-con" class:iconPresent={icon}><svelte:component this={icon} /></div>
	<span class="tw-m-2.5">{name}</span></a
>

<style>
	a.active {
		color: #003aff;
		font-weight: bold;
	}
</style>
