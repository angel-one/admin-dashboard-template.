export function getPageName(url: string): string {
	const pathArr = url.split('/');
	return pathArr?.[pathArr?.length - 1];
}
