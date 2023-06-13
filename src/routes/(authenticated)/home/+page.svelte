<script lang="ts">
	import NoOrders from '$components/NoOrders.svelte';
	import Table from '$components/Table/Table.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<div class="tw-my-4 tw-flex tw-flex-col tw-items-center tw-justify-center">
		<NoOrders title="This is a sample Titile!!" />
	</div>
	<div class="tw-m-4">This is a Server Side Rendered Table!!!</div>
	<Table tableData={data} downloadName="csv-data" />
</div>
