/* eslint-disable @typescript-eslint/unbound-method */

const fs = require('node:fs/promises');
const { resolve } = require('node:path');
const execa = require('execa');
const fetch = require('node-fetch');
const { config } = require('../../fixtures/config');
const { configOverrides } = require('../../fixtures/config-overrides');
const { switchOverrides } = require('../../fixtures/switch-overrides');

const root = resolve(__dirname, '..', '..');

/**
 * gen-fixtures.js
 *
 * A script to automatically download the latest json data for a production article and
 * insert it into a fixture file to use for testing. In particular, we use these fixtures
 * for our layout stories
 *
 * Edit the articles array below to add or amend the urls that we use. The script will fetch
 * ${article.url}.json?dcr and save the response in ${article.name}.ts in the fixtures folder
 *
 * Usage
 * $ make gen-fixtures
 */

const articles = [
	{
		name: 'Standard',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Gallery',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Audio',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Video',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Analysis',
		url: 'https://www.theguardian.com/world/2020/feb/10/irish-general-election-everything-you-need-to-know',
	},
	{
		name: 'Comment',
		url: 'https://www.theguardian.com/commentisfree/2020/feb/10/austerity-level-up-newcastle-budget-cuts',
	},
	{
		name: 'Feature',
		url: 'https://www.theguardian.com/film/2020/feb/10/quotes-of-the-oscars-2020',
	},
	{
		name: 'Live',
		url: 'https://www.theguardian.com/science/live/2021/feb/19/mars-landing-nasa-perseverance-rover-briefing-latest-live-news-updates',
	},
	{
		name: 'Dead',
		url: 'https://www.theguardian.com/science/live/2021/feb/19/mars-landing-nasa-perseverance-rover-briefing-latest-live-news-updates',
	},
	{
		name: 'Editorial',
		url: 'https://www.theguardian.com/commentisfree/2021/feb/03/the-guardian-view-on-quarantine-an-old-method-and-a-vital-one',
	},
	{
		name: 'Letter',
		url: 'https://www.theguardian.com/world/2021/apr/05/why-is-a-womans-work-never-done',
	},
	{
		name: 'SpecialReport',
		url: 'https://www.theguardian.com/environment/2019/oct/14/how-rein-in-fossil-fuel-industry-eight-ideas',
	},
	{
		name: 'Interview',
		url: 'https://www.theguardian.com/global/2020/feb/09/halima-aden-model-activist-hijab-refugee-fashion-we-all-deserve-representation',
	},
	{
		name: 'MatchReport',
		url: 'https://www.theguardian.com/football/2021/feb/05/andre-ayew-sparks-swansea-victory-over-norwich-to-close-gap-at-top',
	},
	{
		name: 'PhotoEssay',
		url: 'https://www.theguardian.com/travel/2020/dec/09/my-year-of-roaming-free-in-cornwall-photo-essay-cat-vinton',
	},
	{
		name: 'PrintShop',
		url: 'https://www.theguardian.com/artanddesign/2020/dec/17/buy-a-classic-sport-photograph-the-immortal-bobby-moore',
	},
	{
		name: 'Recipe',
		url: 'https://www.theguardian.com/food/2021/feb/06/meera-sodhas-vegan-recipe-for-spring-onion-pancakes',
	},
	{
		name: 'Review',
		url: 'https://www.theguardian.com/tv-and-radio/2020/jan/17/sex-education-season-two-review-netflix',
	},
	{
		name: 'Quiz',
		url: 'https://www.theguardian.com/football/that-1980s-sports-blog/2020/jun/12/sports-quiz-football-in-the-1980s',
	},
	{
		name: 'Labs',
		url: 'https://www.theguardian.com/whats-in-your-blood-/2018/oct/11/royal-ancestry-genetics-things-to-consider',
	},
	{
		name: 'NumberedList',
		url: 'https://www.theguardian.com/technology/2019/dec/17/best-smartphone-2019-iphone-oneplus-samsung-and-huawei-compared-and-ranked',
	},
	{
		name: 'NewsletterSignup',
		url: 'https://www.theguardian.com/football/2022/mar/22/sign-up-for-our-new-womens-football-newsletter-moving-the-goalposts',
	},
	{
		name: 'Explainer',
		url: 'https://www.theguardian.com/australia-news/2022/aug/21/what-is-an-indigenous-treaty-and-how-would-it-work-in-australia',
	},
	{
		name: 'CurrentCartoons',
		url: 'https://www.theguardian.com/commentisfree/picture/2021/apr/25/nicola-jennings-no-10-boris-johnson-conservatives-sleaze-scandal-cartoon',
	},
];

const HEADER = `/**
* DO NOT EDIT THIS FILE!
*
* This file was automatically generated using the gen-fixtures.js script. Any edits
* you make here will be lost.
*
* If the data in these fixtures is not what you expect then
*
* 1. Refresh the data using 'make gen-fixtures' or
* 2. if the latest live data is not what you need, then consider editing
*    gen-fixtures.js directly.
*/

`;

