import arrow from '../../assets/icons/arrow.png';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../../css/proplist_styles/details.css'

const DetailsConstruction = ({data}) => {
	return ( 
		<div className="details">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography><p>Construction</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Type & Style</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Home Type: </span> {data.home_type}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Property subtype: </span>  {data.property_subtype}</p>
					<br />
					<h5> Condition</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Year Built: </span>{data.year}</p>
				</div>
				<div className="rooms2">
					<h5> Material Information</h5>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Construction Material: </span> {data.material}</p>
					<p><img src={arrow} className="point" alt="arrow" /><span className="align">Foundation: </span>{data.foundation}</p>
				</div>
			</div>

			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsConstruction;