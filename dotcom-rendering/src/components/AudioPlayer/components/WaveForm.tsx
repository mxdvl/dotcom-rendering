import { useId, useMemo } from 'react';

/**
 * Pseudo random number generator generator ([linear congruential
 * generator](https://en.wikipedia.org/wiki/Linear_congruential_generator)).
 *
 * I'll be honest, I don't fully understand it, but it creates a pseudo random
 * number generator based on a seed, in this case a string.
 *
 * It's deterministic, so calls to the function it returns will always return
 * the same results, given the same seed.
 *
 * Copilot helped me with it...
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 */
function* waveformGenerator(
	/** the URL of the audio source file */
	url: string,
	/** the number of bars to generate, i.e. the length of the array */
	bars: number,
	/** a destination range for values */
	[min, max]: [number, number],
) {
	const modulus = 2147483648;
	/** a sort of hash of the URL */
	const seed = url
		.split('')
		.reduce(
			(sum, character) => (sum + character.charCodeAt(0)) % modulus,
			0,
		);
	const multiplier = 1103515245;
	const increment = 12345;

	let state = seed;
	let count = 0;
	while (count++ < bars) {
		state = (multiplier * state + increment) % modulus;
		/** Get a number in the range [0, 1] */
		const normalised = state / modulus;
		/** Compress the amplitude of the fake audio data, like a podcast would */
		const compressed = min + (max - min) * normalised;
		/** sub-pixel precision is pointless data to send over the wire */
		const rounded = Math.round(compressed);

		yield rounded;
	}
}

type Theme = {
	progress?: string;
	buffer?: string;
	wave?: string;
};

const defaultTheme: Theme = {
	progress: 'green',
	buffer: 'orange',
	wave: 'grey',
};

type Props = {
	src: string;
	progress: number;
	buffer: number;
	theme?: Theme;
	gap?: number;
	bars?: number;
	barWidth?: number;
} & React.SVGProps<SVGSVGElement>;

export const WaveForm = ({
	src,
	progress,
	buffer,
	theme: userTheme,
	gap = 1,
	bars = 150,
	barWidth = 4,
	...props
}: Props) => {
	// memoise the waveform data so they aren't recalculated on every render
	const barHeights = useMemo(
		() => Array.from(waveformGenerator(src, bars, [60, 100])),
		[src, bars],
	);
	const totalWidth = useMemo(
		() => bars * (barWidth + gap) - gap,
		[bars, barWidth, gap],
	);
	const theme = useMemo(
		() => ({ ...defaultTheme, ...userTheme }),
		[userTheme],
	);

	// needed in case we have multiple waveforms on the same page
	const id = useId();

	return (
		<svg
			viewBox={`0 0 ${totalWidth} 100`}
			preserveAspectRatio="none"
			width={totalWidth}
			height={100}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			{/* the base bars we'll use to create the variants we need below */}
			<defs>
				<g id={`bars-${id}`}>
					{barHeights.map((barHeight, index) => {
						const x = index * (barWidth + gap);
						return (
							<rect
								key={x}
								x={x}
								y={100 - barHeight} // place it on the bottom
								width={barWidth}
								height={barHeight}
							/>
						);
					})}
				</g>

				<clipPath id={`buffer-clip-path-${id}`}>
					<rect height="100" width={(buffer / 100) * totalWidth} />
				</clipPath>

				<clipPath id={`progress-clip-path-${id}`}>
					<rect height="100" width={(progress / 100) * totalWidth} />
				</clipPath>
			</defs>

			{/* default wave colours */}
			<use href={`#bars-${id}`} fill={theme.wave} />

			{/* buffer wave */}
			<use
				href={`#bars-${id}`}
				clipPath={`url(#buffer-clip-path-${id})`}
				fill={theme.buffer}
			/>

			{/* progress wave */}
			<use
				href={`#bars-${id}`}
				clipPath={`url(#progress-clip-path-${id})`}
				fill={theme.progress}
			/>
		</svg>
	);
};