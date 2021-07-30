import React, { useState } from 'react';

function ConfigForm() {

	const engines = [
		"V6",
		"V8",
		"Vankel",
	]
	const caroseryLacquer = [
		"Red",
		"Green",
		"Blue",
	]
	const rimLacquer = [
		"Red",
		"Green",
		"Blue",
	]
	const rimSize = [
		"18\"",
		"20\"",
		"22\"",
	]
	const seats = [
		"Alcantra",
		"Leather",
		"Nylon",
	]
	const upholsteryColor = [
		"Black",
		"White",
		"Cream",
	]
	
	const [selectedEngine, setSelectedEngine] = useState(0)
	const [selectedcaroseryLacquer, setCaroseryLacquer] = useState(0)
	const [selectedrimLacquer, setRimLacquer] = useState(0)
	const [selectedrimSize, setRimSize] = useState(0)
	const [selectedseats, setSeats] = useState(0)
	const [selectedupholsteryColor, setUpholsteryColor] = useState(0)

	console.log('render')

	return <div>
		<select value={selectedEngine} onChange={e => setSelectedEngine(e.target.value)}>
			{engines.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
		<select value={selectedcaroseryLacquer} onChange={e => setCaroseryLacquer(e.target.value)}>
			{caroseryLacquer.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
		<select value={selectedrimLacquer} onChange={e => setRimLacquer(e.target.value)}>
			{rimLacquer.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
		<select value={selectedrimSize} onChange={e => setRimSize(e.target.value)}>
			{rimSize.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
		<select value={selectedseats} onChange={e => setSeats(e.target.value)}>
			{seats.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
		<select value={selectedupholsteryColor} onChange={e => setUpholsteryColor(e.target.value)}>
			{upholsteryColor.map((e, i) => <option value={i} key={i}>{e}</option>)}
		</select>
	</div>
	
	
}

export default ConfigForm;