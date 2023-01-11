import { css } from '@emotion/react';
import { Star } from '../../../static/icons/Star';
import type { RatingSizeType } from '../../../types/content';

const starWrapper = css`
	display: inline-block;
	padding: 1px;
`;

const determineSize = (size: RatingSizeType) => {
	switch (size) {
		case 'small':
			return css`
				padding: 1px;
				svg {
					width: 12px;
					height: 12px;
				}
			`;
		case 'medium':
			return css`
				padding: 1px;
				svg {
					width: 16px;
					height: 16px;
				}
			`;
		case 'large':
			return css`
				padding: 2px 1px 2px 2px;
				svg {
					width: 20px;
					height: 20px;
				}
			`;
	}
};

type Props = {
	rating: number;
	size: RatingSizeType;
};

export const StarRating = ({ rating, size }: Props) => (
	<div css={determineSize(size)}>
		<div css={starWrapper}>
			<Star starId={`${size}1`} isEmpty={rating < 1} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}2`} isEmpty={rating < 2} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}3`} isEmpty={rating < 3} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}4`} isEmpty={rating < 4} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}5`} isEmpty={rating < 5} />
		</div>
	</div>
);
