import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import { splitTheme } from '../../../.storybook/decorators/splitThemeDecorator';
import { lightDecorator } from '../../../.storybook/decorators/themeDecorator';
import { discussion as discussionMock } from '../../../fixtures/manual/discussion';
import { discussionWithTwoComments } from '../../../fixtures/manual/discussionWithTwoComments';
import { legacyDiscussionWithoutThreading } from '../../../fixtures/manual/legacyDiscussionWithoutThreading';
import type { FilterOptions, SignedInUser } from '../../types/discussion';
import { Comments } from './Comments';

export default { component: Comments, title: 'Discussion/App' };

const commentResponseError = {
	kind: 'error',
	error: 'NetworkError',
} as const;

const aUser: SignedInUser = {
	profile: {
		userId: 'abc123',
		displayName: 'Jane Smith',
		webUrl: '',
		apiUrl: '',
		avatar: '',
		secureAvatarUrl: '',
		badge: [],
		privateFields: {
			canPostComment: true,
			isPremoderated: false,
			hasCommented: true,
		},
	},
	onComment: () => Promise.resolve(commentResponseError),
	onReply: () => Promise.resolve(commentResponseError),
	onRecommend: () => Promise.resolve(true),
	authStatus: { kind: 'SignedInWithCookies' },
};

const format = {
	design: ArticleDesign.Standard,
	display: ArticleDisplay.Standard,
	theme: Pillar.News,
};

const filters: FilterOptions = {
	threads: 'collapsed',
	pageSize: 25,
	orderBy: 'newest',
};

const defaultCommentForm = { isActive: false, userNameMissing: false };

const defaultCommentForms = {
	top: defaultCommentForm,
	reply: defaultCommentForm,
	bottom: defaultCommentForm,
};

export const LoggedOutHiddenPicks = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl={discussionMock.discussion.key}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			isClosedForComments={false}
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={false}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionMock.discussion.commentCount}
			loading={false}
			totalPages={discussionMock.pages}
			comments={discussionMock.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
LoggedOutHiddenPicks.storyName = 'when logged out, unexpanded and with picks';
LoggedOutHiddenPicks.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Culture,
		},
	]),
];

export const InitialPage = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl={discussionMock.discussion.key}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			isClosedForComments={false}
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={true}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={1}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionMock.discussion.commentCount}
			loading={false}
			totalPages={discussionMock.pages}
			comments={discussionMock.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
InitialPage.storyName = 'with initial page set to 1';
InitialPage.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Lifestyle,
		},
	]),
];

export const LoggedInHiddenNoPicks = () => {
	return (
		<div
			css={css`
				width: 100%;
				max-width: 620px;
			`}
		>
			<Comments
				shortUrl="p/abc123"
				isClosedForComments={false}
				user={aUser}
				baseUrl="https://discussion.theguardian.com/discussion-api"
				additionalHeaders={{
					'D2-X-UID': 'testD2Header',
					'GU-Client': 'testClientHeader',
				}}
				expanded={false}
				onPermalinkClick={() => {}}
				apiKey=""
				idApiUrl="https://idapi.theguardian.com"
				page={3}
				setPage={() => {}}
				filters={filters}
				commentCount={discussionMock.discussion.commentCount}
				loading={false}
				totalPages={discussionMock.pages}
				comments={discussionMock.discussion.comments}
				setComment={() => {}}
				handleFilterChange={() => {}}
				setFormActive={() => {}}
				setUserNameMissing={() => {}}
				commentForms={defaultCommentForms}
			/>
		</div>
	);
};

LoggedInHiddenNoPicks.storyName =
	'when logged in, with no picks and not expanded';
LoggedInHiddenNoPicks.decorators = [splitTheme([format])];

export const LoggedIn = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl="p/abc123"
			isClosedForComments={false}
			user={aUser}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={true}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionMock.discussion.commentCount}
			loading={false}
			totalPages={discussionMock.pages}
			comments={discussionMock.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);

LoggedIn.storyName = 'when logged in and expanded';
LoggedIn.decorators = [lightDecorator([format])];

export const LoggedInShortDiscussion = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl={discussionWithTwoComments.discussion.key} // Two comments"
			isClosedForComments={false}
			user={aUser}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={true}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionWithTwoComments.discussion.commentCount}
			loading={false}
			totalPages={discussionWithTwoComments.pages}
			comments={discussionWithTwoComments.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
LoggedInShortDiscussion.decorators = [splitTheme([format])];

export const LoggedOutHiddenNoPicks = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl="p/abc123"
			isClosedForComments={false}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={false}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionMock.discussion.commentCount}
			loading={false}
			totalPages={0}
			comments={discussionMock.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
LoggedOutHiddenNoPicks.storyName =
	'when logged out, with no picks and not expanded';
LoggedOutHiddenNoPicks.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Sport,
		},
	]),
];

export const Closed = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl={discussionMock.discussion.key}
			baseUrl="https://discussion.theguardian.com/discussion-api"
			isClosedForComments={true}
			user={aUser}
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={true}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={discussionMock.discussion.commentCount}
			loading={false}
			totalPages={discussionMock.pages}
			comments={discussionMock.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
Closed.storyName = 'Logged in but closed for comments';
Closed.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Lifestyle,
		},
	]),
];

export const NoComments = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl="p/39f5x" // A discussion with zero comments
			baseUrl="https://discussion.theguardian.com/discussion-api"
			isClosedForComments={false}
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={false}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={0}
			loading={false}
			totalPages={0}
			comments={[]}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
NoComments.storyName = 'when no comments have been made';
NoComments.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Culture,
		},
	]),
];

export const LegacyDiscussion = () => (
	<div
		css={css`
			width: 100%;
			max-width: 620px;
		`}
	>
		<Comments
			shortUrl={legacyDiscussionWithoutThreading.discussion.key} // A 'legacy' discussion that doesn't allow threading
			baseUrl="https://discussion.theguardian.com/discussion-api"
			isClosedForComments={false}
			additionalHeaders={{
				'D2-X-UID': 'testD2Header',
				'GU-Client': 'testClientHeader',
			}}
			expanded={false}
			onPermalinkClick={() => {}}
			apiKey=""
			idApiUrl="https://idapi.theguardian.com"
			page={3}
			setPage={() => {}}
			filters={filters}
			commentCount={
				legacyDiscussionWithoutThreading.discussion.commentCount
			}
			loading={false}
			totalPages={legacyDiscussionWithoutThreading.pages}
			comments={legacyDiscussionWithoutThreading.discussion.comments}
			setComment={() => {}}
			handleFilterChange={() => {}}
			setFormActive={() => {}}
			setUserNameMissing={() => {}}
			commentForms={defaultCommentForms}
		/>
	</div>
);
LegacyDiscussion.storyName = "a legacy discussion that doesn't allow threading";
LegacyDiscussion.decorators = [
	splitTheme([
		{
			...format,
			theme: Pillar.Culture,
		},
	]),
];
