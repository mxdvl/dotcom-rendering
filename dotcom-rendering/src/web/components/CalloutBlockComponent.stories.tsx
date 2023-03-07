import fetchMock from 'fetch-mock';
import { calloutCampaign as calloutCampaignV2 } from '../../../fixtures/manual/calloutCampaignV2';
import { CalloutBlockComponent } from './CalloutBlockComponent.importable';

const tomorrow = new Date().setDate(new Date().getDate() + 1) / 1000;
const yesterday = new Date().setDate(new Date().getDate() - 1) / 1000;
const pageId =
	'world/2023/mar/01/tell-us-have-you-been-affected-by-the-train-crash-in-greece';

const goodRequest = () => {
	fetchMock
		.restore()
		.post(
			'https://callouts.code.dev-guardianapis.com/formstack-campaign/submit',
			{
				status: 201,
				body: null,
			},
		);
};

const badRequest = () => {
	fetchMock
		.restore()
		.post(
			'https://callouts.code.dev-guardianapis.com/formstack-campaign/submit',
			{
				status: 400,
				body: null,
			},
		);
};

export default {
	component: CalloutBlockComponent,
	title: 'Components/CalloutBlockComponent',
};

export const Collapsible = () => {
	goodRequest();
	return (
		<CalloutBlockComponent
			callout={{
				...calloutCampaignV2,
				isNonCollapsible: false,
				activeUntil: tomorrow,
			}}
			pageId={pageId}
		/>
	);
};

Collapsible.story = { name: 'Collapsible' };

export const NonCollapsible = () => {
	goodRequest();
	return (
		<CalloutBlockComponent
			callout={{ ...calloutCampaignV2, activeUntil: tomorrow }}
			pageId={pageId}
		/>
	);
};

NonCollapsible.story = { name: 'NonCollapsible' };

export const SubmissionFailure = () => {
	badRequest();
	return (
		<CalloutBlockComponent
			callout={{ ...calloutCampaignV2, activeUntil: tomorrow }}
			pageId={pageId}
		/>
	);
};

SubmissionFailure.story = { name: 'Submission Failure' };

export const Expired = () => {
	return (
		<CalloutBlockComponent
			callout={{ ...calloutCampaignV2, activeUntil: yesterday }}
			pageId={pageId}
		/>
	);
};

Expired.story = { name: 'Expired' };
