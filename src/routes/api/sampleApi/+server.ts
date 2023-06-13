import type { Cookies, HttpError } from '@sveltejs/kit';

import { json, error } from '@sveltejs/kit';

import { client } from '$db/postgres';

export async function GET({ cookies }: { cookies: Cookies }) {
	if (cookies.get('UserToken')) {
		try {
			const res = await client.query('SELECT * FROM person');
			return json(res.rows);
		} catch (e: HttpError) {
			throw error(400, { message: `Got an Error - ${e.message}` });
		}
	}

	throw error(401, 'Unable to authenticate!!');
}
