import React from 'react';

import Step1 from './steps/step1';
import Step2 from './steps/step2';

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
        next: null,
    },
};

function Basket() {
    const [currentStep, nextStep] = useStages(steps, BasketStep.STEP1);
    const Stage: React.FC<StageProps> = steps[currentStep].component;

    return (
        <BasketPage>
            <Stage nextStep={nextStep} />
        </BasketPage>
    );
}

export default Basket;
