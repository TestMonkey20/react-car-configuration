import { engines, caroseryLacquer, rimLacquer, rimSize, seats, upholsteryColor  } from './SetupOptions'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Summary() {

	const config = useSelector(store => store.configuration)
	const engineCost = engines.find(e => e.name === config.engine).cost
	const carroseryLacquerCost = caroseryLacquer.find(e => e.name === config.caroseryLacquer).cost
	const rimLacquerCost = rimLacquer.find(e => e.name === config.rimLacquer).cost
	const rimSizeCost = rimSize.find(e => e.name === config.rimSize).cost
	const seatsCost = seats.find(e => e.name === config.seats).cost
	const upholsteryColorCost = upholsteryColor.find(e => e.name === config.upholsteryColor).cost

	return (<div>
		<Container>
			<Row>
				<Col></Col>
					<Col>
						<div>
							<ul>
								<li>Engine: {config.engine}, {engineCost} zł</li>
								<li>Caroserylacquer: {config.caroseryLacquer}, {carroseryLacquerCost} zł</li>
								<li>Rim lacquer: {config.rimLacquer}, {rimLacquerCost} zł</li>
								<li>Rim size: {config.rimSize}, {rimSizeCost} zł</li>
								<li>Seats: {config.seats}, {seatsCost} zł</li>
								<li>Upholstery color: {config.upholsteryColor}, {upholsteryColorCost} zł</li>
								{config.dynamicLED ? <li>Dynamic LED: 13000 zł</li> : null}
								{config.premiumSound ? <li>Premium Sound: 14000 zł</li> : null}
								{config.sportSuspension ? <li>Sport suspension: 15000 zł</li> : null}
							</ul>
							<div>
								Total cost: {	
									engineCost 
									+ carroseryLacquerCost 
									+ rimLacquerCost 
									+ rimSizeCost 
									+ seatsCost 
									+ upholsteryColorCost
									+ (config.dynamicLED ? 13000 : 0)
									+ (config.premiumSound ? 14000 : 0)
									+ (config.sportSuspension ? 15000 : 0)
								} zł
							</div>
						</div>
					</Col>
				<Col></Col>		
			</Row>	
		</Container>
	</div>)

}

export default Summary