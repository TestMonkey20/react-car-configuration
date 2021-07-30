function ConfigCheckbox(props) {
	return <div>
		<label>{props.label}</label>
		<input 
			type="checkbox"
			checked={props.checked}
			onChange={e => props.onChange(e.target.checked)}
		/>
	</div>
}

export default ConfigCheckbox