export enum BasketStep {
    STEP1 = 'STEP1',
    STEP2 = 'STEP2',
}

export type StageProps = {
    nextStep: () => void;
};
