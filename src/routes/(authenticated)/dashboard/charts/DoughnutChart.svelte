<script>
	import { Doughnut } from 'svelte-chartjs';
	import { DoughnutData } from './data/chartData';

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut data={DoughnutData} options={{ responsive: true }} />
