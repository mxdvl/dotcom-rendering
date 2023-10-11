import { isString } from '@guardian/libs';
import { ArticlePage } from '../components/ArticlePage';
import { ConfigProvider } from '../components/ConfigContext';
import {
	ASSET_ORIGIN,
	generateScriptTags,
	getPathFromManifest,
} from '../lib/assets';
import { decideFormat } from '../lib/decideFormat';
import { renderToStringWithEmotion } from '../lib/emotion';
import { createGuardian } from '../model/guardian';
import type { Config } from '../types/configContext';
import type { FEElement } from '../types/content';
import type { DCRArticle } from '../types/frontend';
import { htmlPageTemplate } from './htmlPageTemplate';

export const renderArticle = (
	article: DCRArticle,
): {
	prefetchScripts: string[];
	html: string;
} => {
	const format: ArticleFormat = decideFormat(article.format);

	const renderingTarget = 'Apps';
	const config: Config = { renderingTarget };

	// We want to only insert script tags for the elements or main media elements on this page view
	// so we need to check what elements we have and use the mapping to the the chunk name
	const elements: FEElement[] = article.blocks
		.map((block) => block.elements)
		.flat();

	const pageHasNonBootInteractiveElements = elements.some(
		(element) =>
			element._type ===
				'model.dotcomrendering.pageElements.InteractiveBlockElement' &&
			element.scriptUrl !==
				'https://interactive.guim.co.uk/embed/iframe-wrapper/0.1/boot.js', // We have rewritten this standard behaviour into Dotcom Rendering
	);

	const { html, extractedCss } = renderToStringWithEmotion(
		<ConfigProvider value={config}>
			<ArticlePage
				format={format}
				article={article}
				renderingTarget={renderingTarget}
			/>
		</ConfigProvider>,
	);

	const clientScripts = [
		getPathFromManifest('apps', 'index.js'),
		pageHasNonBootInteractiveElements &&
			`${ASSET_ORIGIN}static/frontend/js/curl-with-js-and-domReady.js`,
	].filter(isString);

	const scriptTags = generateScriptTags([...clientScripts]);

	const guardian = createGuardian({
		editionId: article.editionId,
		stage: article.config.stage,
		frontendAssetsFullURL: article.config.frontendAssetsFullURL,
		revisionNumber: article.config.revisionNumber,
		sentryPublicApiKey: article.config.sentryPublicApiKey,
		sentryHost: article.config.sentryHost,
		keywordIds: article.config.keywordIds,
		dfpAccountId: article.config.dfpAccountId,
		adUnit: article.config.adUnit,
		ajaxUrl: article.config.ajaxUrl,
		googletagUrl: article.config.googletagUrl,
		switches: article.config.switches,
		abTests: article.config.abTests,
		isPaidContent: article.pageType.isPaidContent,
		contentType: article.contentType,
		googleRecaptchaSiteKey: article.config.googleRecaptchaSiteKey,
		unknownConfig: article.config,
	});

	const renderedPage = htmlPageTemplate({
		css: extractedCss,
		html,
		title: article.webTitle,
		scriptTags,
		guardian,
		renderingTarget: 'Apps',
		offerHttp3: false,
		weAreHiring: !!article.config.switches.weAreHiring,
	});

	return {
		prefetchScripts: clientScripts,
		html: renderedPage,
	};
};
