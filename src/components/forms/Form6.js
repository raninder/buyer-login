import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { styled } from "@mui/material/styles";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure Axios is installed
// import './form6.css'
import '../../css/form2.css';


function Form6() {
  const [selectedValue, setSelectedValue] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleNextClick = async () => {
    if (selectedValue.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:8080/api/pre/source', { incomeSource: selectedValue });
        setServerMessage(response.data.message);
        navigate('/form7');
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        setServerMessage(error.response ? error.response.data.message : 'An error occurred');
      }
    } else {
      alert('Please select a source of income before proceeding.');
    }
  };

  return (
    <Container >
      <div className='form6-container'>
        <StyledLinearProgress variant="determinate" value={6} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
           <IconButton onClick={() => navigate('/form5')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '.4rem', marginRight: '.4rem' }}>
              Financial Situation: Source
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!selectedValue.trim()}>
            <ArrowForward />
          </IconButton>
        </Box>
        {serverMessage && (
          <Typography color="error" style={{ marginBottom: '10px' }}>
            {serverMessage}
          </Typography>
        )}
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          What is your primary source of income?
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Button
            variant={selectedValue === 'Traditional Employment' ? 'contained' : 'outlined'}
            className='option'
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              borderRadius: '47px',
              border: '2.375px solid #E7E7E7',
              marginBottom: '0.7rem',
            }}
            onClick={() => handleSelect('Traditional Employment')}
          >
            Traditional Employment
          </Button>
          <Button
            variant={selectedValue === 'Self Employed' ? 'contained' : 'outlined'}
            className='option'
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              borderRadius: '47px',
              border: '2.375px solid #E7E7E7',
              marginBottom: '10px',
            }}
            onClick={() => handleSelect('Self Employed')}
          >
            Self Employed
          </Button>
          <Button
            variant={selectedValue === 'Pension & Disability Incomes' ? 'contained' : 'outlined'}
            className='option'
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              borderRadius: '47px',
              border: '2.375px solid #E7E7E7',
              marginBottom: '10px',
            }}
            onClick={() => handleSelect('Pension & Disability Incomes')}
          >
            Pension & Disability Incomes
          </Button>
          <Button
            variant={selectedValue === 'Alimony and Child Support' ? 'contained' : 'outlined'}
            className='option'
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              borderRadius: '47px',
              border: '2.375px solid #E7E7E7',
              marginBottom: '10px',
            }}
            onClick={() => handleSelect('Alimony and Child Support')}
          >
            Alimony and Child Support
          </Button>
          <Button
            variant={selectedValue === 'Other' ? 'contained' : 'outlined'}
            className='option'
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              borderRadius: '47px',
              border: '2.375px solid #E7E7E7',
              marginBottom: '10px',
            }}
            onClick={() => handleSelect('Other')}
          >
            Other
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            className="next-btn"
            style={{
              fontSize:'1.1rem',
              borderRadius: '8px',
              color:'white',
              backgroundColor: '#7731E4',
            }}
            onClick={handleNextClick}
            disabled={!selectedValue.trim()} 
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form6;
