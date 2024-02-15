import walking from '../../assets/icons/walking.png';
import bicycle from '../../assets/icons/bicycle.png';
import bus from '../../assets/icons/bus.png';

import '../../css/proplist_styles/overview.css'

const Overview = ({data}) => {
	return (
		<div className="overview-container">
			<div className="overview-heading">
				<h3>Overview</h3>
				
				<div className="mls">
					<div className = "mls1">MLS#:<b>A1165993</b></div> 
					<div className = "mls2">Brokerage: <b>BHHS EWM Realty</b></div> 
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
					<div className="score-icon">
          	<img src={walking} alt="Walk" className='walking'/>
					</div>
					<div className="walkscore">
						<div>Walk Score</div>
						<div className='data'>{data.walk_score}</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="score-icon">
          	<img src={bicycle} alt="bike" className='bike'/>
					</div>
					<div className="walkscore">
						<div>Bike Score</div>
						<div className='data'>{data.bike_score}</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="score-icon">
          	<img src={bus} alt="bus" className='bus'/>
					</div>
					<div className="walkscore">
						<div>Bus Score</div>
						<div className='data'>{data.bus_score}</div>
					</div>
				</div>
			</div>	
		
		</div>
	);
}
 
export default Overview;