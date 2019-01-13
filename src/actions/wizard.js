export const setupWizard = (steps, doneUrl) => ({
	type: 'SETUP_WIZARD',
	doneUrl,
    steps
});

export const nextStep = () => ({
	type: 'NEXT_STEP_WIZARD'
});

export const nextStepEnable = (stepName) => ({
	type: 'NEXT_STEP_WIZARD_ENABLE',
	stepName
});

export const nextStepDisable = (stepName) => ({
	type: 'NEXT_STEP_WIZARD_DISABLE',
	stepName
});

export const previousStep = () => ({
	type: 'PREVIOUS_STEP_WIZARD'
});

export const skipToStep = (stepNumber, stepName) => ({
	type: 'SKIP_TO_STEP_WIZARD',
	stepNumber,
	stepName
});