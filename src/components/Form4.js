import React, { useState } from 'react';
import {Container,InputAdornment,Typography,Box,Button,TextField,IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import '../css/form2.css';
import { useNavigate } from 'react-router-dom';

function Form4({ currentPage, setCurrentPage, nextPage }) {
  const [income, setIncome] = useState('');
  const [debt, setDebt] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [perMonthSelected, setPerMonthSelected] = useState(true);

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
    backgroundColor: perMonthSelected ? '#7731E4' : '',
    color: perMonthSelected ? 'white' : '#7731E4',
    fontFamily: 'Raleway-Bold',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 'normal',
    border: 'none',
    outline: 'none',
    textTransform: 'none',
  };

  const navigate = useNavigate();

    const goToPage = (page) => {
    navigate(page);
  };

  const isFormValid = () => {
    return income.trim() !== '' && debt.trim() !== '' && payableAmount.trim() !== '';
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={2} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form3')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Income
          </Typography>
          <IconButton onClick={() => goToPage('/form5')} disabled={!isFormValid()}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Please enter your financial details
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Gross Income (before taxes)</Typography>
            <TextField
              variant="outlined"
              value={income}
              onChange={(event) => handleInputChange(event, setIncome)}
              sx={textFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
                endAdornment: (
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="outlined"
                      style={{
                        ...buttonStyle,
                        marginRight: '12px',
                      }}
                      onClick={() => setPerMonthSelected(true)}
                    >
                      Per Month
                    </Button>
                    <Button
                      variant="outlined"
                      style={{
                        ...buttonStyle,
                        backgroundColor: !perMonthSelected ? '#7731E4' : '',
                        color: !perMonthSelected ? 'white' : '#7731E4',
                      }}
                      onClick={() => setPerMonthSelected(false)}
                    >
                      Per Year
                    </Button>
                  </Box>
                ),
              }}
              id="income"
            />
          </Box>

          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">What is your total amount of debt?</Typography>
            <TextField
              variant="outlined"
              value={debt}
              onChange={(event) => handleInputChange(event, setDebt)}
              sx={textFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
              }}
              id="debt"
            />
          </Box>

          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Monthly total payable amount?</Typography>
            <TextField
              variant="outlined"
              value={payableAmount}
              onChange={(event) => handleInputChange(event, setPayableAmount)}
              sx={textFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
             }}
              id="payableAmount"
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

export default Form4;
