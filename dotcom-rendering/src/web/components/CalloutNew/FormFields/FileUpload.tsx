import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import {
	palette,
	space,
	textSans,
	remHeight,
	visuallyHidden,
} from '@guardian/source-foundations';
import React, { useState } from 'react';
import { decidePalette } from '../../../lib/decidePalette';
import { stringifyFileBase64 } from '../../../lib/stringifyFileBase64';
import { FieldLabel } from './FieldLabel';

const errorMessagesStyles = css`
	padding-top: ${space[2]}px;
	color: ${palette.error};
	${textSans.small({ fontWeight: 'bold' })};
`;

type Props = {
	format: ArticleFormat;
	formField: CampaignFieldFile;
	formData: { [key in string]: any };
	setFormData: React.Dispatch<React.SetStateAction<{ [x: string]: any }>>;
};

const customUpload = (format: ArticleFormat): SerializedStyles => css`
	${textSans.small()};
	color: ${decidePalette(format).text.richLink};
	border: 1px solid ${decidePalette(format).text.richLink};
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease-in-out 0s;
	text-decoration: none;
	white-space: nowrap;
	height: ${remHeight.ctaXsmall}rem;
	min-height: ${remHeight.ctaXsmall}rem;
	padding: ${space[3]}px;
	margin: ${space[3]}px ${space[3]}px 0px 0px;
	border-radius: ${remHeight.ctaMedium}rem;
	${textSans.medium({ fontWeight: 'medium' })};
	width: fit-content;
`;

export const FileUpload = ({
	formField,
	format,
	formData,
	setFormData,
}: Props) => {
	const [error, setError] = useState('');
	const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setError('');
			try {
				const stringifiedFile = await stringifyFileBase64(
					event.target.files[0],
				);
				setFormData({
					...formData,
					[formField.id]: stringifiedFile,
				});
			} catch (e) {
				setError(
					'Sorry, there was a problem with the file you uploaded above. Check the size and type. We only accept images, pdfs and .doc or .docx files',
				);
			}
		}
	};
	return (
		<>
			<FieldLabel formField={formField} />
			<div css={customUpload(format)}>
				Choose file
				<input
					data-testid={`form-field-${formField.id}`}
					type="file"
					accept="image/*, .pdf"
					required={formField.required}
					onChange={onSelectFile}
					css={css`
						${visuallyHidden}
					`}
				/>
			</div>
			{!!error && <div css={errorMessagesStyles}>{error}</div>}
		</>
	);
};
