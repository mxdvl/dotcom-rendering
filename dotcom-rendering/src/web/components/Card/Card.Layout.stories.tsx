/* eslint-disable react/jsx-props-no-spreading */

import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';

import { ElementContainer } from '../ElementContainer';
import { Flex } from '../Flex';
import { LeftColumn } from '../LeftColumn';
import { ArticleContainer } from '../ArticleContainer';

import { Card } from './Card';
import { UL } from './components/UL';
import { LI } from './components/LI';
import { images, headlines, standfirsts, kickers } from './Card.mocks';

export default {
	component: Card,
	title: 'Components/Card/Layouts',
	parameters: {
		viewport: {
			// This has the effect of turning off the viewports addon by default
			defaultViewport: 'doesNotExist',
		},
	},
};

export const News = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row" bottomMargin={true}>
					<LI percentage="75%" showDivider={false} padSides={true}>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[0]}
							headlineSize="large"
							kickerText={kickers[4]}
							imageUrl={images[0]}
							imagePosition="right"
							imageSize="large"
							standfirst={standfirsts[0]}
						/>
					</LI>
					<LI
						percentage="25%"
						showDivider={true}
						showTopMarginWhenStacked={true}
						padSides={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[1]}
							headlineSize="large"
							kickerText={kickers[0]}
							imageUrl={images[5]}
							imagePosition="top"
							standfirst={standfirsts[0]}
						/>
					</LI>
				</UL>
				<UL direction="row">
					<LI percentage="50%" padSides={true}>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Culture,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[2]}
							kickerText={kickers[1]}
							imageUrl={images[3]}
							imagePosition="top"
							standfirst={standfirsts[0]}
						/>
					</LI>
					<LI
						percentage="25%"
						showDivider={true}
						showTopMarginWhenStacked={true}
						padSides={true}
					>
						<UL direction="column">
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Opinion,
										design: ArticleDesign.Editorial,
									}}
									headlineText={headlines[3]}
									kickerText="Editorial"
									imageUrl={images[6]}
									imagePosition="top"
									commentCount={82224}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticleSpecial.SpecialReport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[4]}
									headlineSize="small"
								/>
							</LI>
							<LI bottomMargin={false} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.News,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[5]}
									headlineSize="small"
									kickerText={kickers[3]}
								/>
							</LI>
						</UL>
					</LI>
					<LI
						percentage="25%"
						showDivider={true}
						showTopMarginWhenStacked={true}
						padSides={true}
					>
						<UL direction="column">
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[6]}
									headlineSize="small"
									kickerText={kickers[3]}
									commentCount={26}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.News,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[7]}
									headlineSize="small"
									kickerText={kickers[1]}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.News,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[8]}
									headlineSize="small"
									kickerText={kickers[0]}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.News,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[9]}
									headlineSize="small"
									kickerText={kickers[2]}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Lifestyle,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[10]}
									headlineSize="small"
									kickerText={kickers[0]}
								/>
							</LI>
							<LI bottomMargin={false} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.News,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[11]}
									headlineSize="small"
									kickerText={kickers[3]}
									commentCount={44}
								/>
							</LI>
						</UL>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
News.story = { name: 'News' };

