<script lang="ts">
	import Banner from '$components/Banner.svelte';
	import NoOrders from '$components/NoOrders.svelte';
	import Table from '$components/Table/Table.svelte';
	import { tableData } from './__mocks__';
	import { onMount } from 'svelte';
	import DoughnutChart from './charts/DoughnutChart.svelte';
	import LineChart from './charts/LineChart.svelte';
	import PieChart from './charts/PieChart.svelte';
	import BarChart from './charts/BarChart.svelte';

	let Persons = [{ name: '' }];
	let loading = true;

	onMount(async () => {
		try {
			const response = await fetch('/api/sampleApi');
			if (response.status !== 200) {
				throw new Error('Rquest failed !!');
			}
			Persons = await response.json();
			loading = false;
		} catch (e) {
			console.log('error --- ', e);
			loading = false;
			Persons[0].name = 'Error Occured!!!!';
		}
	});
</script>

<div class="tw-w-full">
	<div class="tw-grid tw-min-h-screen tw-grid-cols-4 tw-gap-4 tw-pt-4 tw-pb-4">
		<div class="tw-card tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body">
				<h2 class="tw-card-title">Dougnut Char</h2>
				<p><DoughnutChart /></p>
			</div>
		</div>
		<div class="tw-card tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body">
				<h2 class="tw-card-title">Pie Chart</h2>
				<p><PieChart /></p>
			</div>
		</div>
		<div class="tw-card tw-col-start-3 tw-col-end-5 tw-row-start-1 tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body">
				<h2 class="tw-card-title">Bar Chart</h2>
				<p><BarChart /></p>
			</div>
		</div>
		<div class="tw-card tw-col-start-1 tw-col-end-3 tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body">
				<h2 class="tw-card-title">Line Chart</h2>
				<p><LineChart /></p>
			</div>
		</div>
		<div class="tw-card tw-col-start-3 tw-col-end-5 tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body">
				<h2 class="tw-card-title">Line Chart</h2>
				<div class="tw-flex tw-w-full tw-justify-center tw-align-middle">
					{#if !loading}
						<div class="tw-alert tw-alert-success tw-mt-4 tw-mb-4 tw-shadow-lg">
							<div class="tw-flex tw-h-4 tw-w-full tw-justify-center">
								<!-- <ul class="tw-steps"> -->
								{#each Persons as person}
									<li class=" tw-step">{person.name}</li>
								{/each}
								<!-- </ul> -->
							</div>
						</div>
					{:else}
						<div class="tw-alert tw-alert-info  tw-mt-4 tw-mb-4">
							<div class="tw-flex tw-h-4 tw-w-full tw-justify-center">Loading.....</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<Table {tableData} pagination={true} downloadName="csv-data" tableHeight="25rem" />
	<div class="tw-my-4 tw-flex tw-flex-col tw-items-center tw-justify-center">
		<NoOrders title="This is a sample Titile!!" />
	</div>
</div>

<style>
	.banner-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		padding-bottom: 1.5rem;
	}
	.content-primary {
		font-family: 'Barlow', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.125rem;
		line-height: 1.625rem;
		color: #fbfbfb;
		width: 13rem;
		margin: auto;
	}
	.content-secondary {
		font-family: 'Barlow', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 1.125rem;
		text-align: center;
		margin-top: 0.5rem;
		color: #ebeefb;
	}
</style>
