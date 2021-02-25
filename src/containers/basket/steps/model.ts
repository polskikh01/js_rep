export enum BasketStep {
    STEP1 = 'STEP1',
    STEP2 = 'STEP2',
    STEP3 = 'STEP3',
}

export type StageProps = {
    nextStep: () => void;
};
