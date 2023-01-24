import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';
import { Button } from './Button';
import { ChoiceCardSelection } from './ContributionsEpicChoiceCards';
import {Cta, SecondaryCtaType, Tracking} from "./types/props/shared";
import {EpicVariant} from "./types/abTests/epic";
import {OphanComponentEvent} from "@guardian/libs";

const buttonWrapperStyles = css`
    margin: ${space[6]}px ${space[2]}px ${space[1]}px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &.hidden {
        display: none;
    }
`;

const paymentImageStyles = css`
    display: inline-block;
    width: auto;
    height: 25px;
    margin: ${space[1]}px 0;
`;

const buttonMargins = css`
    margin: ${space[1]}px ${space[2]}px ${space[1]}px 0;
`;

const PrimaryCtaButton = ({
    cta,
    tracking,
    countryCode,
    numArticles,
}: {
    cta?: Cta;
    tracking: Tracking;
    countryCode?: string;
    numArticles: number;
}): JSX.Element | null => {
    if (!cta) {
        return null;
    }

    const buttonText = cta.text || 'Support The Guardian';
    const baseUrl = cta.baseUrl || 'https://support.theguardian.com/contribute';
    // const urlWithRegionAndTracking = addRegionIdAndTrackingParamsToSupportUrl(
    //     baseUrl,
    //     tracking,
    //     numArticles,
    //     countryCode,
    // );

    return (
        <div css={buttonMargins}>
            <Button
                onClickAction={baseUrl}
                showArrow
                data-ignore="global-link-styling"
            >
                {buttonText}
            </Button>
        </div>
    );
};

const SecondaryCtaButton = ({
    cta,
    tracking,
    numArticles,
    countryCode,
}: {
    cta: Cta;
    tracking: Tracking;
    countryCode?: string;
    numArticles: number;
}): JSX.Element | null => {
    // const url = addRegionIdAndTrackingParamsToSupportUrl(
    //     cta.baseUrl,
    //     tracking,
    //     numArticles,
    //     countryCode,
    // );

    return (
        <div css={buttonMargins}>
            <Button onClickAction={cta.baseUrl} showArrow priority="secondary">
                {cta.text}
            </Button>
        </div>
    );
};

interface ContributionsEpicButtonsProps {
    variant: EpicVariant;
    tracking: Tracking;
    countryCode?: string;
    onOpenReminderClick: () => void;
    submitComponentEvent?: (event: OphanComponentEvent) => void;
    isReminderActive: boolean;
    isSignedIn: boolean;
    showChoiceCards?: boolean;
    choiceCardSelection?: ChoiceCardSelection;
    numArticles: number;
}

export const ContributionsEpicButtons = ({
    variant,
    tracking,
    countryCode,
    onOpenReminderClick,
    submitComponentEvent,
    isReminderActive,
    isSignedIn,
    showChoiceCards,
    choiceCardSelection,
    numArticles,
}: ContributionsEpicButtonsProps): JSX.Element | null => {
    // const [hasBeenSeen, setNode] = useHasBeenSeen({}, true);
    const { cta, secondaryCta, showReminderFields } = variant;

    if (!cta) {
        return null;
    }

    const getCta = (cta: Cta): Cta =>
        showChoiceCards && choiceCardSelection
            ? {
                  text: cta.text,
                  baseUrl: `${cta.baseUrl}?selected-contribution-type=${choiceCardSelection.frequency}&selected-amount=${choiceCardSelection.amount}`,
              }
            : cta;

    // useEffect(() => {
    //     if (hasBeenSeen && submitComponentEvent) {
    //         submitComponentEvent(OPHAN_COMPONENT_EVENT_CTAS_VIEW);
	//
    //         if (showReminderFields && !hasSetReminder()) {
    //             submitComponentEvent(getReminderViewEvent(isSignedIn));
    //         }
    //     }
    // }, [hasBeenSeen]);

    // const openReminder = () => {
    //     if (submitComponentEvent) {
    //         submitComponentEvent(OPHAN_COMPONENT_EVENT_REMINDER_OPEN);
    //     }
    //     onOpenReminderClick();
    // };

    // const hasSupportCta =
    //     isSupportUrl(cta.baseUrl) ||
    //     (secondaryCta?.type === SecondaryCtaType.Custom && isSupportUrl(secondaryCta.cta.baseUrl));

    return (
        <div css={buttonWrapperStyles} data-testid="epic=buttons">
            {!isReminderActive && (
                <>
                    <PrimaryCtaButton
                        cta={getCta(cta)}
                        tracking={tracking}
                        numArticles={numArticles}
                        countryCode={countryCode}
                    />

                    {secondaryCta?.type === SecondaryCtaType.Custom &&
                    secondaryCta.cta.baseUrl &&
                    secondaryCta.cta.text && (
                        <SecondaryCtaButton
                            cta={secondaryCta.cta}
                            tracking={tracking}
                            countryCode={countryCode}
                            numArticles={numArticles}
                        />
					)}

					<img
						width={422}
						height={60}
						src="https://assets.guim.co.uk/images/acquisitions/2db3a266287f452355b68d4240df8087/payment-methods.png"
						alt="Accepted payment methods: Visa, Mastercard, American Express and PayPal"
						css={paymentImageStyles}
					/>
                </>
            )}
        </div>
    );
};
