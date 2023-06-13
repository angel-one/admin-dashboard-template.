import { writable } from 'svelte/store';

const value: boolean | undefined = undefined;
export const menuOpen = writable(value);
