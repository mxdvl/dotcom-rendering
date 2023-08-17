import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import { CartoonComponent } from './CartoonComponent';
import {
	cartoon,
	cartoonWithoutCreditOrCaption,
} from './CartoonComponent.mocks';
import { Figure } from './Figure';
import { Flex } from './Flex';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';
import { Section } from './Section';

export default {
	component: CartoonComponent,
	title: 'Components/CartoonBlockComponent',
	parameters: {},
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
	<Section fullWidth={true} showTopBorder={false}>
		<Flex>
			<LeftColumn>
				<></>
			</LeftColumn>
			<div
				css={css`
					padding: 20px;
					flex-grow: 1;
				`}
			>
				{children}
			</div>
			<RightColumn>
				<></>
			</RightColumn>
		</Flex>
	</Section>
);

export const Cartoon = () => {
	return (
		<Wrapper>
			<Figure
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: Pillar.News,
				}}
				isMainMedia={false}
				role="inline"
			>
				<CartoonComponent
					format={{
						display: ArticleDisplay.Standard,
						design: ArticleDesign.Standard,
						theme: Pillar.News,
					}}
					element={cartoon}
				/>
			</Figure>
		</Wrapper>
	);
};
Cartoon.storyName = 'with credit and caption';

export const CartoonWithoutCredit = () => {
	return (
		<Wrapper>
			<Figure
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: Pillar.News,
				}}
				isMainMedia={false}
				role="inline"
			>
				<CartoonComponent element={cartoonWithoutCreditOrCaption} />
			</Figure>
		</Wrapper>
	);
};
CartoonWithoutCredit.storyName = 'with no credit or caption';
