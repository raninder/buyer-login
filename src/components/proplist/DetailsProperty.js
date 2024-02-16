import arrow from '../../assets/icons/arrow.png';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './proplist_styles/details.css'

const DetailsProperty = ({data}) => {
	return ( 
		<div className="details">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography><h2>Property</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Parking</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Total Spaces: </span> {data.t_spaces}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Features: </span><b className="bdiv2">{data.features}</b></p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Garage Spaces: </span>  {data.g_spaces}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Covered Spaces: </span>{data.c_spaces}</p>
					<br />
					<h5> Property</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Levels: </span>{data.levels}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Frontage Length: </span> {data.frontage}</p>
				</div>
				<div className="rooms2">
					<h5> Lot</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Lot Size: </span> {data.lot_size}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Dimesnsions: </span>{data.lot_dim}</p>
					<br></br>
					<h5> Other Information</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Additional Structures Included: </span><b className='bdiv3'>{data.additional}</b></p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Parcel number: </span> {data.parcel_no}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Zoning Descripton: </span>{data.zoning}</p>
				</div>
			</div>

			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsProperty;