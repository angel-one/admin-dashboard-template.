<script setup lang="ts">
	// defineProps({
	//   stroke: {
	//     type: String,
	//     default: 'white'
	//   }
	// })
	export let stroke = 'white';
</script>

<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M1 3.321L2.774 5L7 1"
		{stroke}
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