export const InDepth = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row">
					<LI percentage="50%" padSides={true}>
						<UL direction="column">
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[6]}
									headlineSize="medium"
									kickerText={kickers[4]}
									imageUrl={images[5]}
									imagePosition="left"
									imageSize="small"
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[6]}
									headlineSize="small"
									kickerText={kickers[3]}
									imageUrl={images[6]}
									imagePosition="left"
									imageSize="small"
									commentCount={864}
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[6]}
									headlineSize="small"
									kickerText={kickers[2]}
									imageUrl={images[3]}
									imagePosition="left"
									imageSize="small"
								/>
							</LI>
							<LI bottomMargin={true} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[2]}
									headlineSize="small"
									kickerText={kickers[1]}
									imageUrl={images[2]}
									imagePosition="left"
									imageSize="small"
								/>
							</LI>
							<LI bottomMargin={false} stretch={true}>
								<Card
									linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
									format={{
										display: ArticleDisplay.Standard,
										theme: ArticlePillar.Sport,
										design: ArticleDesign.Standard,
									}}
									headlineText={headlines[7]}
									headlineSize="small"
									kickerText={kickers[0]}
									imageUrl={images[1]}
									imagePosition="left"
									imageSize="small"
								/>
							</LI>
						</UL>
					</LI>
					<LI
						percentage="50%"
						showDivider={true}
						showTopMarginWhenStacked={true}
						padSides={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Opinion,
								design: ArticleDesign.Comment,
							}}
							headlineText={headlines[7]}
							headlineSize="large"
							kickerText={kickers[0]}
							imageUrl={images[0]}
							imagePosition="top"
							webPublicationDate="2019-11-11T09:45:30.000Z"
							commentCount={3694}
						/>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
InDepth.story = { name: 'In Depth' };

