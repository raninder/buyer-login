import React from 'react';
import { Grid,Container, Radio, RadioGroup, Typography, Box, Button, Checkbox, FormControlLabel, TextField, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';

function Form1({ currentPage, setCurrentPage, nextPage }) {
    return (
        <Container>
                 <div style={{ margin: '10px auto', padding: '20px' }}>
                    <StyledLinearProgress variant="determinate" value={1} />
                        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                            <IconButton onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                                <ArrowBack />
                            </IconButton>
                            <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>Primary Applicant</Typography>
                            <IconButton onClick={nextPage}>
                                <ArrowForward />
                            </IconButton>
                        </Box>
                        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>Please enter your details</Typography>
                        <Typography variant="subtitle1" style={{ marginBottom: '10px'}}>Buyer</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ marginBottom: '20px'}}>First Name</Typography>
                                <TextField  variant="outlined" fullWidth defaultValue="Barbara Shanon" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ marginBottom: '20px'}}>Last Name</Typography>
                                <TextField  variant="outlined" fullWidth defaultValue="Barbara Shanon" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ marginBottom: '20px'}}>Phone Number</Typography>
                                <TextField  variant="outlined" fullWidth defaultValue="Barbara Shanon" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ marginBottom: '20px'}}>Email</Typography>
                                <TextField  variant="outlined" fullWidth defaultValue="Barbara Shanon" />
                            </Grid>
                        </Grid>
                        <Typography variant="h7" style={{ marginTop: '10px', marginBottom: '20px'}}>My Resident Status</Typography>
                        <RadioGroup row defaultValue="Canadian Resident or Citizen">
                            <FormControlLabel value="Canadian Resident or Citizen" control={<Radio style={{color: "#7731E4"}} />} label="Canadian Resident or Citizen" />
                            <FormControlLabel value="Non-resident or citizen" control={<Radio style={{color: "#7731E4"}}/>} label="Non-resident or citizen" />
                        </RadioGroup>
                        <Box display="flex" alignItems="center">
                            <Typography variant="subtitle1" style={{ marginRight: '10px' }}>Co-Buyer</Typography>
                            <Button variant="" style={{ color: "#7731E4", marginBottom: '20px', marginLeft: 'auto' }}>+ Add</Button>
                        </Box>
                        <Typography variant="body2" style={{ marginBottom: '10px' }}>
                            Having a co-buyer could increase your budget. A co-buyer is any person who will be living in your home with you and is over 18 years old.
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    style={{color: "#7731E4"}}
                                />
                            }
                            label="By entering my email, I agree to receive promotional emails from Buyer Folio. I can unsubscribe any time."
                        />
                       <Box display="flex" justifyContent="center" mt={2}>
                            <Button 
                                variant="contained"
                                style={{ 
                                    width: "305px", 
                                    height:"56px", 
                                    borderRadius: "39px",
                                    backgroundColor: "#7731E4"
                                }} 
                                onClick={nextPage}
                            >
                                Next
                            </Button>
                        </Box>                   
                </div>
        </Container>
    );
}

export default Form1;
