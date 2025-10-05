import localforage from 'localforage';

export const put = async (key: string, value: string) => {
	try {
		await localforage.setItem(key, value);
	} catch (err) {
		console.log('put to cache error', err);
	}
};

export const get = async (key: string) => {
	try {
		const value = await localforage.getItem(key);
		return value;
	} catch (err) {
		console.log('get from cache error', err);
	}
};

export const remove = async (key: string) => {
	try {
		await localforage.removeItem(key);
	} catch (err) {
		console.log('get from cache error', err);
	}
};
