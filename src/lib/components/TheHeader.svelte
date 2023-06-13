<!-- The Header component (This is implemented on almost every page) -->
<script setup lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import NotificationBellIcon from '$lib/assets/icon/NotificationBellIcon.svelte';
	import MenuIcon from '$lib/assets/icon/MenuIcon.svelte';
	import AngelOneLogo from '$lib/assets/images/AngelOneLogo.webp';
	import { tokenStore } from '$lib/stores/TokenStore';
	import { menuOpen } from '$lib/stores/MenuStore';

	let isProfileMenuVisible = false;
	type User = {
		name?: string;
		value?: string;
		picture?: string;
	};
	let user: User | null = {};
	tokenStore.subscribe((v) => {
		user = v.userToken;
	});

	/**
	 * toggleMenu: This function handles toggling for menu on hamburger icon click
	 *
	 */
	const toggleMenu = () => {
		menuOpen.update((v) => !v);
	};

	/**
	 * handleProfileClick: CTA for Profile Icon Click
	 * Docs can be updated when this method is implemented
	 */
	const handleProfileClick = () => {
		isProfileMenuVisible = !isProfileMenuVisible;
	};

	const onLogoutClick = () => {
		document.cookie = `UserToken=; Expires=${new Date()};`;
		goto(`/login`, { replaceState: false });
	};

	/*
	 * handleNotificationClick: CTA for Notification Icon Click
	 * Docs can be updated when this method is implemented
	 */
	const handleNotificationClick = () => {
		// handle notification icon click
	};
</script>

<section
	class={`${
		$$props.class ? $$props.class : ''
	} cm-app-header tw-px-4 tw-py-2 tw-text-center lg:tw-px-4 lg:tw-py-2`}
>
	<!-- md and upper (medium and larger) screen layout -->
	<article class=" tw-flex tw-items-center tw-justify-between md:tw-flex-row">
		<div
			class="cm-burger-menu tw-h-6 tw-w-6 tw-cursor-pointer md:tw-hidden"
			on:click={toggleMenu}
			class:active={$menuOpen}
		>
			<MenuIcon />
		</div>

		<div class="tw-cursor-pointer">
			<a href="/">
				<img src={AngelOneLogo} alt="Logo" class="cm-header-logo" />
			</a>
		</div>
		<div class="tw-flex tw-flex-row tw-items-center tw-justify-around">
			<div class="tw-mx-2 tw-cursor-pointer md:tw-block" on:click={handleNotificationClick}>
				<NotificationBellIcon class="cm-header-icon" />
			</div>
			<div class="tw-flex">
				<div class="tw-avatar tw-mx-4 tw-cursor-pointer md:tw-block" on:click={handleProfileClick}>
					<div
						class="tw-w-8 tw-rounded-full tw-ring tw-ring-primary tw-ring-offset-2 tw-ring-offset-base-100"
					>
						<img alt="user profile" src={user?.picture} />
					</div>
				</div>
				<div class="tw-hidden md:tw-flex" on:click={handleProfileClick}>
					{user?.name}
				</div>
				{#if isProfileMenuVisible}
					<ul class="tw-menu tw-absolute tw-top-16 tw-w-56 tw-bg-base-100" transition:fade>
						<li><a href="/profile">Profile</a></li>
						<li><span on:click={onLogoutClick}>Logout</span></li>
					</ul>
				{/if}
			</div>
		</div>
	</article>
</section>

<style>
	.cm-app-header {
		height: 4rem;
		overflow: hidden;
	}
	.cm-header-logo {
		height: 3rem;
		width: auto;
	}

	.cm-burger-menu.active {
		background-color: #b5c6e3;
	}
	:global(.cm-header-icon) {
		height: 2.25rem;
		width: 2.25rem;
	}
</style>
