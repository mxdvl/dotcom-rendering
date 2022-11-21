import { css } from '@emotion/react';
import { from, until } from '@guardian/source-foundations';
import type {
	DCRContainerPalette,
	DCRSupportingContent,
} from '../../types/front';
import { CardHeadline } from './CardHeadline';

type Alignment = 'vertical' | 'horizontal';

type Props = {
	supportingContent: DCRSupportingContent[];
	alignment: Alignment;
	containerPalette?: DCRContainerPalette;
	isDynamo?: true;
	parentFormat?: ArticleFormat;
};

const wrapperStyles = css`
	position: relative;
	display: flex;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
`;

const directionStyles = (alignment: Alignment) => {
	switch (alignment) {
		case 'horizontal':
			return css`
				flex-direction: column;
				${from.phablet} {
					flex-direction: row;
				}
			`;
		case 'vertical':
			return css`
				flex-direction: column;
			`;
	}
};

const liStyles = css`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-top: 2px;
	position: relative;
	margin-top: 8px;
	${from.phablet} {
		margin-bottom: 4px;
	}
`;

const leftMargin = css`
	${from.desktop} {
		margin-left: 10px;
	}
`;

const bottomMargin = css`
	${until.phablet} {
		margin-bottom: 8px;
	}
`;

const dynamoLiStyles = css`
	margin-left: 10px;
	margin-bottom: 12px;
	padding-top: 5px;
	background-color: rgba(237, 237, 237, 0.9);
	&:first-of-type {
		margin-left: 0px;
	}
	padding: 0.3125rem 0.3125rem 0.625rem;
`;

const dynamoWrapperStyles = css`
	display: flex;
	position: absolute;
	justify-content: space-between;
	bottom: 0;
	right: 0;
	margin-left: 5px;
	margin-right: 5px;
	flex-direction: column;
	${from.phablet} {
		flex-direction: row;
	}
`;

export const SupportingContent = ({
	supportingContent,
	alignment,
	containerPalette,
	isDynamo,
}: Props) => {
	return isDynamo ? (
		<ul css={[dynamoWrapperStyles]}>
			{supportingContent.map((subLink: DCRSupportingContent) => {
				// The model has this property as optional but it is very likely
				// to exist
				if (!subLink.headline) return null;
				return (
					<li key={subLink.url} css={[dynamoLiStyles]}>
						<CardHeadline
							format={subLink.format}
							size="tiny"
							showSlash={false}
							showLine={true}
							linkTo={subLink.url}
							containerPalette={containerPalette}
							isDynamo={isDynamo}
							headlineText={subLink.headline}
							kickerText={subLink.kickerText}
						/>
					</li>
				);
			})}
		</ul>
	) : (
		<ul css={[wrapperStyles, directionStyles(alignment)]}>
			{supportingContent.map((subLink: DCRSupportingContent, index) => {
				// The model has this property as optional but it is very likely
				// to exist
				if (!subLink.headline) return null;
				const shouldPadLeft = index > 0 && alignment === 'horizontal';
				return (
					<li
						key={subLink.url}
						css={[
							liStyles,
							shouldPadLeft && leftMargin,
							index === supportingContent.length - 1 &&
								bottomMargin,
						]}
					>
						<CardHeadline
							format={subLink.format}
							size="tiny"
							showSlash={false}
							showLine={true}
							linkTo={subLink.url}
							containerPalette={containerPalette}
							isDynamo={isDynamo}
							headlineText={subLink.headline}
							kickerText={subLink.kickerText}
						/>
					</li>
				);
			})}
		</ul>
	);
};
