<script setup lang="ts">
	import TheHeader from '$lib/components/TheHeader.svelte';
	import SideBar from '$components/SideBar/SideBar.svelte';
</script>

<div class="tw-w-full">
	<!-- header (navbar) -->
	<header class="cm-app-header tw-fixed tw-z-50 tw-w-full">
		<TheHeader class="tw-bg-white" />
	</header>

	<!-- page body -->
	<main
		class="max-w-none tw-m-auto tw-min-h-screen tw-justify-center tw-bg-grey  sm:tw-flex lg:tw-px-0"
	>
		<SideBar />
		<section class="pg-view-section">
			<slot />
		</section>
	</main>
</div>

<style>
	main {
		min-height: 100vh;
		padding-top: 4.2rem;
		padding-bottom: 2rem;
	}
	.cm-app-header {
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
	}
	.pg-view-section {
		width: calc(100vw - 3.5rem);
		margin-left: 3.5rem;
		padding: 0 2rem;
	}
	@media screen and (max-width: 640px) {
		.pg-view-section {
			width: 100%;
			margin: 0;
			padding: 0 1rem;
		}
	}
</style>
