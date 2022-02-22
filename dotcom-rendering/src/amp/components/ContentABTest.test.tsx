import { render } from '@testing-library/react';
import { TestProvider, useTestGroup } from './ContentABTest';

test('throws error when used outside of provider', () => {
	expect(() => {
		const Component = () => {
			useTestGroup();
			return null;
		};

		render(<Component />);
	}).toThrow('useTestGroup must be used within the TestProvider');
});

test('returns a valid group ID when used inside of a provider', () => {
	const shortUrlId = '/abc';

	const Component = () => {
		const { group } = useTestGroup();

		if (group === undefined) {
			return null;
		}

		return <span>{group.toString()}</span>;
	};

	const { container } = render(
		<TestProvider shortUrlId={shortUrlId}>
			<Component />
		</TestProvider>,
	);

	// We don't care into which bucket the content has been placed
	// Just that it has been placed in one
	expect(container).toHaveTextContent(/0|1|2|3/);
});
