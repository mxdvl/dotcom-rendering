// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '../../articleFormat';
import { headlineLight34 } from '@guardian/source/foundations';
import { text } from 'palette';
import { darkModeCss } from 'styles';
import type { DefaultProps } from './HeadingTwo.defaults';
import DefaultHeadingTwo from './HeadingTwo.defaults';

// ----- Component ----- //

const styles = (
	format: ArticleFormat,
	isEditions: boolean,
): SerializedStyles => css`
	${headlineLight34}

	${isEditions
		? null
		: darkModeCss`
		color: ${text.headingTwoDark(format)};
	`}
`;

const ImmersiveHeadingTwo = (props: DefaultProps) => (
	<DefaultHeadingTwo
		{...props}
		css={styles(props.format, props.isEditions)}
	/>
);

// ----- Exports ----- //

export default ImmersiveHeadingTwo;