// Article fixtures
const requests = articles.map((article) => {
	return fetch(`${article.url}.json?dcr`)
		.then((res) => res.json())
		.then((json) => {
			// Override config
			json.config = { ...config, ...configOverrides };
			// Override switches
			json.config.switches = {
				...json.config.switches,
				...switchOverrides,
			};

			// Override this config property but only for Labs articles
			// TODO: Remove this once we are fully typing the config property
			// and no longer need to use a fixed `config.js` object to replace
			// the live one
			if (json.format.theme === 'Labs') {
				json.config.isPaidContent = true;
			}

			// Manual hack for LiveBlog vs DeadBlog
			if (article.name === 'Live') {
				json.format.design = 'LiveBlogDesign';
			}

			// Write the new fixture data
			const contents = `${HEADER}

			import type { FEArticleType } from '../../../src/types/frontend';

			export const ${article.name}: FEArticleType = ${JSON.stringify(json, null, 4)}`;
			return fs.writeFile(
				`${root}/fixtures/generated/articles/${article.name}.ts`,
				contents,
				'utf8',
			);
		})
		.then(() => `${article.name}.ts`)
		.catch((err) => {
			throw new Error(`Failed to create ${article.name}.ts`, {
				cause: err,
			});
		});
});

// Images fixture
requests.push(
	fetch(
		'https://www.theguardian.com/travel/2020/dec/09/my-year-of-roaming-free-in-cornwall-photo-essay-cat-vinton.json?dcr',
	)
		.then((res) => res.json())
		.then((json) => {
			const images = json.blocks[0].elements.filter(
				(element) =>
					element._type ===
					'model.dotcomrendering.pageElements.ImageBlockElement',
			);

			const type = Array.isArray(images)
				? '[' + images.map(() => 'ImageBlockElement').join(',') + ']'
				: 'unknown';

			// Write the new fixture data
			const contents = `${HEADER}
			import type { ImageBlockElement } from '../../src/types/content';

			export const images: ${type} = ${JSON.stringify(images, null, 4)}`;
			return fs.writeFile(
				`${root}/fixtures/generated/images.ts`,
				contents,
				'utf8',
			);
		})
		.then(() => 'images.ts')
		.catch((err) => {
			throw new Error('Failed to create images.ts', { cause: err });
		}),
);

// MatchReport fixtures
requests.push(
	fetch(
		'https://api.nextgen.guardianapps.co.uk/football/api/match-nav/2022/07/11/8184/7514.json?dcr=true&page=football%2F2022%2Fjul%2F11%2Fengland-norway-womens-euro-2022-group-a-match-report',
	)
		.then((res) => res.json())
		.then((json) => {
			// Write the new fixture data
			const contents = `${HEADER}export const matchReport: MatchReportType = ${JSON.stringify(
				json,
				null,
				4,
			)}`;
			return fs.writeFile(
				`${root}/fixtures/generated/match-report.ts`,
				contents,
				'utf8',
			);
		})
		.then(() => 'match-report.ts')
		.catch((err) => {
			throw new Error('Failed to create match-report.ts', { cause: err });
		}),
);

// Series
requests.push(
	fetch(
		'https://api.nextgen.guardianapps.co.uk/series/tv-and-radio/series/tv-review.json?dcr',
	)
		.then((res) => res.json())
		.then((json) => {
			// Write the new fixture data
			const contents = `${HEADER}export const series = ${JSON.stringify(
				json,
				null,
				4,
			)}`;
			return fs.writeFile(
				`${root}/fixtures/generated/series.ts`,
				contents,
				'utf8',
			);
		})
		.then(() => 'series.ts')
		.catch((err) => {
			throw new Error('Failed to create series.ts', { cause: err });
		}),
);

// Story package
requests.push(
	fetch(
		'https://api.nextgen.guardianapps.co.uk/story-package/science/2021/feb/18/life-on-mars-nasa-keeps-looking-with-perseverance-rover-mission.json?dcr=true',
	)
		.then((res) => res.json())
		.then((json) => {
			// Write the new fixture data
			const contents = `${HEADER}export const storyPackage = ${JSON.stringify(
				json,
				null,
				4,
			)}`;
			return fs.writeFile(
				`${root}/fixtures/generated/story-package.ts`,
				contents,
				'utf8',
			);
		})
		.then(() => 'story-package.ts')
		.catch((err) => {
			throw new Error('Failed to create story-package.ts', {
				cause: err,
			});
		}),
);

Promise.allSettled(requests)
	.then((results) => {
		const successful = results.filter(
			({ status }) => status === 'fulfilled',
		);
		const failed = results.filter(({ status }) => status === 'rejected');

		if (successful.length > 0) {
			console.log(
				`\n✅ Successfully created ${successful.length} / ${requests.length} fixtures:\n`,
				...successful.map(({ value }) => `${String(value)}\n`),
			);
		}

		if (failed.length > 0) {
			console.error(
				`❌ Failed to create ${failed.length} / ${requests.length} fixtures, with errors:\n`,
				...failed.flatMap(({ reason }) => [reason, `\n`]),
			);

			process.exitCode = 1;
		}

		console.log('Generation complete, formatting successful fixtures...');
		execa('prettier', ['./fixtures/**/*', '--write', '--loglevel', 'error'])
			.then(() => {
				console.log('✅ Formatting complete.');
			})
			.catch((err) => {
				console.error('\n❌ Failed to format fixtures:\n', err);
				process.exitCode = 1;
			});
	})
	.catch((err) => {
		console.error('❌ Unexpected error occurred:\n', err);
		process.exitCode = 1;
	});
