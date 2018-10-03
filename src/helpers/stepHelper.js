import * as steps from '../constants/stepConstants';

export function nextStep(current) {
    return current < steps.SUMMARY_STEP ? current + 1 : steps.SUMMARY_STEP;
}

export function previousStep(current) {
    return current > steps.SCHEDULE_STEP ? current - 1 : steps.SCHEDULE_STEP;
}
