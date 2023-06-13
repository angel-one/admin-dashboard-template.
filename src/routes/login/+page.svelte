<script lang="ts">
	import jwt_decode from 'jwt-decode';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { tokenStore } from '$lib/stores/TokenStore';
	export let data;
	function handleCredentialResponse(response: any) {
		document.cookie = 'UserToken' + '=' + response.credential;
		const decoded: object = jwt_decode(response.credential);
		tokenStore.set({
			userToken: decoded
		});
		goto(`${$page?.url?.searchParams.get('redirectTo') || '/'}`, { replaceState: false });
	}
	onMount(() => {
		google.accounts.id.initialize({
			client_id: data.CLIENT_ID,
			callback: handleCredentialResponse
		});
		google.accounts.id.renderButton(
			document.getElementById('buttonDiv'),
			{ theme: 'outline', size: 'large' } // customization attributes
		);
		google.accounts.id.prompt(); // also display the One Tap dialog
	});
</script>

<div id="buttonDiv" class="tw-flex tw-h-screen tw-items-center tw-justify-center" />
