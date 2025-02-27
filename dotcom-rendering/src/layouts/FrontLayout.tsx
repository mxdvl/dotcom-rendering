import { isOneOf } from '@guardian/libs';
import {
	background,
	brandBackground,
	brandBorder,
	palette as sourcePalette,
} from '@guardian/source/foundations';
import { AdSlot } from '../components/AdSlot.web';
import { Carousel } from '../components/Carousel.importable';
import { ContainerOverrides } from '../components/ContainerOverrides';
import { CPScottHeader } from '../components/CPScottHeader';
import { DecideContainer } from '../components/DecideContainer';
import {
	decideFrontsBannerAdSlot,
	decideMerchandisingSlot,
	decideMerchHighAndMobileAdSlots,
} from '../components/DecideFrontsAdSlots';
import { EditionSwitcherBanner } from '../components/EditionSwitcherBanner.importable';
import { Footer } from '../components/Footer';
import { FrontMostViewed } from '../components/FrontMostViewed';
import { FrontSection } from '../components/FrontSection';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader';
import { LabsSection } from '../components/LabsSection';
import { Masthead } from '../components/Masthead/Masthead';
import { Section } from '../components/Section';
import { Snap } from '../components/Snap';
import { SnapCssSandbox } from '../components/SnapCssSandbox';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { SubNav } from '../components/SubNav.importable';
import { TrendingTopics } from '../components/TrendingTopics';
import { UsEoy2024Wrapper } from '../components/UsEoy2024Wrapper.importable';
import { WeatherWrapper } from '../components/WeatherWrapper.importable';
import { ArticleDisplay } from '../lib/articleFormat';
import { badgeFromBranding, isPaidContentSameBranding } from '../lib/branding';
import { canRenderAds } from '../lib/canRenderAds';
import { getContributionsServiceUrl } from '../lib/contributions';
import { editionList } from '../lib/edition';
import {
	getFrontsBannerAdPositions,
	getMobileAdPositions,
} from '../lib/getFrontsAdPositions';
import { hideAge } from '../lib/hideAge';
import type { NavType } from '../model/extract-nav';
import { palette as schemePalette } from '../palette';
import { type DCRCollectionType, type DCRFrontType } from '../types/front';
import { pageSkinContainer } from './lib/pageSkin';
import { BannerWrapper, Stuck } from './lib/stickiness';

interface Props {
	front: DCRFrontType;
	NAV: NavType;
}

const spaces = / /g;
/** TODO: Confirm with is a valid way to generate component IDs. */
const ophanComponentId = (name: string) =>
	name.toLowerCase().replace(spaces, '-');

const isNetworkFrontPageId = isOneOf(editionList.map(({ pageId }) => pageId));

const isNavList = (collection: DCRCollectionType) => {
	return (
		collection.collectionType == 'nav/list' ||
		collection.collectionType == 'nav/media-list'
	);
};

const isHighlights = ({ collectionType }: DCRCollectionType) =>
	collectionType === 'scrollable/highlights';

const isToggleable = (
	index: number,
	collection: DCRCollectionType,
	isNetworkFront: boolean,
) => {
	if (isNetworkFront) {
		return (
			collection.displayName.toLowerCase() !== 'headlines' &&
			!isNavList(collection) &&
			!isHighlights(collection)
		);
	}

	return index != 0 && !isNavList(collection);
};

const decideLeftContent = (
	front: DCRFrontType,
	collection: DCRCollectionType,
	hasPageSkin: boolean,
) => {
	// show CPScott?
	if (
		['uk/commentisfree', 'au/commentisfree'].includes(
			front.config.pageId,
		) &&
		collection.displayName.toLowerCase() === 'opinion'
	) {
		return <CPScottHeader />;
	}

	// show weather?
	if (
		front.config.switches['weather'] &&
		isNetworkFrontPageId(front.config.pageId) &&
		// based on https://github.com/guardian/frontend/blob/473aafd168fec7f2a578a52c8e84982e3ec10fea/common/app/views/support/GetClasses.scala#L107
		collection.displayName.toLowerCase() === 'headlines' &&
		!hasPageSkin
	) {
		return (
			<Island priority="feature" defer={{ until: 'idle' }}>
				<WeatherWrapper
					ajaxUrl={front.config.ajaxUrl}
					edition={front.editionId}
				/>
			</Island>
		);
	}

	// show nothing!
	return null;
};

