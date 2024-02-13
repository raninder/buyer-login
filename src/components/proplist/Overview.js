import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faBicycle, faBus} from "@fortawesome/free-solid-svg-icons";
import '../styles/overview.css'

const Overview = ({data}) => {
	return (
		<div className="overview-container">
			<div className="overview-heading">
				<h3>Overview</h3>
				
				<div className="mls">
					<input type="text" value="MLS#A1165993" readOnly></input>
					<input type="text" value="Brokerage BHHS EWM Realty" readOnly></input>
				</div>
			</div>
  
			<p className="overview-content">
				{data.description}
			</p>
			<br/>
			<hr/>
			<br/>
			<h3>Getting Around</h3>
			<div className="score">
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faPersonWalking} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Walk Score</div>
						<div>{data.walk_score}</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faBicycle} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Bike Score</div>
						<div>{data.bike_score}</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faBus} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Bus Score</div>
						<div>{data.bus_score}</div>
					</div>
				</div>
			</div>	
		
		</div>
	);
}
 
export default Overview;