import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.jpeg';
import pic3 from '../images/pic3.jpeg';
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faSquare , faLocationDot} from "@fortawesome/free-solid-svg-icons";
import '../styles/similar.css'

const Nearby = () => {
	return ( 
	
		<div className="similar">
			<h3>Home Nearby</h3>
			<div className="homes">
				<div className="home-card">
					<img className="home" src={pic1} alt='' />
					<p className="price">$526,000  </p>
					<p className="price-icons">
						<span><FontAwesomeIcon icon={faBed} />3  </span>
						<span><FontAwesomeIcon icon={faBath} />1  </span>
						<span><FontAwesomeIcon icon={faSquare} />1200 sq ft  </span>
					</p>
					<p className="icon">
						<span><FontAwesomeIcon icon={faLocationDot} /> 724 Olive Avenue, Toronto CA</span>
					</p>
				</div>
				<div className="home-card">
					<img className="home" src={pic2} alt='' />
					<p className="price">$526,000  </p>
					<p className="price-icons">
						<span><FontAwesomeIcon icon={faBed} />3  </span>
						<span><FontAwesomeIcon icon={faBath} />1  </span>
						<span><FontAwesomeIcon icon={faSquare} />1186 sq ft  </span>
					</p>
					<p className="icon">
						<span><FontAwesomeIcon icon={faLocationDot} /> 724 Olive Avenue, Toronto CA</span>
					</p>
				</div>
				<div className="home-card">
					<img className="home" src={pic3} alt='' />
					<p className="price">$526,000  </p>
					<p className="price-icons">
						<span><FontAwesomeIcon icon={faBed} />3  </span>
						<span><FontAwesomeIcon icon={faBath} />1  </span>
						<span><FontAwesomeIcon icon={faSquare} />1186 sq ft  </span>
					</p>
					<p className="icon">
						<span><FontAwesomeIcon icon={faLocationDot} /> 724 Olive Avenue, Toronto CA</span>
					</p>
				</div>
			</div>

		<Map />
		</div>
	);
}
 
export default Nearby;