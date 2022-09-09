import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { getCookie } from '@guardian/libs';
import type { EditionId } from '../../types/edition';
import { useAdBlockInUse } from '../lib/useAdBlockInUse';
import { ShadyPie } from './ShadyPie';

const isServer = typeof window === 'undefined';
const MOSTVIEWED_STICKY_HEIGHT = 1059;

/**
 * TopRightAdSlot decides if we should render the ShadyPie or not
 *
 * The rules for when to show <ShadyPie /> are:
 *
 *  1. An ad blocker has been detected
 *  2. The reader is not signed in
 *  3. shouldHideReaderRevenue is false ("Prevent membership/contribution appeals" is not
 *     checked in Composer)
 *  4. The article is not paid content
 *  5. We're not on the server
 *
 * @returns either the ShadyPie image the standard top right ad slot
 */
export const TopRightAdSlot = ({
	adStyles,
	shouldHideReaderRevenue,
	isPaidContent,
	sectionName,
	editionId,
}: {
	adStyles: SerializedStyles[];
	shouldHideReaderRevenue: boolean;
	isPaidContent: boolean;
	sectionName: string;
	editionId: EditionId;
}) => {
	const adBlockerDetected = useAdBlockInUse();
	const isSignedIn =
		!isServer && !!getCookie({ name: 'GU_U', shouldMemoize: true });

	if (
		adBlockerDetected &&
		!isSignedIn &&
		!shouldHideReaderRevenue &&
		!isPaidContent &&
		!isServer
	) {
		// Show a fixed image asking people to subscribe
		return <ShadyPie sectionName={sectionName} editionId={editionId} />;
	}

	// Otherwise return the classic ad slot
	return (
		<div
			id="top-right-ad-slot"
			css={css`
				position: static;
				height: ${MOSTVIEWED_STICKY_HEIGHT}px;
			`}
		>
			<div
				id="dfp-ad--right"
				className={[
					'js-ad-slot',
					'ad-slot',
					'ad-slot--right',
					'ad-slot--mpu-banner-ad',
					'ad-slot--rendered',
					'js-sticky-mpu',
				].join(' ')}
				css={[
					css`
						position: sticky;
						top: 0;
					`,
					adStyles,
				]}
				data-link-name="ad slot right"
				data-name="right"
				aria-hidden="true"
			/>
		</div>
	);
};
