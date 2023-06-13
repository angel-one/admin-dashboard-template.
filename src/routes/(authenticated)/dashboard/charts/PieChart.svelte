<script>
	import { Pie } from 'svelte-chartjs';
	import { pieData } from './data/chartData';

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Pie data={pieData} options={{ responsive: true }} />
