import { css } from '@emotion/react';
import { space, textSans14, textSans15 } from '@guardian/source-foundations';
import { Hide } from '@guardian/source-react-components';
import { palette as themePalette } from '../palette';

const disclaimerLeftColStyles = css`
	${textSans15};
	/**
 	 * @TODO (2) Typography preset styles should not be overridden.
 	 * Please speak to your team's designer and update this to use a more appropriate preset.
	 */
	line-height: 1.15;
	padding-top: ${space[1]}px;
	padding-bottom: ${space[1]}px;
`;

const disclaimerInlineStyles = css`
	${textSans14};
	/**
	 * @TODO (2) Typography preset styles should not be overridden.
	 * Please speak to your team's designer and update this to use a more appropriate preset.
	 */
	line-height: 1.15;
	float: left;
	clear: left;
	width: 8.75rem;
	background-color: ${themePalette('--affiliate-disclaimer-background')};
	:hover {
		background-color: ${themePalette(
			'--affiliate-disclaimer-background-hover',
		)};
	}
	margin-top: ${space[1]}px;
	margin-right: ${space[5]}px;
	margin-bottom: ${space[1]}px;
	padding-top: ${space[0]}px;
	padding-right: 5px;
	padding-left: 5px;
	padding-bottom: ${space[3]}px;
`;

const DisclaimerText = () => (
	<p>
		The Guardian’s product and service reviews are independent and are in no
		way influenced by any advertiser or commercial initiative. We will earn
		a commission from the retailer if you buy something through an affiliate
		link.&nbsp;
		<a href="https://www.theguardian.com/info/2017/nov/01/reader-information-on-affiliate-links">
			Learn more.
		</a>
	</p>
);

const AffiliateDisclaimer = () => (
	<Hide until="leftCol">
		<aside
			css={[disclaimerLeftColStyles]}
			data-testid="affiliate-disclaimer"
		>
			<DisclaimerText />
		</aside>
	</Hide>
);

const AffiliateDisclaimerInline = () => (
	<Hide from="leftCol">
		<aside
			css={[disclaimerInlineStyles]}
			data-testid="affiliate-disclaimer-inline"
		>
			<DisclaimerText />
		</aside>
	</Hide>
);

export { AffiliateDisclaimer, AffiliateDisclaimerInline };
