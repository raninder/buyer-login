import React, { useState } from 'react';
import { Container, InputAdornment, Typography, Box, Button, TextField, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import '../css/form2.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure Axios is installed

function Form7() {
  const [currentRent, setCurrentRent] = useState('');
  const [desiredPayment, setDesiredPayment] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, setStateFunction) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setStateFunction(value);
    }
  };

  const textFieldStyle = {
    marginBottom: 3,
    width: '563px',
    height: '48px',
    borderRadius: '6px',
  };

  const handleNextClick = async () => {
    if (currentRent.trim() !== '' && desiredPayment.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:8080/api/pre/rent', {
          monthlyRent: currentRent,
          desiredRentOwnPayments: desiredPayment
        });
        setServerMessage(response.data.message);
        navigate('/form8');
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        setServerMessage(error.response ? error.response.data.message : 'An error occurred');
      }
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={7} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => navigate('/form6')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Rent
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!currentRent.trim() || !desiredPayment.trim()}>
            <ArrowForward />
          </IconButton>
        </Box>
        {serverMessage && (
          <Typography color="error" style={{ marginBottom: '10px' }}>
            {serverMessage}
          </Typography>
        )}
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Enter your desired monthly mortgage payment details
        </Typography>

        {/* Current Monthly Rent Input */}
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Current monthly rent</Typography>
            <TextField
              variant="outlined"
              value={currentRent}
              onChange={(event) => handleInputChange(event, setCurrentRent)}
              sx={textFieldStyle}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              id="currentRent"
            />
          </Box>

          {/* Desired Co-ownership Monthly Payments Input */}
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Desired co-ownership monthly payments</Typography>
            <TextField
              variant="outlined"
              value={desiredPayment}
              onChange={(event) => handleInputChange(event, setDesiredPayment)}
              sx={textFieldStyle}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              id="desiredPayment"
            />
          </Box>
        </Box>

        {/* Next Button */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            style={{ width: '305px', height: '56px', borderRadius: '39px', backgroundColor: '#7731E4' }}
            onClick={handleNextClick}
            disabled={!currentRent.trim() || !desiredPayment.trim()}
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form7;
