import type { RequestEvent } from '@sveltejs/kit';
import { start_postgres, client } from '$db/postgres';

// Initialize the connection to postres
start_postgres()
	.then((): void => {
		console.log('Hurrayyy...!!! Postgres Started ........ ');
	})
	.catch((e) => {
		console.log(e);

		// End the connection in case of Error
		client
			.end()
			.then(() => console.log('client has disconnected'))
			.catch((err) => console.error('error during disconnection', err.stack));
	});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handle({ event, resolve }: { event: RequestEvent; resolve: any }) {
	const response = await resolve(event);

	response.headers.set('Set-Cookie', 'SameSite=Strict');
	return response;
}
