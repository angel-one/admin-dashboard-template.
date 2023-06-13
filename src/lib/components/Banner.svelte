<script>
	export let curved = false;
</script>

<div class="banner-container" class:curved>
	<slot name="bannerImage" />
	{#if $$slots.bannerContent}
		<slot name="bannerContent" />
	{/if}
</div>

<style>
	.banner-container {
		height: 17rem;
		width: 100%;
		background: #354357;
		position: relative;
	}
	.banner-container.curved {
		border-radius: 0 0 0.75rem 0.75rem;
	}
</style>
