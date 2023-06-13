<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(async () => {
		goto(`/dashboard`, { replaceState: false });
	});
</script>
