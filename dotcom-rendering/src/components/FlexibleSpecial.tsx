import { css } from '@emotion/react';
import { space } from '@guardian/source/foundations';
import { palette } from '../palette';
import type {
	DCRContainerPalette,
	DCRFrontCard,
	DCRGroupedTrails,
} from '../types/front';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';
import type { Loading } from './CardPicture';
import { FrontCard } from './FrontCard';

type Props = {
	groupedTrails: DCRGroupedTrails;
	imageLoading: Loading;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	absoluteServerTimes: boolean;
};

const topBarStyles = css`
	border-top: 1px solid ${palette('--card-border-top')};
	content: '';
	z-index: 2;
	width: 100%;
	margin: 0 10px;
	padding-bottom: ${space[2]}px;
	background-color: unset;
`;

export const OneCardLayout = ({
	cards,
	containerPalette,
	showAge,
	absoluteServerTimes,
	imageLoading,
}: {
	cards: DCRFrontCard[];
	imageLoading: Loading;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	absoluteServerTimes: boolean;
}) => {
	if (!cards[0]) return null;

	return (
		<UL padBottom={true}>
			<LI padSides={true}>
				<FrontCard
					trail={cards[0]}
					containerPalette={containerPalette}
					containerType="flexible/special"
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					headlineSize="large"
					headlineSizeOnMobile="medium"
					imagePositionOnDesktop="right"
					imagePositionOnMobile="left"
					imageSize="medium"
					trailText={cards[0].trailText}
					supportingContentAlignment="horizontal"
					imageLoading={imageLoading}
				/>
			</LI>
		</UL>
	);
};

const TwoCardOrFourCardLayout = ({
	cards,
	containerPalette,
	showAge,
	absoluteServerTimes,
	showImage = true,
	padBottom,
	imageLoading,
}: {
	cards: DCRFrontCard[];
	imageLoading: Loading;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	absoluteServerTimes: boolean;
	showImage?: boolean;
	padBottom?: boolean;
}) => {
	//TODO : Rename isTwoCards to a better name
	const isTwoCards = cards.length <= 2;
	return (
		<>
			<div css={topBarStyles} />
			<UL direction="row" padBottom={padBottom}>
				{cards.map((card, cardIndex) => {
					return (
						<LI
							stretch={false}
							percentage={isTwoCards ? '50%' : '25%'}
							key={card.url}
							padSides={true}
							showDivider={cardIndex > 0}
						>
							<FrontCard
								trail={card}
								kickerText={card.kickerText}
								containerPalette={containerPalette}
								containerType="flexible/special"
								showAge={showAge}
								absoluteServerTimes={absoluteServerTimes}
								image={showImage ? card.image : undefined}
								imageLoading={imageLoading}
								imagePositionOnDesktop={
									isTwoCards ? 'left' : 'bottom'
								}
							/>
						</LI>
					);
				})}
			</UL>
		</>
	);
};

export const FlexibleSpecial = ({
	groupedTrails,
	containerPalette,
	showAge,
	absoluteServerTimes,
	imageLoading,
}: Props) => {
	const snaps = [...groupedTrails.snap].slice(0, 1);
	const splash = [...groupedTrails.standard].slice(0, 1);
	const cards = [...groupedTrails.standard].slice(1, 5);

	return (
		<>
			<OneCardLayout
				cards={snaps}
				containerPalette={containerPalette}
				showAge={showAge}
				absoluteServerTimes={absoluteServerTimes}
				imageLoading={imageLoading}
			/>

			<OneCardLayout
				cards={splash}
				containerPalette={containerPalette}
				showAge={showAge}
				absoluteServerTimes={absoluteServerTimes}
				imageLoading={imageLoading}
			/>

			<TwoCardOrFourCardLayout
				cards={cards}
				containerPalette={containerPalette}
				showAge={showAge}
				absoluteServerTimes={absoluteServerTimes}
				imageLoading={imageLoading}
			/>
		</>
	);
};