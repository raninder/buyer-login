import React, { useState } from 'react';
import { Grid, Container, Radio, RadioGroup, Typography, Box, Button, Checkbox, FormControlLabel, TextField, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import { useNavigate } from 'react-router-dom';

function Form1({ currentPage, setCurrentPage, nextPage }) {
    const navigate = useNavigate();

   
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [residentStatus, setResidentStatus] = useState('Canadian Resident or Citizen');
    const [emailConsent, setEmailConsent] = useState(true);
    const [formErrors, setFormErrors] = useState({});

    const goToPage = (page) => {
        navigate(page);
    };

   
    const validateRequiredFields = () => {
        const errors = {};

        if (!firstName.trim()) {
            errors.firstName = 'First Name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }

        if (!phoneNumber.trim()) {
            errors.phoneNumber = 'Phone Number is required';
        } else if (!/^\d+$/.test(phoneNumber)) {
            errors.phoneNumber = 'Phone Number must contain only numbers';
        }        

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = 'Invalid email format';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; 
    };

    const handleSubmit = () => {
        const isValid = validateRequiredFields();

        if (isValid) {
            goToPage('/form2');
        }
    };

    return (
        <Container>
            <div style={{ margin: '10px auto', padding: '20px' }}>
                <StyledLinearProgress variant="determinate" value={1} />
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                    <IconButton onClick={() => goToPage('/form1')}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>Primary Applicant</Typography>
                    <IconButton onClick={handleSubmit}>
                        <ArrowForward />
                    </IconButton>
                </Box>
                <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>Please enter your details</Typography>
                <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Buyer</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="h7" style={{ marginBottom: '20px' }}>First Name</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            error={formErrors.firstName !== undefined}
                            helperText={formErrors.firstName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h7" style={{ marginBottom: '20px' }}>Last Name</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            error={formErrors.lastName !== undefined}
                            helperText={formErrors.lastName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h7" style={{ marginBottom: '20px' }}>Phone Number</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={formErrors.phoneNumber !== undefined}
                            helperText={formErrors.phoneNumber}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h7" style={{ marginBottom: '20px' }}>Email</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={formErrors.email !== undefined}
                            helperText={formErrors.email}
                        />
                    </Grid>
                </Grid>
                <Typography variant="h7" style={{ marginTop: '10px', marginBottom: '20px' }}>My Resident Status</Typography>
                <RadioGroup row value={residentStatus} onChange={(e) => setResidentStatus(e.target.value)}>
                    <FormControlLabel value="Canadian Resident or Citizen" control={<Radio style={{ color: "#7731E4" }} />} label="Canadian Resident or Citizen" />
                    <FormControlLabel value="Non-resident or citizen" control={<Radio style={{ color: "#7731E4" }} />} label="Non-resident or citizen" />
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
                            style={{ color: "#7731E4" }}
                        />
                    }
                    label="By entering my email, I agree to receive promotional emails from Buyer Folio. I can unsubscribe any time."
                />
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                        variant="contained"
                        style={{
                            width: "305px",
                            height: "56px",
                            borderRadius: "39px",
                            backgroundColor: "#7731E4"
                        }}
                        onClick={handleSubmit}
                    >
                        Next
                    </Button>
                </Box>
            </div>
        </Container>
    );
}

export default Form1;
