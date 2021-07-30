import React, { useState } from 'react';
import ConfigSelect from './ConfigSelect'
import { useSelector, useDispatch } from 'react-redux'

function ConfigForm() {

	const config = useSelector(store => store.configuration)
	const dispatch = useDispatch()

	const engines = [
		'V6',
		'V8',
		'Vankel',
	]
	const caroseryLacquer = [
		'Red',
		'Green',
		'Blue',
	]
	const rimLacquer = [
		'Red',
		'Green',
		'Blue',
	]
	const rimSize = [
		'18\'',
		'20\'',
		'22\'',
	]
	const seats = [
		'Alcantra',
		'Leather',
		'Nylon',
	]
	const upholsteryColor = [
		'Black',
		'White',
		'Cream',
	]
	
	return <div>
		<ConfigSelect 
			label='engine'
			options={engines}
			value={config.engine}
			onChange={value => dispatch({ type: 'CHANGE_ENGINE', payload: value })}
		/>	
		<ConfigSelect 
			label='caroseryLacquer'
			options={caroseryLacquer}
			value={config.caroseryLacquer}
			onChange={value => dispatch({ type: 'CHANGE_CAROSERY_LACQUER', payload: value })}
		/>
		<ConfigSelect 
			label='rimLacquer'
			options={rimLacquer}
			value={config.rimLacquer}
			onChange={value => dispatch({ type: 'CHANGE_RIM_LACQUER', payload: value })}
		/>
		<ConfigSelect 
			label='rimSize'
			options={rimSize}
			value={config.rimSize}
			onChange={value => dispatch({ type: 'CHANGE_RIM_SIZE', payload: value })}
		/>
		<ConfigSelect 
			label='seats'
			options={seats}
			value={config.seats}
			onChange={value => dispatch({ type: 'CHANGE_SEATS', payload: value })}
		/>
		<ConfigSelect 
			label='upholsteryColor'
			options={upholsteryColor}
			value={config.upholsteryColor}
			onChange={value => dispatch({ type: 'CHANGE_UPHOLSTERY_COLOR', payload: value })}
		/>
	</div>
	
	
}

export default ConfigForm;