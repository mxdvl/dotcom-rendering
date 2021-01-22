import React from 'react';
import { css } from 'emotion';

import { space } from '@guardian/src-foundations';
import { headline, body } from '@guardian/src-foundations/typography';

import { pillarPalette } from '@root/src/lib/pillars';
import { WitnessWrapper } from '@frontend/web/components/WitnessWrapper';

type Props = {
	title: string;
	description: string;
	authorName: string;
	width: number;
	height: number;
	youtubeUrl: string;
	dateCreated: string;
	pillar: Theme;
};

const captionStyles = css`
	margin-top: ${space[3]}px;
`;

const titleStyles = (pillar: Theme) => css`
	margin-bottom: ${space[2]}px;
	color: ${pillarPalette[pillar].main};
	${headline.xxxsmall()}
`;

export const WitnessVideoBlockComponent = ({
	title,
	description,
	authorName,
	width,
	height,
	youtubeUrl,
	dateCreated,
	pillar,
}: Props) => {
	const youtubeVideoId = youtubeUrl.split('?v=')[1];
	const parsedURL = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?wmode=opaque&feature=oembed`;
	return (
		<WitnessWrapper
			authorName={authorName}
			dateCreated={dateCreated}
			pillar={pillar}
		>
			<>
				<iframe
					className={css`
						width: 100%;
					`}
					title={title}
					width={width}
					height={height}
					src={parsedURL}
				/>
				<figcaption className={captionStyles}>
					<h3
						className={titleStyles(pillar)}
						itemProp="name"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<div itemProp="description">
						<p
							className={css`
								${body.medium()}
							`}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</figcaption>
			</>
		</WitnessWrapper>
	);
};
