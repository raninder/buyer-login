import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faSquare , faLocationDot} from "@fortawesome/free-solid-svg-icons";
import '../styles/price.css'


const Price = ({data}) => {
	return (
		<div class="desc-container">
			<div className="price-container">
					<p className="price">{data.price}  </p>
					<p className="price-icons">
					<span><FontAwesomeIcon icon={faBed} />  {data.beds}  </span>
					<span><FontAwesomeIcon icon={faBath} />  {data.baths}  </span>
					<span><FontAwesomeIcon icon={faSquare} />  {data.area} </span>
					</p>
					<p className="icon">
					<span><FontAwesomeIcon icon={faLocationDot} /> {data.location}</span>
					</p>
			</div>
			<div className="map">
					<iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.983726430692!2d-79.3751554889926!3d43.66930827098086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb51a9d21909%3A0x6992d9ceb65fdcb4!2sSt%20James%20Ave%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1705423951476!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
}
 
export default Price;