export const Related = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row" bottomMargin={true}>
					<LI padSides={true} percentage="33%">
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Sport,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[7]}
							headlineSize="medium"
							kickerText={kickers[3]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[5]}
							imagePosition="top"
						/>
					</LI>
					<LI
						percentage="33%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Sport,
								design: ArticleDesign.DeadBlog,
							}}
							headlineText={headlines[8]}
							headlineSize="medium"
							kickerText={kickers[0]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[6]}
							imagePosition="top"
							commentCount={222864}
						/>
					</LI>
					<LI
						percentage="33%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.SpecialReport,
								design: ArticleDesign.Comment,
							}}
							headlineText={headlines[8]}
							headlineSize="medium"
							kickerText={kickers[1]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[4]}
							imagePosition="top"
						/>
					</LI>
				</UL>
				<UL direction="row">
					<LI padSides={true} percentage="25%">
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[9]}
							headlineSize="small"
							kickerText={kickers[0]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Sport,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[10]}
							headlineSize="small"
							kickerText={kickers[2]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Culture,
								design: ArticleDesign.Interview,
							}}
							headlineText={headlines[1]}
							headlineSize="small"
							kickerText={kickers[1]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Lifestyle,
								design: ArticleDesign.Feature,
							}}
							headlineText={headlines[3]}
							headlineSize="small"
							kickerText={kickers[0]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
						/>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
Related.story = { name: 'Related Stories' };

export const Spotlight = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<Card
					linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
					format={{
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Sport,
						design: ArticleDesign.Feature,
					}}
					headlineText={headlines[11]}
					headlineSize="large"
					kickerText={kickers[1]}
					webPublicationDate="2019-11-11T09:45:30.000Z"
					imageUrl={images[0]}
					imagePosition="right"
					imageSize="jumbo"
				/>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
Spotlight.story = { name: 'Spotlight' };

export const Quad = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row">
					<LI percentage="25%" padSides={true}>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Opinion,
								design: ArticleDesign.Comment,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							showQuotes={true}
							byline="George Monbiot"
							kickerText={kickers[3]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							avatar={{
								src: 'https://i.guim.co.uk/img/uploads/2017/10/06/George-Monbiot,-L.png?width=173&quality=85&auto=format&fit=max&s=be5b0d3f3aa55682e4930057fc3929a3',
								alt: 'Avatar alt text',
							}}
							showClock={true}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.SpecialReport,
								design: ArticleDesign.LiveBlog,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
							commentCount={30989}
							showPulsingDot={true}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							kickerText={kickers[0]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
							commentCount={0}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							kickerText={kickers[2]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
						/>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
Quad.story = { name: 'Four with image top' };

export const Media = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row">
					<LI
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Culture,
								design: ArticleDesign.Media,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
							mediaType="Gallery"
							commentCount={0}
						/>
					</LI>
					<LI
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.News,
								design: ArticleDesign.Media,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							kickerText={kickers[0]}
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
							mediaType="Audio"
							mediaDuration={35999}
							commentCount={864}
						/>
					</LI>
					<LI
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticlePillar.Sport,
								design: ArticleDesign.Media,
							}}
							headlineText={headlines[11]}
							headlineSize="medium"
							kickerText={kickers[1]}
							webPublicationDate="2019-11-11T09:45:30.000Z"
							imageUrl={images[0]}
							imagePosition="top"
							showClock={true}
							mediaType="Video"
							mediaDuration={59}
						/>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
Media.story = { name: 'Media' };

const labsBranding1: Branding = {
	sponsorName: 'Saint Agur',
	logo: {
		src: 'https://static.theguardian.com/commercial/sponsor/22/Mar/2021/c476c5ec-9c79-417f-b10f-e3e48c0dfb72-Saint Agur logo.png',
		link: 'https://en.wikipedia.org/wiki/Saint_Agur_Blue',
		label: 'Paid for by',
		dimensions: {
			width: 280,
			height: 180,
		},
	},
	aboutThisLink:
		'https://www.theguardian.com/info/2016/jan/25/content-funding',
};

const labsBranding2: Branding = {
	sponsorName: "Lindeman's",
	logo: {
		src: `https://static.theguardian.com/commercial/sponsor/22/Mar/2021/16adc23f-5a54-4c16-b5a8-85110bb3d6ec-Lindeman's_New_Badge_Brandmark_Gold.png`,
		link: 'https://www.lindemans.com/en-gb',
		label: 'Paid for by',
		dimensions: {
			width: 280,
			height: 180,
		},
	},
	aboutThisLink:
		'https://www.theguardian.com/info/2016/jan/25/content-funding',
};

const labsBranding3: Branding = {
	sponsorName: 'DfE',
	logo: {
		src: `https://static.theguardian.com/commercial/sponsor/20/Jan/2021/103af03d-6b40-475b-9595-dff2ab20a0a4-DfE-lockup-Online-TIM.png`,
		link: 'https://www.gov.uk/government/organisations/department-for-education',
		label: 'Paid for by',
		dimensions: {
			width: 280,
			height: 180,
		},
	},
	aboutThisLink:
		'https://www.theguardian.com/info/2016/jan/25/content-funding',
};

const labsBranding4: Branding = {
	sponsorName: 'Thatchers',
	logo: {
		src: `https://static.theguardian.com/commercial/sponsor/23/Mar/2021/45593146-7e57-4713-8314-2bca9674212b-Thatchers_strap.png`,
		link: 'https://www.thatcherscider.co.uk/',
		label: 'Paid for by',
		dimensions: {
			width: 280,
			height: 180,
		},
	},
	aboutThisLink:
		'https://www.theguardian.com/info/2016/jan/25/content-funding',
};

export const Labs = () => (
	<ElementContainer>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<ArticleContainer
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
			>
				<UL direction="row">
					<LI percentage="25%" padSides={true}>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.Labs,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[12]}
							headlineSize="medium"
							imageUrl={images[0]}
							imagePosition="top"
							branding={labsBranding1}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.Labs,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[14]}
							headlineSize="medium"
							imageUrl={images[1]}
							imagePosition="top"
							branding={labsBranding2}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.Labs,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[13]}
							headlineSize="medium"
							imageUrl={images[3]}
							imagePosition="top"
							branding={labsBranding3}
						/>
					</LI>
					<LI
						percentage="25%"
						padSides={true}
						showDivider={true}
						showTopMarginWhenStacked={true}
					>
						<Card
							linkTo="/lifeandstyle/2018/mar/10/meera-sodhas-vegan-recipe-for-peanut-and-broccoli-pad-thai"
							format={{
								display: ArticleDisplay.Standard,
								theme: ArticleSpecial.Labs,
								design: ArticleDesign.Standard,
							}}
							headlineText={headlines[15]}
							headlineSize="medium"
							imageUrl={images[2]}
							imagePosition="top"
							branding={labsBranding4}
						/>
					</LI>
				</UL>
			</ArticleContainer>
		</Flex>
	</ElementContainer>
);
Labs.story = { name: 'Labs' };
