function ConfigSelect(props) {
	return <div className="form">
		<label>{props.label}</label>
		<select 
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
		>
			{props.options.map((e, i) => <option value={e.name} key={i}>{e.name}</option>)}
		</select>
		<div>{props
			.options
			.find(e => e.name === props.value)
			?.cost
		} zł </div>
		<img alt={props.value}/>
	</div>
}

export default ConfigSelect