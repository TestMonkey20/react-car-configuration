const userInitialState = {
	engine: 'V6',
	caroseryLacquer: 'Black',
	rimLacquer: 'Black',
	rimSize: '18"',
	seats: 'Alcantara',
	upholsteryColor: 'Black',
	dynamicLED: false,
	premiumSound: false,
	sportSuspension: false,
}

function configuration(state = userInitialState, action) {
	switch (action.type) {
		case 'CHANGE_ENGINE':
			return {
				...state,
				engine: action.payload,
			}
		case 'CHANGE_CAROSERY_LACQUER':
			return {
				...state,
				caroseryLacquer: action.payload,
			}
		case 'CHANGE_RIM_LACQUER':
			return {
				...state,
				rimLacquer: action.payload,
			}
		case 'CHANGE_RIM_SIZE':
			return {
				...state,
				rimSize: action.payload,
			}
		case 'CHANGE_SEATS':
			return {
				...state,
				seats: action.payload,
			}
		case 'CHANGE_UPHOLSTERY_COLOR':
			return {
				...state,
				upholsteryColor: action.payload,
			}
		case 'CHANGE_DYNAMIC_LED':
			return {
				...state,
				dynamicLED: action.payload,
			}
		case 'CHANGE_PREMIUM_SOUND':
			return {
				...state,
				premiumSound: action.payload,
			}
		case 'CHANGE_SPORT_SUSPENSION':
			return {
				...state,
				sportSuspension: action.payload,
			}
		default:
			return state
	}
}

const reducers = {
	configuration
}

export default reducers