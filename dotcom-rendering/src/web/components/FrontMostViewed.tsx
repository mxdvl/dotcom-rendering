import type { DCRFrontCard } from '../../types/front';
import type { TrailTabType, TrailType } from '../../types/trails';
import { Island } from './Island';
import { MostPopularFooterGrid } from './MostPopularFooterGrid';
import { MostViewedFooter } from './MostViewedFooter.importable';
import { MostViewedFooterLayout } from './MostViewedFooterLayout';

type Props = {
	trails: DCRFrontCard[];
	mostViewed: TrailType[];
	mostCommented?: TrailType;
	mostShared?: TrailType;
	displayName: string;
	isNetworkFront: boolean;
	deeplyRead?: TrailType[];
};

export const FrontMostViewed = ({
	trails,
	mostViewed,
	mostCommented,
	mostShared,
	displayName,
	isNetworkFront,
	deeplyRead,
}: Props) => {
	const showMostViewedTab = !isNetworkFront && !!mostViewed.length;
	const sectionName = displayName.replace('Most viewed ', '');

	const tabs: TrailTabType[] = [
		{
			heading: sectionName,
			trails: trails.slice(0, 10),
		},
	];

	if (showMostViewedTab) {
		tabs.push({
			heading: 'Across the guardian',
			trails: mostViewed,
		});
	}

	const deeplyReadType: TrailTabType | undefined =
		isNetworkFront && deeplyRead
			? {
					heading: 'Deeply read',
					trails: deeplyRead,
			  }
			: undefined;

	const mostViewedItems = tabs.length > 0 ? tabs[0] : undefined;
	const showMostPopular = !!deeplyReadType && !!mostViewedItems;

	return (
		<MostViewedFooterLayout>
			{/* We only need hydration if there are multiple tabs */}
			{showMostViewedTab ? (
				<Island deferUntil="visible">
					<MostViewedFooter
						tabs={tabs}
						sectionName="Most viewed"
						mostCommented={mostCommented}
						mostShared={mostShared}
					/>
				</Island>
			) : showMostPopular ? (
				<MostPopularFooterGrid
					data={mostViewedItems}
					deeplyRead={deeplyReadType}
				/>
			) : (
				<MostViewedFooter
					tabs={tabs}
					sectionName="Most viewed"
					mostCommented={mostCommented}
					mostShared={mostShared}
				/>
			)}
		</MostViewedFooterLayout>
	);
};
