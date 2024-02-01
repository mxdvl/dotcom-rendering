import { css } from '@emotion/react';
import { palette as sourcePalette, space } from '@guardian/source-foundations';
import { SvgPlus } from '@guardian/source-react-components';
import { useEffect, useState } from 'react';
import type { preview } from '../../lib/discussionApi';
import { getMoreResponses } from '../../lib/discussionApi';
import type {
	CommentType,
	SignedInUser,
	ThreadsType,
} from '../../types/discussion';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import { CommentReplyPreview } from './CommentReplyPreview';
import { PillarButton } from './PillarButton';

type Props = {
	comment: CommentType;
	isClosedForComments: boolean;
	shortUrl: string;
	user?: SignedInUser;
	threads: ThreadsType;
	commentBeingRepliedTo?: CommentType;
	setCommentBeingRepliedTo: (commentBeingRepliedTo?: CommentType) => void;
	commentToScrollTo?: number;
	mutes: string[];
	toggleMuteStatus: (userId: string) => void;
	onPermalinkClick: (commentId: number) => void;
	onPreview?: typeof preview;
	showPreview: boolean;
	setShowPreview: (showPreview: boolean) => void;
	isCommentFormActive: boolean;
	setIsCommentFormActive: (isActive: boolean) => void;
	error: string;
	setError: (error: string) => void;
	userNameMissing: boolean;
	setUserNameMissing: (isUserNameMissing: boolean) => void;
	previewBody: string;
	setPreviewBody: (previewBody: string) => void;
	info: string;
	setInfo: (info: string) => void;
};

const nestingStyles = css`
	list-style-type: none;
	padding-left: ${space[2]}px;
	margin-left: ${space[12]}px;
`;

const topBorder = css`
	border-top: 1px solid ${sourcePalette.neutral[86]};
`;

const commentContainerStyles = css`
	list-style-type: none;
	padding-left: 0;
`;

const selectedStyles = css`
	background-color: ${sourcePalette.neutral[97]};
	margin-left: -${space[2]}px;
	padding-left: ${space[2]}px;
	margin-right: -${space[2]}px;
	padding-right: ${space[2]}px;
`;

const removeMargin = css`
	margin: 0px;
`;

export const avatar = (avatarSize: number) => css`
	border-radius: ${avatarSize + 10}px;
	width: ${avatarSize}px;
	height: ${avatarSize}px;
`;

export const CommentContainer = ({
	comment,
	isClosedForComments,
	user,
	shortUrl,
	threads,
	commentBeingRepliedTo,
	setCommentBeingRepliedTo,
	commentToScrollTo,
	mutes,
	toggleMuteStatus,
	onPermalinkClick,
	onPreview,
	showPreview,
	setShowPreview,
	isCommentFormActive,
	setIsCommentFormActive,
	error,
	setError,
	userNameMissing,
	setUserNameMissing,
	previewBody,
	setPreviewBody,
	info,
	setInfo,
}: Props) => {
	// Filter logic
	const [expanded, setExpanded] = useState<boolean>(threads === 'expanded');
	const [responses, setResponses] = useState(comment.responses ?? []);
	const [loading, setLoading] = useState<boolean>(false);

	const showResponses = threads !== 'unthreaded';

	/**
	 * @param responseCount a number > 3
	 */
	const decideShowMoreText = (responseCount: number) => {
		const remainingResponses = responseCount - 3;
		return remainingResponses === 1
			? `Show 1 more reply`
			: `Show ${remainingResponses} more replies`;
	};

	useEffect(() => {
		setResponses(comment.responses ?? []);
	}, [comment]);

	const expand = (commentId: number) => {
		setLoading(true);
		getMoreResponses(commentId)
			.then((result) => {
				if (result.kind === 'error') {
					console.error(result.error);
					return;
				}
				setExpanded(true);
				setResponses(result.value);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const onAddComment = (response: CommentType) =>
		setResponses([...responses, response]);

	return (
		<div css={[commentToScrollTo === comment.id && selectedStyles]}>
			<Comment
				comment={comment}
				isClosedForComments={isClosedForComments}
				setCommentBeingRepliedTo={setCommentBeingRepliedTo}
				user={user}
				isReply={false}
				isMuted={mutes.includes(comment.userProfile.userId)}
				toggleMuteStatus={toggleMuteStatus}
				onPermalinkClick={onPermalinkClick}
				error={error}
				setError={setError}
			/>

			<>
				{showResponses && responses.length > 0 && (
					<div css={nestingStyles}>
						<ul css={[commentContainerStyles, removeMargin]}>
							{responses.map((responseComment) => (
								<li key={responseComment.id}>
									<Comment
										comment={responseComment}
										isClosedForComments={
											isClosedForComments
										}
										setCommentBeingRepliedTo={
											setCommentBeingRepliedTo
										}
										user={user}
										isReply={true}
										wasScrolledTo={
											commentToScrollTo ===
											responseComment.id
										}
										isMuted={mutes.includes(
											responseComment.userProfile.userId,
										)}
										toggleMuteStatus={toggleMuteStatus}
										onPermalinkClick={onPermalinkClick}
										error={error}
										setError={setError}
									/>
								</li>
							))}
						</ul>
						{!expanded &&
							comment.metaData &&
							!!comment.metaData.responseCount &&
							comment.metaData.responseCount > 3 && (
								<div
									css={[
										topBorder,
										css`
											padding-top: ${space[3]}px;
											padding-bottom: ${space[3]}px;
										`,
									]}
								>
									<PillarButton
										priority="secondary"
										icon={<SvgPlus />}
										iconSide="left"
										linkName="Show more replies"
										onClick={() => expand(comment.id)}
										size="xsmall"
									>
										{loading
											? 'loading...'
											: decideShowMoreText(
													comment.metaData
														.responseCount,
											  )}
									</PillarButton>
								</div>
							)}
					</div>
				)}
				{commentBeingRepliedTo &&
					(commentBeingRepliedTo.id === comment.id ||
						responses.find(
							(response: CommentType) =>
								response.id === commentBeingRepliedTo.id,
						)) &&
					user && (
						<div
							id={`comment-reply-form-${commentBeingRepliedTo.id}`}
							css={nestingStyles}
						>
							<CommentReplyPreview
								commentBeingRepliedTo={commentBeingRepliedTo}
							/>
							<CommentForm
								shortUrl={shortUrl}
								onAddComment={onAddComment}
								user={user}
								setCommentBeingRepliedTo={
									setCommentBeingRepliedTo
								}
								commentBeingRepliedTo={commentBeingRepliedTo}
								onPreview={onPreview}
								showPreview={showPreview}
								setShowPreview={setShowPreview}
								isActive={isCommentFormActive}
								setIsActive={setIsCommentFormActive}
								error={error}
								setError={setError}
								userNameMissing={userNameMissing}
								setUserNameMissing={setUserNameMissing}
								previewBody={previewBody}
								setPreviewBody={setPreviewBody}
								info={info}
								setInfo={setInfo}
							/>
						</div>
					)}
			</>
		</div>
	);
};
