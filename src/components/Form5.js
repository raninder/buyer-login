import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import { useNavigate } from 'react-router-dom';

function Form5() {
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const goToPage = (page) => {
    navigate(page);
  };

  const canProceed = selectedValue.trim() !== ''; 

  const handleNextClick = () => {
    if (canProceed) {
        goToPage('/form6');
    } else {
      alert('Please select a down payment option before proceeding.');
    }
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={5} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form4')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Payment
          </Typography>
          <IconButton onClick={handleNextClick}
            disabled={!canProceed}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          How much do you have for down payment?
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Button
            variant={selectedValue === 'Nothing' ? 'contained' : 'outlined'}
            style={{
              width: '563px',
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
            onClick={() => handleSelect('Nothing')}
          >
            Nothing right now
          </Button>
          <Button
            variant={selectedValue === 'Less than 7k' ? 'contained' : 'outlined'}
            style={{
              width: '563px',
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
            onClick={() => handleSelect('Less than 7k')}
          >
            Less than $7k
          </Button>
          <Button
            variant={selectedValue === '7k - 15k' ? 'contained' : 'outlined'}
            style={{
              width: '563px',
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
            onClick={() => handleSelect('7k - 15k')}
          >
            $7k - $15k
          </Button>
          <Button
            variant={selectedValue === '15k - 25k' ? 'contained' : 'outlined'}
            style={{
              width: '563px',
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
            onClick={() => handleSelect('15k - 25k')}
          >
            $15k - $25k
          </Button>
          <Button
            variant={selectedValue === '25k+' ? 'contained' : 'outlined'}
            style={{
              width: '563px',
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
            onClick={() => handleSelect('25k+')}
          >
            $25k+
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            style={{
              width: '305px',
              height: '56px',
              borderRadius: '39px',
              backgroundColor: '#7731E4',
            }}
            onClick={handleNextClick}
            disabled={!canProceed} 
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form5;
