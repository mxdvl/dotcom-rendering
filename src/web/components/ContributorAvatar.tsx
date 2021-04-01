import React from 'react';
import { css } from 'emotion';
import { from } from '@guardian/src-foundations/mq';

const imageStyles = css`
	height: 9.375rem;

	${from.mobileLandscape} {
		height: 11.25rem;
	}
`;

export const ContributorAvatar: React.FC<{
	imageSrc: string;
	imageAlt: string;
}> = ({ imageSrc, imageAlt }) => {
	return <img src={imageSrc} alt={imageAlt} className={imageStyles} />;
};
