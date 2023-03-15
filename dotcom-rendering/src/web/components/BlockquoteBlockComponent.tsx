import { css } from '@emotion/react';
import { body } from '@guardian/source-foundations';
import { renderToString } from 'react-dom/server';
import { unwrapHtml } from '../../model/unwrapHtml';
import type { Palette } from '../../types/palette';
import { QuoteIcon } from './QuoteIcon';
import { RewrappedComponent } from './RewrappedComponent';

type Props = {
	html: string;
	palette: Palette;
	quoted?: boolean;
};

const baseBlockquoteStyles = css`
	margin-bottom: 16px;
	${body.medium()};
	font-style: italic;
	p {
		margin-bottom: 8px;
	}
`;

const simpleBlockquoteStyles = css`
	${baseBlockquoteStyles}
	margin-top: 16px;
	margin-right: 0;
	margin-bottom: 16px;
	margin-left: 33px;
`;

const quotedBlockquoteStyles = (palette: Palette) => css`
	${baseBlockquoteStyles}
	color: ${palette.text.blockquote};
`;

export const BlockquoteBlockComponent = ({ html, palette, quoted }: Props) => {
	const {
		willUnwrap: isUnwrapped,
		unwrappedHtml,
		unwrappedElement,
	} = unwrapHtml({
		fixes: [
			{ prefix: '<p>', suffix: '</p>', unwrappedElement: 'p' },
			{
				prefix: '<blockquote>',
				suffix: '</blockquote>',
				unwrappedElement: 'blockquote',
			},
			{
				prefix: '<blockquote class="quoted">',
				suffix: '</blockquote>',
				unwrappedElement: 'div',
			},
		],
		html,
	});

	if (quoted) {
		const htmlWithIcon = unwrappedHtml
			.trim()
			.replace(
				'<p>',
				`<p>${renderToString(
					<QuoteIcon colour={palette.fill.blockquoteIcon} />,
				)}`,
			);
		return (
			<>
				{/* renderToString doesn't play nicely with Emotion in React 18
				 https://github.com/emotion-js/emotion/issues/2906#issuecomment-1372035660  */}
				<div style={{ display: 'none' }}>
					<QuoteIcon colour={palette.fill.blockquoteIcon} />
				</div>
				<RewrappedComponent
					isUnwrapped={isUnwrapped}
					html={htmlWithIcon}
					tagName="blockquote"
					elCss={quotedBlockquoteStyles(palette)}
				/>
			</>
		);
	}
	return (
		<RewrappedComponent
			isUnwrapped={isUnwrapped}
			html={unwrappedHtml}
			elCss={simpleBlockquoteStyles}
			tagName={unwrappedElement}
		/>
	);
};
