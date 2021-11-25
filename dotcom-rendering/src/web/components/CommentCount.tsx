import { css } from '@emotion/react';

import { textSans } from '@guardian/src-foundations/typography';
import { between, until } from '@guardian/src-foundations/mq';

import { formatCount } from '@root/src/web/lib/formatCount';
import CommentIcon from '@frontend/static/icons/comment.svg';
import { ArticleDesign, ArticleFormat } from '@guardian/libs';
import { neutral } from '@guardian/src-foundations';

type Props = {
	palette: Palette;
	format: ArticleFormat;
	isCommentable: boolean;
	commentCount?: number;
	setIsExpanded: (isExpanded: boolean) => void;
};

const containerStyles = (palette: Palette) => css`
	display: flex;
	align-self: flex-end;
	flex-direction: column;
	${textSans.medium()};
	font-weight: bold;
	color: ${palette.fill.commentCount};
	padding-top: 5px;
`;

const liveblogContainerColourStyles = css`
	${until.desktop} {
		color: ${neutral[100]};
	}
`;

const iconContainerStyles = css`
	height: 15px;
	margin: 0;
	text-align: right;
	margin-bottom: -2px;
	svg {
		height: 18px;
		width: 18px;
	}
`;

const iconStyles = (palette: Palette) => css`
	fill: ${palette.fill.commentCount};
`;

const liveblogIconStyles = css`
	${until.desktop} {
		fill: ${neutral[100]};
	}
`;

const longStyles = css`
	display: block;

	${between.leftCol.and.wide} {
		display: none;
	}
`;

const shortStyles = css`
	display: none;

	${between.leftCol.and.wide} {
		display: block;
	}
`;

const linkStyles = css`
	color: inherit;
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
	:visited {
		color: inherit;
	}
`;

export const CommentCount = ({
	isCommentable,
	commentCount,
	palette,
	format,
	setIsExpanded,
}: Props) => {
	if (!isCommentable) return null;

	const { short, long } = formatCount(commentCount);

	return (
		<data
			css={[
				containerStyles(palette),
				format.design === ArticleDesign.LiveBlog &&
					liveblogContainerColourStyles,
			]}
			data-cy="comment-counts"
			value={`${long} comments on this article`}
		>
			<a
				href="#comments"
				css={linkStyles}
				aria-label={`${short} Comments`}
				onClick={() => setIsExpanded(true)}
			>
				<div
					css={[
						iconContainerStyles,
						format.design === ArticleDesign.LiveBlog &&
							liveblogIconStyles,
					]}
				>
					<CommentIcon css={iconStyles(palette)} />
				</div>
				<div
					data-testid="long-comment-count"
					css={longStyles}
					aria-hidden="true"
				>
					{long}
				</div>
				<div
					data-testid="short-comment-count"
					css={shortStyles}
					aria-hidden="true"
				>
					{short}
				</div>
			</a>
		</data>
	);
};
