const userInitialState = {
	engine: 'V6',
	caroseryLacquer: '',
	rimLacquer: '',
	rimSize: '',
	seats: '',
	upholsteryColor: '',


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
		default:
			return state
	}
}

export default {
	configuration
}