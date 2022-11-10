import { css } from '@emotion/react';
import { from, space, until } from '@guardian/source-foundations';
import React from 'react';
import { verticalDivider } from '../../../lib/verticalDivider';

type Direction = 'row' | 'column' | 'row-reverse';

const ulStyles = (direction: Direction) => css`
	position: relative;
	display: flex;
	flex-direction: ${direction};
	row-gap: 12px;
	${until.tablet} {
		flex-direction: column;
		width: 100%;
	}
`;

const wrapStyles = css`
	${from.tablet} {
		flex-wrap: wrap;
	}
`;

const marginBottomStyles = css`
	margin-bottom: ${space[3]}px;
`;

type Props = {
	children: React.ReactNode;
	/** Passed to flex-direction */
	direction?: Direction;
	/** If this UL is a column and not the left most column */
	showDivider?: boolean;
	/** If this UL is a row, add spacing below */
	padBottom?: boolean;
	/** Used to keep cards aligned in adjacent columns */
	wrapCards?: boolean;
	parentPercentage?: CardPercentageType;
};

export const UL = ({
	children,
	direction = 'column',
	showDivider = false,
	padBottom = false,
	wrapCards = false,
	parentPercentage,
}: Props) => {
	const childrenWithProps = React.Children.map(children, (child) => {
		// Checking isValidElement is the safe way and avoids a
		// typescript error too.
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				parentPercentage,
			} as Partial<unknown>);
		}
		return child;
	});

	return (
		<ul
			css={[
				ulStyles(direction),
				showDivider && verticalDivider,
				padBottom && marginBottomStyles,
				wrapCards && wrapStyles,
			]}
		>
			{childrenWithProps}
		</ul>
	);
};
