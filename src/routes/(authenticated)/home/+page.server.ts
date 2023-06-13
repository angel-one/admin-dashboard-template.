import { client } from '$db/postgres';
import type { Cookies, HttpError } from '@sveltejs/kit';

// import { error } from '@sveltejs/kit';
export const load = async function ({ cookies }: { cookies: Cookies }) {
	if (cookies.get('UserToken')) {
		try {
			const res = await client.query('SELECT * FROM person');
			const returnData = {
				columns: Object.keys(res.rows[0]).map((key) => {
					return { name: key, fieldName: key };
				}),
				data: res.rows
			};
			return returnData;
		} catch (e: HttpError) {
			// throw error(400, { message: `Got an Error - ${e.message}` });
			return {
				columns: [],
				data: []
			};
		}
	}
};
