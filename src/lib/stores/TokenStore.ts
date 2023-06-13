import { writable } from 'svelte/store';

export interface TokenStore {
	userToken: object | null;
}

const initalStore: TokenStore = {
	userToken: {}
};
function CreateStore() {
	const { subscribe, set, update } = writable(initalStore);
	let userToken: object | null;
	subscribe((v) => {
		userToken = v?.userToken;
	});
	return {
		subscribe,
		updateStore: (newStore: TokenStore) => {
			return update((s) => {
				return { ...s, ...newStore };
			});
		},
		set: (store: TokenStore) => set(store),
		userToken: () => userToken
	};
}

export const tokenStore = CreateStore();
