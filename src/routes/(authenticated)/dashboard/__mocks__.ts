export const tableData = {
	columns: [
		{
			name: 'Identity',
			fieldName: 'id',
			thStyle: {
				'text-align': 'right'
			},
			tdStyle: {
				'text-align': 'center'
			}
		},
		{ name: 'Name', fieldName: 'name' },
		{
			name: 'Job',
			fieldName: 'job',
			thStyle: {
				'min-width': '10rem'
			}
		},
		{ name: 'Favorite Color', fieldName: 'color' },
		{
			name: 'Title A',
			fieldName: 'A',
			thStyle: {
				'min-width': '10rem',
				color: 'yellow',
				'background-color': 'grey',
				'text-align': 'right'
			},
			thClass: 'my-class class-one',
			tdStyle: {
				color: 'purple',
				'background-color': '#fdc066'
			},
			tdClass: 'a-class class-aa'
		},
		{ name: 'Title B - This is a big one', fieldName: 'B' },
		{ name: 'Title C', fieldName: 'C' },
		{ name: 'Title D', fieldName: 'D', thStyle: { 'min-width': '20vw' } },
		{ name: 'Title E', fieldName: 'E' },
		{ name: 'Title F', fieldName: 'F' },
		{ name: 'Title G', fieldName: 'G' },
		{ name: 'Title H', fieldName: 'H' },
		{ name: 'Title I', fieldName: 'I' }
	],
	data: [
		{
			id: 1,
			name: 'User 1',
			job: 'Dev Xylo',
			color: 'Red',
			A: 'Lorem ipsum',
			B: 'Lorem ipsum',
			C: 'Phasellus faucibus.',
			D: 'Lorem ipsum.',
			E: 'A arcu.',
			F: 'Duis at.',
			G: 'Phasellus faucibus.',
			H: 'A arcu cursus.',
			I: 'Phasellus faucibus.'
		},
		{
			id: 2,
			name: 'User 2',
			job: 'Dev Omega',
			color: 'Blue'
		},
		{
			id: 3,
			name: 'User 3',
			job: 'Dev Flux',
			color: 'Green'
		},
		{
			id: 4,
			name: 'User 4',
			job: 'Dev Wu',
			color: 'Yellow'
		},
		{
			id: 5,
			name: 'User 5',
			job: 'Dev Popo',
			color: 'Purple'
		},
		{
			id: 6,
			name: 'User 6',
			job: 'Dev Reel',
			color: 'reel'
		},
		{
			id: 7,
			name: 'User 1',
			job: 'Dev Xylo',
			color: 'Red'
		},
		{
			id: 8,
			name: 'User 2',
			job: 'Dev Omega',
			color: 'Blue'
		},
		{
			id: 9,
			name: 'User 3',
			job: 'Dev Flux',
			color: 'Green'
		},
		{
			id: 10,
			name: 'User 4',
			job: 'Dev Wu',
			color: 'Yellow'
		},
		{
			id: 11,
			name: 'User 5',
			job: 'Dev Popo',
			color: 'Purple'
		},
		{
			id: 12,
			name: 'User 6',
			job: 'Dev Reel',
			color: 'reel'
		}
	]
};
