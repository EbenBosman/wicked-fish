const wizardDefaultState = {};

const setupWizard = (state, action) => {
	const wizard = {...state}

	const history =
		state.step_history && state.step_history.length > 0
		? state.step_history
		: [getDefaultHistory(action.steps)];

	wizard.steps = action.steps;
	wizard.maxSteps = action.steps.length;
	wizard.step_history = history;
	wizard.done_url = action.doneUrl;
	wizard.next_button_enabled = true;

	return wizard;
};

const getCurrentStep = (wizard) => {
	return wizard.step_history.sort((a, b) => a.timeStamp - b.timeStamp).reverse()[0];
};

const getDefaultHistory = steps => {
	const stepName = steps[0].name;
	return generateNewStepHistory(1, stepName)
};

const generateNewStepHistory = (stepNumber, stepName) => {
	return {
		number: stepNumber,
		name: stepName,
		timeStamp: new Date().getTime()
	};
};

const nextStep = (wizard) => {
	const currentStep = getCurrentStep(wizard);

	const newStepNumber = currentStep.number + 1 < wizard.maxSteps ? currentStep.number + 1 : wizard.maxSteps;
	const newStepName = wizard.steps.find(step => step.order_number === newStepNumber).name;

	var newStepHistory = generateNewStepHistory(newStepNumber, newStepName);

	wizard.step_history = wizard.step_history.concat(newStepHistory);

	let step = wizard.steps.find(data => data.name === newStepHistory.name);
	step.active = true;

	if(step.is_next_enabled)
		wizard.next_button_enabled = true;
	else
		wizard.next_button_enabled = false;

	wizard.steps = wizard.steps.filter(data => data.name !== newStepHistory.name);
	wizard.steps.push(step);
	wizard.timeStamp = new Date().getTime();

	return wizard;
};

const nextStepEnable = (state, action) => {
	const wizard = {...state};
	let currentStep = wizard.steps.find(data => data.name === action.stepName);
	currentStep.is_next_enabled = true;
	const nextStep = wizard.steps.find(data => data.order_number === (currentStep.order_number + 1));
	nextStep.active = true;

	wizard.steps = wizard.steps.filter(data => data.name !== currentStep.name);
	wizard.steps.push(currentStep);

	wizard.steps = wizard.steps.filter(data => data.name !== nextStep.name);
	wizard.steps.push(nextStep);

	wizard.timeStamp = new Date().getTime();
	return wizard;
};

const nextStepDisable = (state, action) => {
	const wizard = {...state};
	let currentStep = wizard.steps.find(data => data.name === action.stepName);
	currentStep.is_next_enabled = false;

	wizard.steps = wizard.steps.filter(data => data.name !== currentStep.name);
	wizard.steps.push(currentStep);

	wizard.timeStamp = new Date().getTime();
	return wizard;
};

const previousStep = (wizard) => {
	const currentStep = getCurrentStep(wizard);

	const newStepNumber = currentStep.number - 1 < 1 ? 1 : currentStep.number - 1;
	const newStepName = wizard.steps.find(step => step.order_number === newStepNumber).name;

	let step = wizard.steps.find(data => data.name === newStepName);

	if(step.is_next_enabled)
		wizard.next_button_enabled = true;
	else
		wizard.next_button_enabled = false;

	var newStepHistory = generateNewStepHistory(newStepNumber, newStepName);
	wizard.step_history = wizard.step_history.concat(newStepHistory);
	wizard.timeStamp = new Date().getTime();

	return wizard;
};

const skipStep = (wizard, action) => {
	let step = wizard.steps.find(data => data.name === action.stepName);

	if(step.is_next_enabled)
		wizard.next_button_enabled = true;
	else
		wizard.next_button_enabled = false;

	const newStepHistory = generateNewStepHistory(action.stepNumber, action.stepName);

	wizard.step_history = wizard.step_history.concat(newStepHistory);
	wizard.timeStamp = new Date().getTime();

	return wizard;
};

export default (state = wizardDefaultState, action) => {
	switch (action.type) {
		//	Default
		case 'SETUP_WIZARD':
			return {...setupWizard(state, action)};
		case 'NEXT_STEP_WIZARD':
			return { ...nextStep(state) };
		case 'NEXT_STEP_WIZARD_ENABLE':
			return { ...nextStepEnable(state, action) };
		case 'NEXT_STEP_WIZARD_DISABLE':
			return { ...nextStepDisable(state, action) };
		case 'PREVIOUS_STEP_WIZARD':
			return { ...previousStep(state) };
		case 'SKIP_TO_STEP_WIZARD':
			return { ...skipStep(state, action) };
		case 'LOG_OUT_OF_API':
			return {...wizardDefaultState};
		default:
			return state;

		//	Other steps
	}
};