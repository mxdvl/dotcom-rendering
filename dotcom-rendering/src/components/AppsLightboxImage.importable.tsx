import { css } from '@emotion/react';
import { type RoleType } from '../types/content';
import { Picture } from './Picture';

type Props = {
	currentIndex: number;
	role: RoleType;
	format: ArticleFormat;
	master: string;
	alt: string;
	height: number;
	width: number;
	isMainMedia?: boolean;
	isLazy?: boolean;
};

export const AppsLightboxImage = ({
	currentIndex,
	role,
	format,
	master,
	alt,
	height,
	width,
	isMainMedia = false,
	isLazy = true,
}: Props) => {
	const hasLightbox = currentIndex !== -1;
	const picture = (
		<Picture
			role={role}
			format={format}
			master={master}
			alt={alt}
			width={width}
			height={height}
			isLazy={isLazy}
			isMainMedia={isMainMedia}
		/>
	);
	return hasLightbox ? (
		<button
			type="button"
			css={css`
				border: none;
				background: none;
				padding: 0;
				width: 100%;
				height: 100%;
			`}
		>
			{picture}
		</button>
	) : (
		picture
	);
};
