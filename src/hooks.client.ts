import jwt_decode from 'jwt-decode';
import { tokenStore } from '$lib/stores/TokenStore';
import { parse } from 'cookie-es';

type AppCookie = {
	UserToken?: string;
};
function setUserToken() {
	const cookie: AppCookie = parse(document.cookie);

	const decoded: object = cookie?.UserToken ? jwt_decode(cookie.UserToken) : {};
	tokenStore.updateStore({
		userToken: decoded
	});
}

setUserToken();
