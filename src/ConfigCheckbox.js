import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfigCheckbox(props) {

	return <div>
		
	<Container className="mb-3">
    	<Row>
			<Col>
				<Form.Check 
					type="checkbox"
					checked={props.checked}
					onChange={e => props.onChange(e.target.checked)}
					label={props.label}
				/>
			</Col>
			<Col>
				{props.checked ? `${props.cost} zł` : null}
			</Col>
			<Col>
				{props.checked ? <img alt={props.label}/> : null}
			</Col>
    	</Row>
	</Container>
	</div>
	
}

export default ConfigCheckbox