import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import type { Meta, StoryObj } from '@storybook/react';
import { allModes } from '../../.storybook/modes';
import { discussionApiUrl } from '../../fixtures/manual/discussionApiUrl';
import { trails } from '../../fixtures/manual/trails';
import type { DCRFrontCard } from '../types/front';
import { DynamicPackage } from './DynamicPackage';
import { FrontSection } from './FrontSection';
import { UKLocalElectionTracker as UKLocalElectionTrackerComponent } from './UKLocalElectionTracker';

const meta = {
	title: 'Components/UK Local Election Tracker',
	component: UKLocalElectionTrackerComponent,
} satisfies Meta<typeof UKLocalElectionTrackerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const snap: DCRFrontCard = {
	format: {
		design: ArticleDesign.Standard,
		theme: Pillar.News,
		display: ArticleDisplay.Standard,
	},
	url: '',
	headline: '',
	showQuotedHeadline: false,
	dataLinkName: '',
	discussionApiUrl: '',
	isExternalLink: true,
	embedUri:
		'https://content.guardianapis.com/atom/interactive/interactives/2024/04/local-elections-tracker/local-elections-tracker-2024',
	showLivePlayable: false,
};

export const UKLocalElectionTracker = {} satisfies Story;

export const DynamoContainer = {
	render: () => (
		<FrontSection
			title="Dynamic Package"
			showTopBorder={true}
			discussionApiUrl={discussionApiUrl}
			editionId={'UK'}
			containerPalette="EventPalette"
		>
			<DynamicPackage
				groupedTrails={{
					huge: [],
					veryBig: [],
					big: [],
					standard: trails.slice(1, 4),
					snap: [snap],
				}}
				absoluteServerTimes={true}
				showAge={true}
				containerPalette="EventPalette"
				imageLoading="eager"
			/>
		</FrontSection>
	),
} satisfies Story;

export const IOSWebView = {
	parameters: {
		chromatic: {
			modes: {
				'light mobile': allModes['light mobile'],
				'dark mobile': allModes['dark mobile'],
			},
		},
		viewport: {
			defaultViewport: 'mobile',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ marginLeft: '-10px' }} className={'ios'}>
				<Story />
			</div>
		),
	],
} satisfies Story;

export const AndroidWebView = {
	parameters: {
		chromatic: {
			modes: {
				'light mobile': allModes['light mobile'],
				'dark mobile': allModes['dark mobile'],
			},
		},
		viewport: {
			defaultViewport: 'mobile',
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{ backgroundColor: 'white', margin: '10px' }}
				className={'android'}
			>
				<Story />
			</div>
		),
	],
} satisfies Story;
