import Chart from "./Chart";
import RangeBars from "./RangeBars";
import './proplist_styles/sidebar.css';

const Sidebar = () => {
	return ( 
		<div className= "sidebar">
			<div className="top">
				<h3> Home Price</h3>
				<h1>$525,000</h1>
				<button>GET PRE-QUALIFIED</button>
			</div>

		<div className="mortgage">	
			<div className="payment">
				<div className="head">
					<h3>Monthly Payment</h3>
					<button> Reset</button>
				</div>
				<Chart />
			</div>
			<div className="range-container">
				<RangeBars />
			</div>
		</div>
	</div>	
	);
}
 
export default Sidebar;