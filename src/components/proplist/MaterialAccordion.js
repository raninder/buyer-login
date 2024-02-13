import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function MaterialAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Construction</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Utilities & Green  Energy</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Community & Neighborhood</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Days on Market</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Property Information</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Price & Status</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;