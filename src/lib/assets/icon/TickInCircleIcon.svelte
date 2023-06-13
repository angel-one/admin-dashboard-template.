<script setup lang="ts">
	import Tick from './TickIcon.svelte';
	// defineProps({
	//   iconColor: {
	//     type: String,
	//     default: 'white'
	//   }
	// })
	export let iconColor = 'white';
</script>

<div class="flex h-4 w-4 items-center justify-center rounded-lg bg-green-buy">
	<Tick stroke={iconColor} />
</div>
