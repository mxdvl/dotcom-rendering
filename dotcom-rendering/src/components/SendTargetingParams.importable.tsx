import { log } from '@guardian/libs';
import { useEffect } from 'react';
import { getAnalyticsClient } from '../lib/bridgetApi';
import { isServer } from '../lib/isServer';
import { getTargetingParams } from '../lib/sendTargetingParams';
import type { EditionCommercialProperties } from '../types/commercial';

type Props = {
	editionCommercialProperties: EditionCommercialProperties;
};

export const SendTargetingParams = ({ editionCommercialProperties }: Props) => {
	if (isServer) {
		throw new Error('SendTargetingParams is client only');
	}

	useEffect(() => {
		const targetingParams = getTargetingParams(editionCommercialProperties);

		void getAnalyticsClient()
			.sendTargetingParams(targetingParams)
			.catch(() => undefined);

		log('commercial', '🎯 Targeting Params', editionCommercialProperties);
	});

	return null;
};
