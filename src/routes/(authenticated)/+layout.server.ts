import { redirect, type Cookies } from '@sveltejs/kit';

export function load({ cookies, url }: { cookies: Cookies; url: URL }) {
	if (!cookies.get('UserToken')) {
		throw redirect(307, `/login?redirectTo=${url.pathname}`);
	}
}
