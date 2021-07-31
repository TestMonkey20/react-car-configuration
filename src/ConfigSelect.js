import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfigSelect(props) {
	return <div>								
		<Container>
			<Row>
				<Col><label>{props.label}</label></Col>		 	
			</Row>
			<Row>
				<Col>
					<Form.Select size="sm" 
						value={props.value}
						onChange={e => props.onChange(e.target.value)}
					>
						{props.options.map((e, i) => <option value={e.name} key={i}>{e.name}</option>)}
					</Form.Select >
				</Col>
				<Col>
					<div>{props
							.options
							.find(e => e.name === props.value)
							?.cost
						} zł 
					</div>
				</Col>
				<Col>
					<img alt={props.value}/>
				</Col>
			</Row>
		</Container>
	</div>
}

export default ConfigSelect