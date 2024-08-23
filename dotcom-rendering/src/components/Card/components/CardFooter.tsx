import { css } from '@emotion/react';
import { type ArticleFormat, ArticleSpecial } from '@guardian/libs';
import { palette, space, textSansBold12 } from '@guardian/source/foundations';

type Props = {
	format: ArticleFormat;
	age?: JSX.Element;
	commentCount?: JSX.Element;
	cardBranding?: JSX.Element;
	supportingContent?: JSX.Element;
	leftAlign?: boolean;
	topAlign?: boolean;
	showLivePlayable?: boolean;
};

const spacing = (leftAlign: boolean) => css`
	display: flex;
	justify-content: ${leftAlign ? 'flex-start' : 'space-between'};
	align-items: center;
`;

const margin = (topAlign: boolean) => css`
	/** margin-top: auto will push the last child to the bottom of the flex container */
	margin-top: ${topAlign ? `${space[3]}px` : `auto`};
`;

const fontStyles = css`
	${textSansBold12}
`;

const flexEnd = css`
	display: flex;
	justify-content: flex-end;
`;

const borderStyles = css`
	> {
		/* The border is applied only to the second child, ensuring that no dividing line is added when there is only one child in the container. */
		:nth-child(2) {
			margin-left: ${space[1]}px;
			padding-left: ${space[1]}px;
			border-left: 1px solid ${palette.neutral[60]};
		}
	}
`;

export const CardFooter = ({
	format,
	age,
	commentCount,
	cardBranding,
	supportingContent,
	leftAlign = false,
	topAlign = false,
	showLivePlayable = false,
}: Props) => {
	if (showLivePlayable) return null;

	if (format.theme === ArticleSpecial.Labs && cardBranding) {
		return <footer css={margin(topAlign)}>{cardBranding}</footer>;
	}

	if (age) {
		return (
			<footer css={margin(topAlign)}>
				{supportingContent}
				<div
					css={[
						spacing(leftAlign),
						fontStyles,
						age && commentCount && borderStyles,
					]}
				>
					{age}
					{commentCount}
				</div>
			</footer>
		);
	}

	return (
		<footer css={margin(topAlign)}>
			{supportingContent}
			<div css={[leftAlign ? spacing(leftAlign) : flexEnd, fontStyles]}>
				<>{commentCount}</>
			</div>
		</footer>
	);
};
