import { isOneOf } from '@guardian/libs';
import type { Tuple } from './tuple';

export type EditionId = 'UK' | 'US' | 'AU' | 'INT' | 'EUR';

export type Edition = {
	url: string;
	editionId: EditionId;
	pageId: string;
	longTitle: string;
	title: string;
	dateLocale: string;
	timeZone: string;
};

export const editionList: Tuple<Edition, 5> = [
	{
		url: '/preference/edition/uk',
		editionId: 'UK',
		pageId: 'uk',
		longTitle: 'UK edition',
		title: 'UK edition',
		dateLocale: 'en-gb',
		timeZone: 'Europe/London',
	},
	{
		url: '/preference/edition/us',
		editionId: 'US',
		pageId: 'us',
		longTitle: 'US edition',
		title: 'US edition',
		dateLocale: 'en-us',
		timeZone: 'America/New_York',
	},
	{
		url: '/preference/edition/au',
		editionId: 'AU',
		pageId: 'au',
		longTitle: 'Australia edition',
		title: 'AU edition',
		dateLocale: 'en-au',
		timeZone: 'Australia/Sydney',
	},
	{
		url: '/preference/edition/int',
		editionId: 'INT',
		pageId: 'international',
		longTitle: 'International edition',
		title: 'International edition',
		dateLocale: 'en-gb',
		timeZone: 'Europe/London',
	},
	{
		url: '/preference/edition/eur',
		editionId: 'EUR',
		pageId: 'europe',
		longTitle: 'Europe edition',
		title: 'Europe edition',
		dateLocale: 'en-gb',
		timeZone: 'Europe/Paris',
	},
];

const ukEdition = editionList[0];

export const editionalisedPages = [
	'business',
	'business-to-business',
	'commentisfree',
	'culture',
	'money',
	'sport',
	'technology',
	'media',
	'environment',
	'film',
	'lifeandstyle',
	'travel',
	'tv-and-radio',
] as const;

export const getEditionFromId = (editionId: EditionId): Edition => {
	return (
		editionList.find((edition) => edition.editionId === editionId) ??
		ukEdition
	);
};

export const getRemainingEditions = (editionId: EditionId): Edition[] => {
	return editionList.filter((edition) => edition.editionId !== editionId);
};

/**
 * Determine if a string is one of the permitted edition strings
 *
 * @param s The string to test
 */
export const isEditionId = isOneOf(
	editionList.map(({ editionId }) => editionId),
);
