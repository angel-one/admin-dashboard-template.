<script>
	import { Bar } from 'svelte-chartjs';
	import { barData } from './data/chartData';

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<Bar data={barData} options={{ responsive: true }} />
