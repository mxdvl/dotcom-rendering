import { breakpoints } from '@guardian/source-foundations';
import type { DCRGroupedTrails } from 'src/types/front';
import { trails } from '../../../fixtures/manual/trails';
import { ContainerLayout } from './ContainerLayout';
import { DynamicPackage } from './DynamicPackage';

const defaultGroupedTrails: DCRGroupedTrails = {
	huge: [],
	veryBig: [],
	big: [],
	standard: [],
	snap: [],
};

export default {
	component: DynamicPackage,
	title: 'Components/DynamicPackage',
	parameters: {
		chromatic: {
			viewports: [
				breakpoints.mobile,
				breakpoints.mobileMedium,
				breakpoints.mobileLandscape,
				breakpoints.phablet,
				breakpoints.tablet,
				breakpoints.desktop,
				breakpoints.leftCol,
				breakpoints.wide,
			],
		},
	},
};

export const One = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 1),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
One.story = {
	name: 'With one standard card',
};

export const Two = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 2),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Two.story = {
	name: 'With two standard cards',
};

export const Three = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 3),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Three.story = {
	name: 'With three standard cards',
};

export const Four = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 4),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Four.story = {
	name: 'With four standard cards',
};

export const Five = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Five.story = {
	name: 'With five standard cards',
};

export const Six = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 6),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Six.story = {
	name: 'With six standard cards',
};

export const Seven = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 7),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Seven.story = {
	name: 'With seven standard cards',
};

export const Eight = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 8),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Eight.story = {
	name: 'With eight standard cards',
};

export const Nine = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: [...trails].slice(0, 9),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
Nine.story = {
	name: 'With nine standard cards',
};

export const Boosted1 = () => {
	const primary = [...trails].slice(0)[0];

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted1.story = {
	name: 'With one standard card - boosted',
};

export const Boosted2 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 2);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted2.story = {
	name: 'With two standard cards - boosted',
};

export const Boosted3 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 3);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted3.story = {
	name: 'With three standard cards - boosted',
};

export const Boosted4 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 4);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted4.story = {
	name: 'With four standard cards - boosted',
};

export const Boosted5 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 5);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted5.story = {
	name: 'With five standard cards - boosted',
};

export const Boosted8 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 8);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted8.story = {
	name: 'With eight standard cards - boosted',
};

export const Boosted9 = () => {
	const primary = [...trails].slice(0)[0];
	const remaining = [...trails].slice(1, 9);

	return (
		<ContainerLayout
			title="DynamicPackage"
			showTopBorder={true}
			sideBorders={true}
			padContent={false}
			centralBorder="partial"
		>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</ContainerLayout>
	);
};
Boosted9.story = {
	name: 'With nine standard cards - boosted',
};

export const OneSnapThreeStandard = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [trails[0]],
				standard: [...trails].slice(1, 4),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
OneSnapThreeStandard.story = {
	name: 'With one snap - three standard cards',
};

export const ThreeSnapTwoStandard = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [...trails].slice(0, 3),
				standard: [...trails].slice(3, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
ThreeSnapTwoStandard.story = {
	name: 'With three snaps - two standard cards',
};

export const ThreeSnapTwoStandard2ndBoosted = () => (
	<ContainerLayout
		title="DynamicPackage"
		showTopBorder={true}
		sideBorders={true}
		padContent={false}
		centralBorder="partial"
	>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [trails[0], { ...trails[1], isBoosted: true }, trails[2]],
				standard: [...trails].slice(3, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</ContainerLayout>
);
ThreeSnapTwoStandard2ndBoosted.story = {
	name: 'With three snaps (2nd boosted) - two standard cards',
};
