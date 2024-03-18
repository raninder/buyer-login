import React, { useState } from 'react';
import {Container,InputAdornment,Typography,Box,Button,TextField,IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import '../../css/form2.css';
// import './form6.css'
import { useNavigate } from 'react-router-dom';
import { whileStatement } from '@babel/types';

function Form8({  nextPage }) {
  const [bankDetails, setIncome] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

    const goToPage = (page) => {
    navigate(page);
    };

  
  const handleInputChange = (event, setStateFunction) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setStateFunction(value);
    }
  };

  const textFieldStyle = {
    marginBottom: 3,
    // width: '563px',
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

  const pinkContainerStyle = {
    backgroundColor:'#FFEEF1',
    marginTop:'15px',
    padding: '20px', 
    width: '28rem',
    // width:'80%',
    borderRadius: '5px',
    textAlign:'center'
  };
  const isFormValid = () => {
    return bankDetails.trim() !== '' ;
  };

  return (
    <Container>
      <div className='form6-container'>
       <StyledLinearProgress variant="determinate" value={8} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form7')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '.1rem', marginRight: '.1rem', textAlign:'center' }}>
            Authentication : Connect your bank
          </Typography>
          <IconButton onClick={nextPage} disabled={!isFormValid()}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Please enter your bank details
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box className="rent-box" >
            <Typography variant="subtitle1">Select your bank</Typography>
            <TextField
              variant="outlined"
              value={bankDetails}
              onChange={(event) => handleInputChange(event, setIncome)}
               sx={textFieldStyle}
            //   InputProps={{
            //     startAdornment: null,
                
            //   }}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <p style={{ fontWeight: 'bold', color: 'black' }}>IDBL Bank</p>
                  </InputAdornment>
                ),
              }}
              id="bankDetails"
              fullWidth
            />
            </Box>
            
            <div className='banks'>
                <img src="/images/CIBC Bank Logo.jpg" alt="CIBC" className="bank-logo" />
                <img src="/images/TD Bank Logo.jpg" alt="TD" className="bank-logo" />
                <img src="/images/Scotia Bank Logo.jpg" alt="Scotia" className="bank-logo" />
                <img src="images/RBC Bank Logo.jpg" alt="RBC" className="bank-logo" />
                <img src="/images/BMO Bank Logo.jpg" alt="IDBL" className="bank-logo" />
            </div>
        </Box>
        {/* <Container style={pinkContainerStyle} > */}
        <div className="pink-container">
            <Typography variant="h6" style={{ color: 'black', fontWeight: "bold", fontSize:"18px" }}>Contact your bank account in 3 steps</Typography>
                <p style={{ color: 'grey', fontSize:'12px', marginTop:'10px', marginBottom:'12px' }}>Our AI algorithms analyze and validate your financial data</p>
                 <div className='banks-faq'>
                    <Typography variant="body1">Is this connection secure?</Typography>
                    <span>▼</span>
                </div>
                <div className='banks-faq'>
                    <Typography variant="body1">Why do I need to connect?</Typography>
                    <span>▼</span>
                </div>
                <div className='banks-faq'>
                    <Typography variant="body1">What if my bank is missing?</Typography>
                    <span>▼</span>
                </div>
        {/* </Container> */}
        </div>
       
        <Box display="flex" justifyContent="center" mt={2}>
          <div className='form-buttons'>
        <Button 
            variant="contained"
            className="next-btn"
            style={{
              fontSize:'1.1rem',
              borderRadius: '8px',
              color:'white',
              backgroundColor: '#7731E4',
              marginTop:'1rem'
            }}
                onClick={nextPage}
                >
                Next
        </Button>
        
        <button className="skip-btn">Skip</button>
        </div>
         </Box>    
      </div>
    </Container>
  );
}

export default Form8;

