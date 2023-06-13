import { writable } from 'svelte/store';

export const page = writable({
	showBottomNavigation: true,
	showSearchIcon: true,
	title: 'Sample Title',
	showBackIcon: false
});