export const FrontLayout = ({ front, NAV }: Props) => {
	const {
		config: { isPaidContent, hasPageSkin: hasPageSkinConfig, pageId },
		editionId,
	} = front;

	const renderAds = canRenderAds(front);

	const hasPageSkin = renderAds && hasPageSkinConfig;

	const filteredCollections = front.pressedPage.collections.filter(
		(collection) => !isHighlights(collection),
	);

	const mobileAdPositions = renderAds
		? getMobileAdPositions(filteredCollections)
		: [];

	const desktopAdPositions = renderAds
		? getFrontsBannerAdPositions(
				filteredCollections.map(
					({
						collectionType,
						containerPalette,
						displayName,
						grouped,
					}) => ({
						collectionType,
						containerPalette,
						displayName,
						grouped,
					}),
				),
				pageId,
		  )
		: [];

	const showMostPopular =
		front.isNetworkFront && front.deeplyRead && front.deeplyRead.length > 0;

	const contributionsServiceUrl = getContributionsServiceUrl(front);

	const { abTests, isPreview } = front.config;

	const { absoluteServerTimes = false } = front.config.switches;

	const Highlights = () => {
		const showHighlights =
			// Must be opted into the Europe beta test or in preview
			(abTests.europeBetaFrontVariant === 'variant' || isPreview) &&
			// Must either be a network front or the Europe beta front (or training version of it) in order to see Highlights
			(front.isNetworkFront || front.pageId.startsWith('europe-beta'));

		const highlightsCollection =
			front.pressedPage.collections.find(isHighlights);

		return (
			showHighlights &&
			!!highlightsCollection && (
				<DecideContainer
					containerType={highlightsCollection.collectionType}
					trails={[
						...highlightsCollection.curated,
						...highlightsCollection.backfill,
					]}
					groupedTrails={highlightsCollection.grouped}
					showAge={false}
					absoluteServerTimes={absoluteServerTimes}
					imageLoading="eager"
				/>
			)
		);
	};

	return (
		<>
			<div data-print-layout="hide" id="bannerandheader">
				<>
					{renderAds && (
						<Stuck>
							<Section
								fullWidth={true}
								showTopBorder={false}
								showSideBorders={false}
								padSides={false}
								shouldCenter={false}
								backgroundColour={schemePalette(
									'--article-section-background',
								)}
							>
								<HeaderAdSlot
									isPaidContent={!!front.config.isPaidContent}
									shouldHideReaderRevenue={false}
								/>
							</Section>
						</Stuck>
					)}

					{hasPageSkin && (
						<AdSlot
							data-print-layout="hide"
							position="pageskin"
							display={ArticleDisplay.Standard}
							hasPageskin={hasPageSkin}
						/>
					)}

					<Masthead
						nav={NAV}
						highlights={<Highlights />}
						editionId={front.editionId}
						idUrl={front.config.idUrl}
						mmaUrl={front.config.mmaUrl}
						discussionApiUrl={front.config.discussionApiUrl}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={front.config.idApiUrl}
						showSubNav={!isPaidContent}
						showSlimNav={false}
						hasPageSkin={hasPageSkin}
						hasPageSkinContentSelfConstrain={true}
						pageId={pageId}
					/>

					{isPaidContent && (
						<Section
							fullWidth={true}
							showTopBorder={false}
							backgroundColour={sourcePalette.labs[400]}
							borderColour={sourcePalette.neutral[60]}
							sectionId="labs-header"
						>
							<LabsHeader editionId={editionId} />
						</Section>
					)}
				</>
			</div>
			<main
				data-layout="FrontLayout"
				data-link-name={`Front | /${front.pressedPage.id}`}
				id="maincontent"
				css={hasPageSkin && pageSkinContainer}
			>
				{isNetworkFrontPageId(pageId) && (
					<Island priority="enhancement" defer={{ until: 'idle' }}>
						<EditionSwitcherBanner
							pageId={pageId}
							edition={editionId}
						/>
					</Island>
				)}
				{filteredCollections.map((collection, index) => {
					// Backfills should be added to the end of any curated content
					const trails = collection.curated.concat(
						collection.backfill,
					);
					const [trail] = trails;

					// There are some containers that have zero trails. We don't want to render these
					if (!trail) return null;

					const imageLoading = index > 0 ? 'lazy' : 'eager';

					const ophanName = ophanComponentId(collection.displayName);
					const ophanComponentLink = `container-${
						index + 1
					} | ${ophanName}`;
					const mostPopularTitle = 'Most popular';

					// Remove the branding from each of the cards in a paid content
					// collection if they are the same.
					const trailsWithoutBranding = isPaidContentSameBranding(
						collection.collectionBranding,
					)
						? trails.map((labTrail) => ({
								...labTrail,
								branding: undefined,
						  }))
						: trails;

					if (collection.collectionType === 'scrollable/highlights') {
						// Highlights are rendered in the Masthead component
						return null;
					}

					if (
						collection.displayName === 'US end-of-year 2024' &&
						pageId.toLowerCase() === 'us'
					) {
						return (
							<ContainerOverrides
								key={ophanName}
								containerPalette={collection.containerPalette}
							>
								<Section
									fullWidth={true}
									padBottom={false}
									showSideBorders={false}
									padSides={false}
									showTopBorder={false}
									ophanComponentLink={ophanComponentLink}
									ophanComponentName={ophanName}
									hasPageSkin={hasPageSkin}
								>
									<Island
										priority="feature"
										defer={{ until: 'visible' }}
									>
										<UsEoy2024Wrapper />
									</Island>
								</Section>
							</ContainerOverrides>
						);
					}

					if (collection.collectionType === 'fixed/thrasher') {
						return (
							<ContainerOverrides
								key={ophanName}
								containerPalette={collection.containerPalette}
							>
								<div css={[hasPageSkin && pageSkinContainer]}>
									{decideFrontsBannerAdSlot(
										renderAds,
										hasPageSkin,
										index,
										desktopAdPositions,
									)}
									{!!trail.embedUri && (
										<SnapCssSandbox
											snapData={trail.snapData}
										>
											<Section
												fullWidth={true}
												padSides={false}
												showTopBorder={false}
												showSideBorders={false}
												ophanComponentLink={
													ophanComponentLink
												}
												ophanComponentName={ophanName}
												containerName={
													collection.collectionType
												}
												hasPageSkin={hasPageSkin}
											>
												<Snap
													snapData={trail.snapData}
													dataLinkName={
														trail.dataLinkName
													}
												/>
											</Section>
										</SnapCssSandbox>
									)}
									{decideMerchHighAndMobileAdSlots(
										renderAds,
										index,
										filteredCollections.length,
										front.pressedPage.frontProperties
											.isPaidContent,
										mobileAdPositions,
										hasPageSkin,
									)}
								</div>
							</ContainerOverrides>
						);
					}

					if (
						collection.collectionType === 'news/most-popular' &&
						!isPaidContent &&
						front.config.switches.mostViewedFronts
					) {
						const deeplyReadData = showMostPopular
							? front.deeplyRead
							: undefined;

						return (
							<ContainerOverrides
								key={ophanName}
								containerPalette={collection.containerPalette}
							>
								{decideFrontsBannerAdSlot(
									renderAds,
									hasPageSkin,
									index,
									desktopAdPositions,
								)}
								<FrontSection
									toggleable={true}
									key={ophanName}
									title={
										showMostPopular
											? mostPopularTitle
											: 'Most viewed'
									}
									showTopBorder={index > 0}
									url={collection.href}
									ophanComponentLink={ophanComponentLink}
									ophanComponentName={
										showMostPopular
											? ophanComponentId(mostPopularTitle)
											: ophanName
									}
									containerName={collection.collectionType}
									containerPalette={
										collection.containerPalette
									}
									sectionId={ophanName}
									showDateHeader={
										collection.config.showDateHeader
									}
									editionId={front.editionId}
									treats={collection.treats}
									data-print-layout="hide"
									hasPageSkin={hasPageSkin}
									discussionApiUrl={
										front.config.discussionApiUrl
									}
								>
									<FrontMostViewed
										displayName={collection.displayName}
										trails={trails}
										mostViewed={front.mostViewed}
										isNetworkFront={front.isNetworkFront}
										deeplyRead={deeplyReadData}
										editionId={front.editionId}
										hasPageSkin={hasPageSkin}
										isFront={true}
										renderAds={renderAds}
									/>
								</FrontSection>
								{decideMerchHighAndMobileAdSlots(
									renderAds,
									index,
									filteredCollections.length,
									front.pressedPage.frontProperties
										.isPaidContent,
									mobileAdPositions,
									hasPageSkin,
								)}
							</ContainerOverrides>
						);
					}

					if (collection.containerPalette === 'Branded') {
						return (
							<ContainerOverrides
								key={ophanName}
								containerPalette={collection.containerPalette}
							>
								<LabsSection
									title={collection.displayName}
									collectionId={collection.id}
									pageId={front.pressedPage.id}
									ajaxUrl={front.config.ajaxUrl}
									sectionId={`container-${ophanName}`}
									ophanComponentName={ophanName}
									ophanComponentLink={ophanComponentLink}
									containerName={collection.collectionType}
									canShowMore={collection.canShowMore}
									url={collection.href}
									badge={badgeFromBranding(
										collection.collectionBranding,
									)}
									data-print-layout="hide"
									hasPageSkin={hasPageSkin}
									discussionApiUrl={
										front.config.discussionApiUrl
									}
									editionId={editionId}
								>
									<DecideContainer
										trails={trailsWithoutBranding}
										groupedTrails={collection.grouped}
										containerType={
											collection.collectionType
										}
										containerPalette={
											collection.containerPalette
										}
										imageLoading={imageLoading}
										absoluteServerTimes={
											absoluteServerTimes
										}
									/>
								</LabsSection>
								{decideMerchHighAndMobileAdSlots(
									renderAds,
									index,
									filteredCollections.length,
									front.pressedPage.frontProperties
										.isPaidContent,
									mobileAdPositions,
									hasPageSkin,
								)}
							</ContainerOverrides>
						);
					}

					if (
						collection.collectionType === 'fixed/video' ||
						collection.containerPalette === 'PodcastPalette'
					) {
						const containerPalette =
							collection.containerPalette ?? 'MediaPalette';

						return (
							<ContainerOverrides
								key={ophanName}
								containerPalette={containerPalette}
							>
								{decideFrontsBannerAdSlot(
									renderAds,
									hasPageSkin,
									index,
									desktopAdPositions,
								)}
								<Section
									title={collection.displayName}
									sectionId={`container-${ophanName}`}
									ophanComponentName={ophanName}
									ophanComponentLink={ophanComponentLink}
									containerName={collection.collectionType}
									fullWidth={true}
									padBottom={true}
									showSideBorders={
										collection.collectionType !==
										'fixed/video'
									}
									showTopBorder={index > 0}
									padContent={false}
									url={collection.href}
									showDateHeader={
										collection.config.showDateHeader
									}
									editionId={front.editionId}
									backgroundColour={schemePalette(
										'--section-background',
									)}
									innerBackgroundColour={
										containerPalette === 'MediaPalette'
											? sourcePalette.neutral[0]
											: undefined
									}
									hasPageSkin={hasPageSkin}
								>
									<Island
										priority="feature"
										defer={{ until: 'visible' }}
									>
										<Carousel
											isOnwardContent={false}
											heading={collection.displayName}
											trails={trails}
											onwardsSource={'unknown-source'}
											palette={containerPalette}
											leftColSize={'compact'}
											containerType={
												collection.collectionType
											}
											hasPageSkin={hasPageSkin}
											url={collection.href}
											discussionApiUrl={
												front.config.discussionApiUrl
											}
											absoluteServerTimes={
												absoluteServerTimes
											}
										/>
									</Island>
								</Section>

								{renderAds &&
									decideMerchHighAndMobileAdSlots(
										renderAds,
										index,
										filteredCollections.length,
										front.pressedPage.frontProperties
											.isPaidContent,
										mobileAdPositions,
										hasPageSkin,
									)}
							</ContainerOverrides>
						);
					}

					return (
						<ContainerOverrides
							key={ophanName}
							containerPalette={collection.containerPalette}
						>
							{decideFrontsBannerAdSlot(
								renderAds,
								hasPageSkin,
								index,
								desktopAdPositions,
							)}
							<FrontSection
								title={collection.displayName}
								description={collection.description}
								showTopBorder={index > 0}
								url={
									collection.href
										? `https://www.theguardian.com/${collection.href}`
										: undefined
								}
								ophanComponentLink={ophanComponentLink}
								ophanComponentName={ophanName}
								containerName={collection.collectionType}
								containerPalette={collection.containerPalette}
								toggleable={isToggleable(
									index,
									collection,
									front.isNetworkFront,
								)}
								leftContent={decideLeftContent(
									front,
									collection,
									hasPageSkin,
								)}
								sectionId={ophanName}
								collectionId={collection.id}
								pageId={front.pressedPage.id}
								showDateHeader={
									collection.config.showDateHeader
								}
								editionId={front.editionId}
								treats={collection.treats}
								canShowMore={collection.canShowMore}
								ajaxUrl={front.config.ajaxUrl}
								isOnPaidContentFront={isPaidContent}
								targetedTerritory={collection.targetedTerritory}
								hasPageSkin={hasPageSkin}
								discussionApiUrl={front.config.discussionApiUrl}
								collectionBranding={
									collection.collectionBranding
								}
							>
								<DecideContainer
									trails={trailsWithoutBranding}
									groupedTrails={collection.grouped}
									containerType={collection.collectionType}
									containerPalette={
										collection.containerPalette
									}
									showAge={
										!hideAge.includes(
											collection.displayName,
										)
									}
									imageLoading={imageLoading}
									absoluteServerTimes={absoluteServerTimes}
								/>
							</FrontSection>
							{decideMerchHighAndMobileAdSlots(
								renderAds,
								index,
								filteredCollections.length,
								front.pressedPage.frontProperties.isPaidContent,
								mobileAdPositions,
								hasPageSkin,
							)}
						</ContainerOverrides>
					);
				})}
			</main>

			<Section
				fullWidth={true}
				showTopBorder={false}
				ophanComponentName="trending-topics"
				data-component="trending-topics"
				hasPageSkin={hasPageSkin}
			>
				<TrendingTopics trendingTopics={front.trendingTopics} />
			</Section>

			{decideMerchandisingSlot(renderAds, hasPageSkin)}

			{NAV.subNavSections && (
				<Section
					fullWidth={true}
					showTopBorder={hasPageSkin}
					data-print-layout="hide"
					padSides={false}
					element="aside"
					backgroundColour={
						hasPageSkin ? background.primary : undefined
					}
				>
					<Island priority="enhancement" defer={{ until: 'visible' }}>
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							position="footer"
							currentPillarTitle={front.nav.currentPillarTitle}
						/>
					</Island>
				</Section>
			)}

			<Section
				fullWidth={true}
				data-print-layout="hide"
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				showTopBorder={false}
				element="footer"
			>
				<Footer
					pageFooter={front.pageFooter}
					selectedPillar={NAV.selectedPillar}
					pillars={NAV.pillars}
					urls={front.nav.readerRevenueLinks.footer}
					editionId={front.editionId}
				/>
			</Section>

			<BannerWrapper data-print-layout="hide">
				<Island priority="feature" defer={{ until: 'idle' }}>
					<StickyBottomBanner
						contentType={front.config.contentType}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={front.config.idApiUrl}
						isMinuteArticle={false}
						isPaidContent={!!front.config.isPaidContent}
						isPreview={front.config.isPreview}
						isSensitive={front.config.isSensitive}
						pageId={front.pressedPage.id}
						sectionId={front.config.section}
						shouldHideReaderRevenue={false} // never defined for fronts
						remoteBannerSwitch={
							!!front.config.switches.remoteBanner
						}
						tags={[]} // a front doesn't have tags
					/>
				</Island>
			</BannerWrapper>
		</>
	);
};
