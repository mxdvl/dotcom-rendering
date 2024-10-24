import type { ImgHTMLAttributes } from 'react';
import type {
	DCRContainerPalette,
	DCRContainerType,
	DCRFrontCard,
	DCRGroupedTrails,
} from '../types/front';
import { DynamicFast } from './DynamicFast';
import { DynamicPackage } from './DynamicPackage';
import { DynamicSlow } from './DynamicSlow';
import { DynamicSlowMPU } from './DynamicSlowMPU';
import { FixedLargeSlowXIV } from './FixedLargeSlowXIV';
import { FixedMediumFastXI } from './FixedMediumFastXI';
import { FixedMediumFastXII } from './FixedMediumFastXII';
import { FixedMediumSlowVI } from './FixedMediumSlowVI';
import { FixedMediumSlowVII } from './FixedMediumSlowVII';
import { FixedMediumSlowXIIMPU } from './FixedMediumSlowXIIMPU';
import { FixedSmallFastVIII } from './FixedSmallFastVIII';
import { FixedSmallSlowI } from './FixedSmallSlowI';
import { FixedSmallSlowIII } from './FixedSmallSlowIII';
import { FixedSmallSlowIV } from './FixedSmallSlowIV';
import { FixedSmallSlowVHalf } from './FixedSmallSlowVHalf';
import { FixedSmallSlowVMPU } from './FixedSmallSlowVMPU';
import { FixedSmallSlowVThird } from './FixedSmallSlowVThird';
import { FlexibleGeneral } from './FlexibleGeneral';
import { FlexibleSpecial } from './FlexibleSpecial';
import { Island } from './Island';
import { NavList } from './NavList';
import { ScrollableHighlights } from './ScrollableHighlights.importable';
import { ScrollableMedium } from './ScrollableMedium';
import { ScrollableSmall } from './ScrollableSmall';

type Props = {
	trails: DCRFrontCard[];
	groupedTrails: DCRGroupedTrails;
	imageLoading: NonNullable<ImgHTMLAttributes<unknown>['loading']>;
	containerType: DCRContainerType;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	absoluteServerTimes: boolean;
};

export const DecideContainer = ({
	trails,
	groupedTrails,
	containerType,
	containerPalette,
	showAge,
	absoluteServerTimes,
	imageLoading,
}: Props) => {
	// If you add a new container type which contains an MPU, you must also add it to
	switch (containerType) {
		case 'dynamic/fast':
			return (
				<DynamicFast
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'dynamic/slow':
			return (
				<DynamicSlow
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'dynamic/slow-mpu':
			return (
				<DynamicSlowMPU
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'dynamic/package':
			return (
				<DynamicPackage
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/large/slow-XIV':
			return (
				<FixedLargeSlowXIV
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-IV':
			return (
				<FixedSmallSlowIV
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-V-mpu':
			return (
				<FixedSmallSlowVMPU
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-III':
			return (
				<FixedSmallSlowIII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-I':
			return (
				<FixedSmallSlowI
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-V-third':
			return (
				<FixedSmallSlowVThird
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/slow-V-half':
			return (
				<FixedSmallSlowVHalf
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/medium/slow-VI':
			return (
				<FixedMediumSlowVI
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/medium/slow-VII':
			return (
				<FixedMediumSlowVII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/medium/slow-XII-mpu':
			return (
				<FixedMediumSlowXIIMPU
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/medium/fast-XII':
			return (
				<FixedMediumFastXII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/medium/fast-XI':
			return (
				<FixedMediumFastXI
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'fixed/small/fast-VIII':
			return (
				<FixedSmallFastVIII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'nav/list':
			return <NavList trails={trails} showImage={false} />;
		case 'nav/media-list':
			return <NavList trails={trails} showImage={true} />;
		case 'scrollable/highlights':
			return (
				<Island priority="feature" defer={{ until: 'visible' }}>
					<ScrollableHighlights trails={trails} />
				</Island>
			);
		case 'flexible/special':
			return (
				<FlexibleSpecial
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'flexible/general':
			return (
				<FlexibleGeneral
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading={imageLoading}
				/>
			);
		case 'scrollable/small':
			return (
				<ScrollableSmall
					trails={trails}
					imageLoading={imageLoading}
					containerType={'scrollable/small'}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
				/>
			);
		case 'scrollable/medium':
			return (
				<ScrollableMedium
					trails={trails}
					imageLoading={imageLoading}
					containerType={'scrollable/small'}
					containerPalette={containerPalette}
					showAge={showAge}
					absoluteServerTimes={absoluteServerTimes}
				/>
			);
		case 'scrollable/feature':
		case 'static/feature/2':
		case 'static/medium/4':
		default:
			return <p>{containerType} is not yet supported</p>;
	}
};
