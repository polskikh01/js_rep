import { useReducer, useCallback } from 'react';

export type Stages = {
    [stageKey: string]: {
        next?: string;
    };
};

export const useStages = <T extends Stages>(
    stages: T,
    initialStageKey: string
): [string, () => void] => {
    const [currentStep, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'next':
                if (stages[state].next) {
                    return stages[state].next;
                }
                return state;
            default:
                return state;
        }
    }, initialStageKey);

    const nextStep = useCallback(() => {
        dispatch({ type: 'next' });
    }, []);

    return [currentStep, nextStep];
};
