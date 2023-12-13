// This file contains an array of elements, but only exposes one.

import { css } from '@emotion/react';

const style = css`
	height: 1em;
`;

export const BigNumber = ({ index }: { index: number }) => {
	const numbers = [
		<svg key={0} css={style} viewBox="0 0 40 40">
			<path d="M17 40C7.8 40 0 33.2 0 20.2 0 6.6 8.1 0 17.3 0 26.4 0 34 6.5 34 19.9S26.3 40 17 40zm.1-1c4 0 5.2-6.1 5.2-18.7C22.3 7 21 1.1 17.1 1.1c-4 0-5.4 6-5.4 18.7 0 13 1.4 19.1 5.4 19.2z" />
		</svg>,
		<svg key={1} css={style} viewBox="-6 0 40 40">
			<path d="M0 40h21v-1l-5.4-1.6V0h-4.3L.1 5.4v1.3l5.5-1.4v32.1L0 39.1z" />
		</svg>,
		<svg key={2} css={style} viewBox="-3 0 40 40">
			<path d="M9.4 1.5c5.5 0 7.4 3.3 7.4 9s-2.4 11-8.5 16.3l-8.3 7V40h27.3l.7-7H2.8v-.2l8.5-4.3c10.5-5.2 16.4-9.7 16.4-17.3C27.7 3.8 22.5 0 13.4 0 8.6 0 4 .7.9 2v9h1l3-9c1.7-.4 3.2-.5 4.6-.5z" />
		</svg>,
		<svg key={3} css={style} viewBox="-3 0 40 40">
			<path d="M9 1.4c4.9 0 7.7 2.4 7.7 8.3 0 5.7-2.6 9-7.8 9H6.1v1.1H9c5.3 0 8.3 3 8.3 8.3 0 5.5-2.9 9.3-9.8 9.3-2.9 0-5.1-.3-7.4-1.5v1C2.7 38.7 7 40 12.5 40 22.2 40 28 35.8 28 28.9c0-6.5-5.1-9.6-15-9.7V19c9.5-.7 13.6-4.4 13.6-9.3 0-6.4-4.4-9.7-13.8-9.7-4 0-8.5.8-11.4 1.7v8.5h1.1l2.4-8.4A21 21 0 0 1 9 1.4z" />
		</svg>,
		<svg key={4} css={style} viewBox="0 0 40 40">
			<path d="M12.5 40v-1l4.3-1.3v-9.2H0v-1L18.7 0h8.1v27.4H31v1.1h-4.2v9.2l3.7 1.4v.9h-18zm-11-12.6h15.3v-22h-.3l-15 21.8v.2z" />
		</svg>,
		<svg key={5} css={style} viewBox="-3 0 40 40">
			<path d="M11.9 40C21.5 40 27 34.8 27 27c0-8.2-5.3-12-13-12-3.9 0-8.1 1-10.7 4l.6-11.5h20.7l.7-7.5h-22L2 20.8a12 12 0 0 1 5.7-1.3c5.5 0 8.7 2.8 8.7 8.5 0 5.8-3.3 9.1-9.6 9.1A16 16 0 0 1 0 35.5v1.3C2.6 38.6 6.8 40 11.9 40z" />
		</svg>,
		<svg key={6} css={style} viewBox="-1 0 40 40">
			<path d="M31 27c0 7.3-5 13-15 13C5 40 0 32.3 0 21 0 6.4 7.9 0 18.6 0a17 17 0 0 1 9.7 2.6v1.1a12 12 0 0 0-6-1.3c-7.8 0-11 5.3-11.6 16.2a14 14 0 0 1 9.6-4c7 0 10.7 5.3 10.7 12.3zm-20-4c0 11.5 1.7 16.3 5.5 16.3 3.2 0 4.5-3.2 4.5-10.7 0-6.8-1.7-9.5-5.3-9.5-1.5 0-3.4.4-4.7 1v3z" />
		</svg>,
		<svg key={7} css={style} viewBox="-3 0 40 40">
			<path d="M3.4 40h11L28 6V0H.6L0 12.3h1.1L3 7.5h23v.3z" />
		</svg>,
		<svg key={8} css={style} viewBox="-2 0 40 40">
			<path d="M29 29.5C29 35.9 23.7 40 14.1 40 4.5 40 0 36.3 0 30.5c0-5 4.2-8.3 9.1-9.3-5-3-8-6.4-8-11C1.2 3.8 6.2 0 14.8 0c9.2 0 13 3.5 13 8.2 0 5-4.2 7.6-9.2 8.6l1.6.9c5.5 3 8.9 5.8 8.9 11.8zM15 14.7l2.2 1.3c1.6-1.9 2.6-4.3 2.6-7.7 0-4.8-2-7.2-5.3-7.2-3.7 0-5.7 2.3-5.7 6 0 3.8 2.6 5.7 6.1 7.6zM8.1 30.4c0 5.2 2.1 8.5 6.4 8.5 4 0 6.4-2.6 6.4-6.9 0-3.7-2.7-5.5-6.2-7.5l-4-2.4a12.8 12.8 0 0 0-2.6 8.3z" />
		</svg>,
		<svg key={9} css={style} viewBox="-1 0 40 40">
			<path d="M31 19c0 14.7-7.9 21-18.6 21C8 40 4 38.8 2.2 37.4v-1.1c1.8 1 4 1.3 6.5 1.3 7.8 0 11-5.3 11.6-16.2a14 14 0 0 1-9.6 4C3.7 25.5 0 20.2 0 13.2 0 5.7 5 0 15 0c11 0 16 7.7 16 19zm-20.6-7.3c0 7 1.7 9.5 5.3 9.5 1.5 0 3.4-.3 4.7-1v-2.8C20.4 5.8 18.7 1 15 1c-3.2 0-4.5 3.1-4.5 10.6z" />
		</svg>,
		<svg key={10} css={style} viewBox="0 0 54 40">
			<path d="M0 40h21v-1l-5.4-1.6V0h-4.3L.1 5.4v1.3l5.5-1.4v32.1L0 39.1zm37 0c-9.2 0-17-6.8-17-19.8C20 6.6 28.1 0 37.3 0 46.4 0 54 6.5 54 19.9 54 33.3 46.3 40 37 40zm.1-1c4 0 5.2-6.1 5.2-18.7C42.3 7 41 1.1 37.1 1.1c-4 0-5.4 6-5.4 18.7 0 13 1.4 19.1 5.4 19.1z" />
		</svg>,
	];

	return numbers[index] ?? null;
};