// @ts-check

/** @fileoverview
 *
 * Run: `make gen-stories` in the dotcom-rendering sub-directory
 *
 * This script was created as a replacement for storiesOf. It generates all of
 * the possible variants of our Card components.
 *
 * It should be run whenever any of the Display, Design, or Theme `format` properties change
 *
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { log, success, warn } from '../../../scripts/log.js';

const STORIES_PATH = resolve(
	dirname(fileURLToPath(new URL(import.meta.url))),
	'..',
	'..',
	'stories',
	'generated',
);
const CARD_STORIES_FILE = resolve(STORIES_PATH, 'Card.stories.tsx');
/** @param {string} componentName */
const README_FILE = (componentName) =>
	resolve(STORIES_PATH, `${componentName}Readme.stories.jsx`);

const CARD_TEMPLATE_HEADER = `
/*
 * DO NOT EDIT THIS FILE DIRECTLY
 * These stories were auto-generated by \`dotcom-rendering/scripts/gen-stories/gen-stories.js\`
 */

import { splitTheme } from '../../.storybook/decorators/splitThemeDecorator';
import { CardsWithDifferentThemes } from '../../src/components/Card/Card.stories';
import { ArticleDesign, ArticleDisplay, ArticleSpecial, Pillar } from '../../src/lib/format';

// eslint-disable-next-line import/no-default-export -- we need a default here
export default {
	title: 'Components/Card/Format Variations',
	component: CardsWithDifferentThemes,
	chromatic: {
		diffThreshold: 0.2,
		pauseAnimationAtEnd: true,
	},
};
`;

/** @param {string} componentName */
const README_TEMPLATE = (componentName) => `
import { css } from '@emotion/react';

const ReadMe = () => (
	<section css={css\`
		padding: 1rem;
		& h1, p{
			margin-bottom: 0.5rem;
		}
		\`}>
		<h1 css={css\`font-size: 1.5em; font-weight: 400;\`}>Readme</h1>
		<p>
			The stories in this directory are automatically generated.
		</p>
		<p>
			To add new format variations to test, please edit the list in \`get-stories.mjs\`.
		</p>
	</section>
);

// eslint-disable-next-line import/no-default-export
export default {
	title: 'Components/${componentName}/Format Variations',
	component: ReadMe,
	chromatic: { disableSnapshot: true },
};

export const Readme = () => <ReadMe />;
`;

/**
 * @param {string} displayName
 * @param {string} designName
 * @param {string} theme
 */
const generateCardStory = (displayName, designName, theme) => {
	const storyName = displayName + designName;

	return `
export const ${storyName} = () => {
	return (
		<CardsWithDifferentThemes
			display={ArticleDisplay.${displayName}}
			design={ArticleDesign.${designName}}
			title="${storyName}"
		/>
	);
};
${storyName}.storyName = '${displayName}Display ${designName}Design';
${storyName}.decorators = [splitTheme([{
	display: ArticleDisplay.${displayName},
	design: ArticleDesign.${designName},
	theme: {...ArticleSpecial, ...Pillar}.${theme.replace('Pillar', '')},
},])]
`;
};

const testCardFormats = [
	{
		display: 'Standard',
		design: 'Standard',
		theme: 'NewsPillar',
	},
];

const generateCardStories = () => {
	log('[scripts/gen-stories] Generating card stories.');
	let stories = 0;
	let template = CARD_TEMPLATE_HEADER;

	for (const { display, design, theme } of testCardFormats) {
		template += generateCardStory(display, design, theme);
		stories++;
	}

	success(`[scripts/gen-stories] Generated ${stories} card stories!`);
	return template;
};

const saveStories = () => {
	mkdirSync(STORIES_PATH, { recursive: true });

	const cardContents = generateCardStories();
	writeFileSync(CARD_STORIES_FILE, cardContents);
	success(
		`[scripts/gen-stories] Saved card stories to ${CARD_STORIES_FILE}!`,
	);

	writeFileSync(README_FILE('Card'), README_TEMPLATE('Card'));
	success(`[scripts/gen-stories] Saved Readme ${README_FILE('Card')}!`);
};

const checkStories = () => {
	const cardContents = generateCardStories();
	const cardFileContents = readFileSync(CARD_STORIES_FILE);

	log(
		'[scripts/check-stories] Checking if generated stories and checked in stories match.',
	);

	if (cardContents !== cardFileContents.toString()) {
		warn(
			'[scripts/check-stories] Generated stories and checked in stories do not match! A new format might have been added, please run `make gen-stories`',
		);

		process.exit(1);
	}

	success(
		'[scripts/check-stories] Generated stories and checked in stories match! No further action required!',
	);
};

export { checkStories, saveStories };
