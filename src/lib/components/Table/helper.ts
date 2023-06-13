export function ascendinSort(arr: arr, field: string) {
	if (!Array.isArray(arr)) {
		return arr;
	}
	return arr.sort((a, b) => {
		if (!isNaN(+a[field]) && !isNaN(+b[field])) {
			return a[field] - b[field];
		}
		if (a[field] < b[field]) {
			return -1;
		}
		if (a[field] > b[field]) {
			return 1;
		}
		return 0;
	});
}
export function descendingSort(arr: [], field: string) {
	if (!Array.isArray(arr)) {
		return arr;
	}
	return arr.sort((a, b) => {
		if (!isNaN(+a[field]) && !isNaN(+b[field])) {
			return b[field] - a[field];
		}
		if (a[field] < b[field]) {
			return 1;
		}
		if (a[field] > b[field]) {
			return -1;
		}
		return 0;
	});
}

export function debounce(fn: { (event: InputEvent): void; call?: any }, delay: number) {
	let isCalled;
	return function (...args: any) {
		if (isCalled) clearTimeout(isCalled);
		isCalled = setTimeout(() => {
			fn.call(this, ...args);
		}, delay);
	};
}

export function stringifyArray(data: any[]) {
	const op: string[] = [];
	let str = '';
	data.forEach((each: any) => {
		if (typeof each === 'object' && each !== null) {
			for (const key in each) {
				str = str + ',' + typeof each[key] === 'string' ? each[key].toLowerCase() : each[key];
			}
		} else {
			str = str + ',' + each;
		}
		op.push(str);
	});
	return op;
}
