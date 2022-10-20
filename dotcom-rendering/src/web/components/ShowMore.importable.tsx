import { css } from '@emotion/react';
import { from, space } from '@guardian/source-foundations';
import { Button, SvgMinus, SvgPlus } from '@guardian/source-react-components';
import { useState } from 'react';
import type { FEFrontCard } from 'src/types/front';
import { enhanceCards } from '../../model/enhanceCards';
import { useApi } from '../lib/useApi';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';
import { FrontCard } from './FrontCard';

function decideButtonText({
	isOpen,
	loading,
	containerTitle,
}: {
	isOpen: boolean;
	loading: boolean;
	containerTitle: string;
}) {
	if (isOpen && loading) return 'Loading';
	if (isOpen) return 'Less';
	return `More ${containerTitle}`;
}

type Props = {
	containerTitle: string;
	path: string;
	containerId: string;
};

export const ShowMore = ({ containerTitle, path, containerId }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	/** We only pass an actual URL to SWR when 'showMore' is true.
	 * Toggling 'showMore' will trigger a re-render
	 *   @see https://swr.vercel.app/docs/conditional-fetching#conditional
	 */
	const url = isOpen
		? `https://api.nextgen.guardianapps.co.uk/${path}/show-more/${containerId}.json?dcr=true`
		: undefined;
	const { data, loading } = useApi<FEFrontCard[]>(url);

	/**
		@todo: Semantics for the button and the new container (sub-container?)
		@todo: Desired focus behaviour on expand/collapse?
		@todo: Appropriate semantics for indicating state (aria-live, aria-expanded etc.)?
		@todo: can we avoid hard-coding the API URL?
		@todo: handle errors
		@todo: deduping
			@todo: get visibleCardIds from DOM instead of as a prop
		@todo: rename props to match Front type?
		@todo: make sure that the new content doesn't shift the top of the viewport when it loads
	*/

	return (
		<>
			{data && (
				<>
					<div
						css={css`
							height: ${space[3]}px;
						`}
					/>
					<UL>
						{enhanceCards(data).map((trail) => (
							<LI key={trail.url} padSides={true}>
								<FrontCard trail={trail} imageUrl={undefined} />
							</LI>
						))}
					</UL>
				</>
			)}
			<Button
				priority="tertiary"
				size="xsmall"
				icon={isOpen && !loading ? <SvgMinus /> : <SvgPlus />}
				iconSide="left"
				onClick={toggleOpen}
				cssOverrides={css`
					margin-top: ${space[3]}px;
					${from.tablet} {
						margin-left: 10px;
					}
				`}
				disabled={loading}
				data-cy={`show-more-button-${containerId}`}
			>
				{decideButtonText({ isOpen, loading, containerTitle })}
			</Button>
		</>
	);
};
