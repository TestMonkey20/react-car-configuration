import ConfigSelect from './ConfigSelect'
import ConfigCheckbox from './ConfigCheckbox'
import { useSelector, useDispatch } from 'react-redux'
import { engines, caroseryLacquer, rimLacquer, rimSize, seats, upholsteryColor  } from './SetupOptions'

function ConfigForm() {

	const config = useSelector(store => store.configuration)
	const dispatch = useDispatch()

	return <div>
		
		<ConfigSelect 
			label='Engine:'
			options={engines}
			value={config.engine}
			onChange={value => dispatch({ type: 'CHANGE_ENGINE', payload: value })}
		/>	

		<ConfigSelect 
			label='Carosery lacquer:'
			options={caroseryLacquer}
			value={config.caroseryLacquer}
			onChange={value => dispatch({ type: 'CHANGE_CAROSERY_LACQUER', payload: value })}
		/>

		<ConfigSelect 
			label='Rim lacquer:'
			options={rimLacquer}
			value={config.rimLacquer}
			onChange={value => dispatch({ type: 'CHANGE_RIM_LACQUER', payload: value })}
		/>
		
		<ConfigSelect 
			label='Rim size:'
			options={rimSize}
			value={config.rimSize}
			onChange={value => dispatch({ type: 'CHANGE_RIM_SIZE', payload: value })}
		/>

		<ConfigSelect 
			label='Seats'
			options={seats}
			value={config.seats}
			onChange={value => dispatch({ type: 'CHANGE_SEATS', payload: value })}
		/>

		<ConfigSelect 
			label='Upholstery color:'
			options={upholsteryColor}
			value={config.upholsteryColor}
			onChange={value => dispatch({ type: 'CHANGE_UPHOLSTERY_COLOR', payload: value })}
		/>

		<ConfigCheckbox 
			label='Dynamic led reflectors'
			checked={config.dynamicLED}
			onChange={value => dispatch({ type: 'CHANGE_DYNAMIC_LED', payload: value })}
			cost={13000}
		/>

		<ConfigCheckbox 
			label='Premium sound system'
			checked={config.premiumSound}
			onChange={value => dispatch({ type: 'CHANGE_PREMIUM_SOUND', payload: value })}
			cost={14000}
		/>

		<ConfigCheckbox  
			label='Sport suspension'
			checked={config.sportSuspension}
			onChange={value => dispatch({ type: 'CHANGE_SPORT_SUSPENSION', payload: value })}
			cost={15000}
		/>
	</div>
	
}

export default ConfigForm;