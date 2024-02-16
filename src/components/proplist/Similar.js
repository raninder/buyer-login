import similar1 from '../../assets/images/similar1.png';
import similar2 from '../../assets/images/similar2.png';
import similar3 from '../../assets/images/similar3.png';
import bed from '../../assets/icons/bed.png';
import bath from '../../assets/icons/bath.png';
import area from '../../assets/icons/area.png';
import location from '../../assets/icons/location.png';
import './proplist_styles/similar.css';

const Similar = ({title}) => {
	return ( 
		<div className="similar">
			<h3>{title}</h3>
			<div className="homes">
				<div className="home-card">
					<img className="home" src={similar1} alt='' />
					<p className="price"><span className='cost'>$526,000</span><span className="weeks">1 Week ago</span>  </p>
					<p className="similar-icons">
						<span><img src={bed} alt="bed" /> 3  </span>
						<span><img src={bath} alt="bath" /> 1  </span>
						<span><img src={area} alt="" /> 1186 sq ft  </span>
					</p>
					<p className="icon">
					<span><img src={location} alt="" /> 6323  St. Jamestown, Toronto, CA</span>
					</p>
				</div>
				<div className="home-card">
					<img className="home" src={similar2} alt='' />
					<p className="price"><span className='cost'>$615,000</span><span className="weeks">1 Week ago</span>  </p>
					<p className="similar-icons">
					<span><img src={bed} alt="bed" /> 3  </span>
						<span><img src={bath} alt="bath" /> 1  </span>
						<span><img src={area} alt="" /> 1186 sq ft  </span>
					</p>
					<p className="icon">
					<span><img src={location} alt="" /> 6323  St. Jamestown, Toronto, CA</span>
					</p>
				</div>
				<div className="home-card">
					<img className="home" src={similar3} alt='' />
					<p className="price"><span className='cost'>$589,000</span><span className="weeks">2 Weeks ago</span>  </p>
					<p className="similar-icons">
					<span><img src={bed} alt="bed" /> 3  </span>
						<span><img src={bath} alt="bath" /> 1  </span>
						<span><img src={area} alt="" /> 1186 sq ft  </span>
					</p>
					<p className="icon">
					<span><img src={location} alt="" /> 6323  St. Jamestown, Toronto, CA</span>
					</p>
				</div>
			</div>
		</div>
	);
}
 
export default Similar;