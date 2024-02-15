import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import arrow from '../../assets/icons/arrow.png';
import lock from '../../assets/icons/lock.png';
import '../../css/proplist_styles/details.css'

function MaterialAccordion({data1,data2}) {
  return (
    <div className="details">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p>Utilities & Green  Energy</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="rooms3">
                <h5> Utility</h5>
                <p><img src={arrow} className="point" alt="arrow" /><span className="align">Sewer information:  </span>{data1.sewer_info}</p>
                <p><img src={arrow} className="point" alt="arrow" /><span className="align">Water information: </span>{data1.water_info}</p>
              </div>
         
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p>Community & Neighborhood</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="rooms">
              <div className="rooms1">
                <h5> Community</h5>
                <p><img src={arrow} className="point" alt="arrow" /><span className="align">Features:</span><b className="bdiv2">{data2.features}</b></p>
              </div>
             <div className="rooms2">
                <h5> Location</h5>
                <p><img src={arrow} className="point" alt="arrow" /><span className="align">Region: </span>{data2.region}</p>
              </div>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Days on Market  <img src={lock} className="point" alt="lock" /></h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="days">To view the details, download the mobile application.</p>
            <p><a href="">Download now</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Property Information  <img src={lock} className="point" alt="lock" /></h4></Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails> */}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Price & Status  <img src={lock} className="point" alt="lock" /></h4></Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;