
import Map from './Map';
import Similar from './Similar';
import '../../css/proplist_styles/similar.css'

const Nearby = ({title}) => {
	return ( 
		<div className="nearby">
		<Similar title={title}/>
		<Map />
		</div>
	);
}
 
export default Nearby;