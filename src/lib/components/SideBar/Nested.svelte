<script lang="ts">
	import Item from './Item.svelte';
	import ItemContainer from './ItemContainer.svelte';
	import DownArrowIcon from '$lib/assets/icon/DownArrowIcon.svelte';
	import UpArrowIcon from '$lib/assets/icon/UpArrowIcon.svelte';
	import type { ComponentType, SvelteComponentTyped } from 'svelte';

	export let expanded = true;
	export let name: string;
	export let icon: ComponentType<SvelteComponentTyped> | null;
	type FileObject = {
		name: string;
		url?: string;
		icon?: ComponentType<SvelteComponentTyped>;
		files?: FileObject[];
	};
	export let files: FileObject[];

	function toggle() {
		expanded = !expanded;
	}
</script>

<div class="sb-each-block">
	{#if name}
		<ItemContainer>
			<button class="tw-flex tw-items-center" class:expanded on:click={toggle}>
				<div class="sb-icon-con" class:iconPresent={icon}>
					<svelte:component this={icon} />
				</div>
				<span class="tw-m-2.5">{name || ''}</span>
				<div class="sb-icon-con tw-m-2 tw-flex tw-items-center tw-justify-end">
					{#if expanded}<DownArrowIcon />{:else}<UpArrowIcon />{/if}
				</div></button
			>
		</ItemContainer>
	{/if}

	{#if expanded}
		<ul class="list-con">
			{#each files as file}
				<li>
					{#if file.files}
						<svelte:self {...file} />
					{:else}
						<ItemContainer>
							<Item {...file} />
						</ItemContainer>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	button {
		cursor: pointer;
		border: none;
		margin: 0;
	}

	.expanded {
		font-weight: bold;
	}

	ul {
		padding: 0.2rem 0 0 0;
		margin: 0 0 0 3rem;
		list-style: none;
		min-width: min-content;
	}
	ul:first-child {
		margin: 0;
		padding: 0;
		border: none;
	}

	li {
		padding: 0.2rem 0 0 0;
	}
</style>
