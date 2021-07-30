function ConfigSelect(props) {
	return <div>
		<label>{props.label}</label>
		<select 
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
		>
			{props.options.map((e, i) => <option value={e} key={i}>{e}</option>)}
		</select>
	</div>
}

export default ConfigSelect