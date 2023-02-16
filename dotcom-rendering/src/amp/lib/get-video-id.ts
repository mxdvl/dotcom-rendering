import { parse, URLSearchParams } from 'url';

export const getIdFromUrl = (
	urlString: string,
	regexFormat: string,
	tryInPath?: boolean,
	tryQueryParam?: string,
): string => {
	const logErr = (actual: string, message: string) => {
		throw new Error(
			`validate getIdFromURL error: The URL ${urlString} returned ${actual}. ${message}`,
		);
	};

	// Looks for ID in both formats if provided
	const url = new URL(urlString);

	const ids = [
		tryQueryParam
			? new URLSearchParams(url.query ?? '').get(tryQueryParam)
			: undefined,
		tryInPath ? url.pathname.split('/').at(-1) : undefined,
	].filter(isString);

	// const ids: string[] = [];
	// if (tryQueryParam && url.query) {
	// 	const maybeId = new URLSearchParams(url.query).get(tryQueryParam);
	// 	if (maybeId) ids.push(maybeId);
	// }
	// if (tryInPath && url.pathname) {
	// 	const maybeId = url.pathname.split('/').pop();
	// 	if (maybeId) ids.push(maybeId);
	// }

	if (!ids.length)
		logErr(
			'an undefined ID',
			'Could not get ID from pathname or searchParams.',
		);

	// Allows for a matching ID to be selected from either (or both) formats
	const id = ids.find((tryId) => new RegExp(regexFormat).test(tryId));

	if (!id) {
		return logErr(
			id ?? ids.join(', '),
			`Value(s) didn't match regexFormat ${regexFormat}`,
		);
	}

	return id;
};
