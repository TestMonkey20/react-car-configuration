function ConfigCheckbox(props) {

	return <div className="form">
		<label>{props.label}</label>
		<input 
			type="checkbox"
			checked={props.checked}
			onChange={e => props.onChange(e.target.checked)}
		/>
		<div>
			{props.checked ? `${props.cost} zł` : null}
		</div>
		{props.checked ? <img alt={props.label}/> : null}
	</div>
}

export default ConfigCheckbox