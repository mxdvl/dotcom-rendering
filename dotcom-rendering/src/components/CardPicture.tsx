import { css } from '@emotion/react';
import { breakpoints, space } from '@guardian/source/foundations';
import type { ImgHTMLAttributes } from 'react';
import React from 'react';
import type { ImageSizeType } from './Card/components/ImageWrapper';
import type { ImageWidthType } from './Picture';
import { generateSources, getFallbackSource } from './Picture';

export type Loading = NonNullable<ImgHTMLAttributes<unknown>['loading']>;
export type AspectRatio = '5:3' | '5:4';

type Props = {
	imageSize: ImageSizeType;
	mainImage: string;
	loading: Loading;
	alt?: string;
	roundedCorners?: boolean;
	isCircular?: boolean;
	aspectRatio?: AspectRatio;
};

/**
 * **WIP – Some size may be unaccounted for**
 *
 * Currently, this only handles the five (5) image sizes of `ImageSizeType`.
 *
 * This method should cover all use cases with a lot more precision once
 * implemented thoroughly
 */
const decideImageWidths = (
	imageSize: ImageSizeType,
): [ImageWidthType, ...ImageWidthType[]] => {
	switch (imageSize) {
		// @TODO missing image size option
		// case 'tiny':
		// 	return [
		// 		{ breakpoint: breakpoints.mobile, width: 120 },
		// 		{ breakpoint: breakpoints.tablet, width: 130 },
		// 		{ breakpoint: breakpoints.desktop, width: 140 },
		// 	];

		case 'carousel':
			return [{ breakpoint: breakpoints.mobile, width: 220 }];

		case 'small':
			return [
				{ breakpoint: breakpoints.mobile, width: 120 },
				{ breakpoint: breakpoints.tablet, width: 160 },
				{ breakpoint: breakpoints.desktop, width: 220 },
			];

		case 'medium':
			return [
				{ breakpoint: breakpoints.mobile, width: 240 },
				{ breakpoint: breakpoints.tablet, width: 330 },
				{ breakpoint: breakpoints.desktop, width: 460 },
			];

		case 'large':
			return [
				{ breakpoint: breakpoints.mobile, width: 360 },
				{ breakpoint: breakpoints.mobileLandscape, width: 480 },
				{ breakpoint: breakpoints.tablet, width: 500 },
				{ breakpoint: breakpoints.desktop, width: 700 },
			];

		case 'jumbo':
			return [
				{ breakpoint: breakpoints.mobile, width: 360 },
				{ breakpoint: breakpoints.mobileLandscape, width: 480 },
				{ breakpoint: breakpoints.tablet, width: 680 },
				{ breakpoint: breakpoints.desktop, width: 940 },
			];
	}
};

/**
 * Used on `picture` and `img` to prevent having a line-height,
 * as these elements are which are `inline` by default.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#styling_with_css
 *
 */
const block = css`
	display: block;
`;

/**
 * On fronts, Fairground cards have an image ration of 5:4.
 * This is due to replace the existing card ratio of 5:3
 * For now, we are keeping both ratios.
 */
const decideAspectRatioStyles = (aspectRatio?: AspectRatio) => {
	return css`
		padding-top: ${aspectRatio === '5:4'
			? `${(4 / 5) * 100}%`
			: `${(3 / 5) * 100}%`};
		position: relative;
		& > * {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	`;
};

const borderRadius = css`
	& > * {
		border-radius: ${space[2]}px;
	}
`;

const circularStyles = css`
	border-radius: 100%;
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

export const CardPicture = ({
	mainImage,
	alt,
	imageSize,
	loading,
	roundedCorners,
	isCircular,
	aspectRatio,
}: Props) => {
	const sources = generateSources(
		mainImage,
		decideImageWidths(imageSize),
		aspectRatio,
	);

	const fallbackSource = getFallbackSource(sources);

	return (
		<picture
			data-size={imageSize}
			css={[
				block,
				decideAspectRatioStyles(aspectRatio),
				roundedCorners && borderRadius,
				isCircular && circularStyles,
			]}
		>
			{sources.map((source) => {
				return (
					<React.Fragment key={source.breakpoint}>
						{/* High resolution (HDPI) sources*/}
						<source
							srcSet={source.hiResUrl}
							media={`(min-width: ${source.breakpoint}px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: ${source.breakpoint}px) and (min-resolution: 120dpi)`}
						/>
						{/* Low resolution (MDPI) source*/}
						<source
							srcSet={source.lowResUrl}
							media={`(min-width: ${source.breakpoint}px)`}
						/>
					</React.Fragment>
				);
			})}

			<img
				alt={alt ?? ''}
				src={fallbackSource.lowResUrl}
				css={[block, isCircular && circularStyles]}
				loading={loading}
				data-chromatic="ignore"
			/>
		</picture>
	);
};
