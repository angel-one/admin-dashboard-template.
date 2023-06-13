import { redirect, type Cookies } from '@sveltejs/kit';
import { CLIENT_ID } from '$env/static/private';

export function load({ cookies, url }: { cookies: Cookies; url: URL }) {
	if (cookies.get('UserToken')) {
		throw redirect(307, `${url.origin}`);
	}
	return {
		CLIENT_ID
	};
}
