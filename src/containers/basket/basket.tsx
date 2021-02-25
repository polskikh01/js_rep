import React from 'react';
import MetaTags from 'react-meta-tags';
import i18next from 'i18next';

import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';

import { BasketStep, StageProps } from './steps/model';
import { useStages } from '../../hooks';
import { BasketPage } from '../../components';

const steps = {
    [BasketStep.STEP1]: {
        component: Step1,
        next: BasketStep.STEP2,
    },
    [BasketStep.STEP2]: {
        component: Step2,
        next: BasketStep.STEP3,
    },
    [BasketStep.STEP3]: {
        component: Step3,
        next: null,
    },
};

function Basket() {
    const [currentStep, nextStep] = useStages(steps, BasketStep.STEP1);
    const Stage: React.FC<StageProps> = steps[currentStep].component;

    return (
        <BasketPage>
            <MetaTags>
                <title>{i18next.t('js_rep.BASKET')}</title>
            </MetaTags>
            <Stage nextStep={nextStep} />
        </BasketPage>
    );
}

export default Basket;
