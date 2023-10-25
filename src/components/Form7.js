import React, { useState } from 'react';
import {Container,InputAdornment,Typography,Box,Button,TextField,IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import '../css/form2.css';
// import Form7Page from '../pages/Form7Page';

function Form7({ currentPage, setCurrentPage, nextPage }) {
  const [incomeCurrent, setIncome] = useState('');
  const [monthlyPayment, setDebt] = useState('');
  
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

  const buttonStyle = {
    width: '80px',
    height: '36px',
    // backgroundColor: perMonthSelected ? '#7731E4' : '',
    // color: perMonthSelected ? 'white' : '#7731E4',
    fontFamily: 'Raleway-Bold',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 'normal',
    border: 'none',
    outline: 'none',
    textTransform: 'none',
  };


  const isFormValid = () => {
    return incomeCurrent.trim() !== '' && monthlyPayment.trim() !== '' ;
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={2} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Debt
          </Typography>
          <IconButton onClick={nextPage} disabled={!isFormValid()}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Enter your desired monthly mortgage payment details
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Current monthly rent</Typography>
            <p style={{ color: 'grey' }}>Enter 0 if you are not renting at the moment</p>
            <TextField
              variant="outlined"
              value={incomeCurrent}
              onChange={(event) => handleInputChange(event, setIncome)}
              sx={textFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ color: 'black', fontWeight: 'bold' }}>$4500</span>
                  </InputAdornment>
                ),
                
              }}
              id="incomeCurrent"
            />
          </Box>

          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Desired co-ownership monthly payments</Typography>
            <TextField
              variant="outlined"
              value={monthlyPayment}
              onChange={(event) => handleInputChange(event, setDebt)}
              sx={textFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{color:'black',fontWeight:'bold'}}>
                     <span style={{ color: 'black', fontWeight: 'bold' }}>$50000</span>
                  </InputAdornment>
                ),
              }}
              id="monthlyPayment"
            />
          </Box>

          
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
        <Button 
            variant="contained"
                style={{ 
                    width: "305px", 
                    height:"56px", 
                    borderRadius: "39px",
                    backgroundColor: "#7731E4",
                    marginTop: "100px"
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

export default Form7;