import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { remSpace, space, textSans } from '@guardian/source-foundations';
import {
	SvgCheckmark,
	SvgNotificationsOff,
	SvgNotificationsOn,
	SvgPlus,
} from '@guardian/source-react-components';
import { palette } from '../palette';

type IconProps = {
	isFollowing?: boolean;
	iconIsFollowing: EmotionJSX.Element;
	iconIsNotFollowing: EmotionJSX.Element;
};

const FollowIcon = ({
	isFollowing,
	iconIsFollowing,
	iconIsNotFollowing,
}: IconProps) => (
	<div
		css={css`
			display: flex;
			margin: 0;
			margin-right: ${space[1]}px;

			border-radius: 100%;
			border: 1px solid ${palette('--follow-icon-fill')};

			svg {
				margin: 1px;
			}
		`}
		style={{
			backgroundColor: isFollowing
				? palette('--follow-icon-fill')
				: undefined,
			fill: isFollowing
				? palette('--follow-icon-background')
				: palette('--follow-icon-fill'),
		}}
	>
		{isFollowing ? iconIsFollowing : iconIsNotFollowing}
	</div>
);

const buttonStyles = css`
	${textSans.small()}
	color: ${palette('--follow-text')};
	background: none;
	border: none;
	display: block;
	margin-top: ${remSpace[1]};
	margin-left: 0;
	min-height: ${remSpace[6]};
	padding: 0;
	text-align: left;
`;

const containerStyles = css`
	display: flex;
	align-items: center;
	column-gap: 0.2em;
`;

const notificationsTextSpan = ({ isFollowing }: Pick<Props, 'isFollowing'>) => (
	<span>Notifications {isFollowing ? 'on' : 'off'}</span>
);

const tagTextSpan = ({
	isFollowing,
	displayName,
}: Pick<Props, 'isFollowing' | 'displayName'>) => (
	<span>
		{isFollowing ? 'Following' : 'Follow'} {displayName}
	</span>
);

const generateFollowButton = ({
	isFollowing,
	onClickHandler,
	iconIsFollowing,
	iconIsNotFollowing,
	textSpan,
}: Props & {
	iconIsFollowing: EmotionJSX.Element;
	iconIsNotFollowing: EmotionJSX.Element;
	textSpan: EmotionJSX.Element;
}): EmotionJSX.Element => {
	return (
		<>
			<button onClick={onClickHandler} type="button" css={buttonStyles}>
				<span css={containerStyles}>
					<FollowIcon
						isFollowing={isFollowing}
						iconIsFollowing={iconIsFollowing}
						iconIsNotFollowing={iconIsNotFollowing}
					/>
					{textSpan}
				</span>
			</button>
		</>
	);
};

// bridget props
type Props = {
	displayName?: string;
	isFollowing: boolean;
	onClickHandler: () => void;
};

export const FollowNotificationsButton = ({
	isFollowing,
	onClickHandler,
}: Props) =>
	generateFollowButton({
		isFollowing,
		onClickHandler,
		textSpan: notificationsTextSpan({ isFollowing }),
		iconIsFollowing: <SvgNotificationsOn size="xsmall" />,
		iconIsNotFollowing: <SvgNotificationsOff size="xsmall" />,
	});

export const FollowTagButton = ({
	displayName,
	isFollowing,
	onClickHandler,
}: Props) =>
	generateFollowButton({
		isFollowing,
		onClickHandler,
		textSpan: tagTextSpan({ isFollowing, displayName }),
		iconIsFollowing: <SvgCheckmark size="xsmall" />,
		iconIsNotFollowing: <SvgPlus size="xsmall" />,
	});