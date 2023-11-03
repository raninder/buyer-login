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

function Form6() {
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
        goToPage('/form7'); 
    } else {
      alert('Please select a source of income before proceeding.');
    }
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={6} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form5')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Source
          </Typography>
          <IconButton onClick={handleNextClick}
            disabled={!canProceed}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          What is your primary source of income?
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Button
            variant={selectedValue === 'Traditional Employment' ? 'contained' : 'outlined'}
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
            onClick={() => handleSelect('Traditional Employment')}
          >
            Traditional Employment
          </Button>
          <Button
            variant={selectedValue === 'Self Employed' ? 'contained' : 'outlined'}
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
            onClick={() => handleSelect('Self Employed')}
          >
            Self Employed
          </Button>
          <Button
            variant={selectedValue === 'Pension & Disability Incomes' ? 'contained' : 'outlined'}
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
            onClick={() => handleSelect('Pension & Disability Incomes')}
          >
            Pension & Disability Incomes
          </Button>
          <Button
            variant={selectedValue === 'Alimony and Child Support' ? 'contained' : 'outlined'}
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
            onClick={() => handleSelect('Alimony and Child Support')}
          >
            Alimony and Child Support
          </Button>
          <Button
            variant={selectedValue === 'Other' ? 'contained' : 'outlined'}
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
            onClick={() => handleSelect('Other')}
          >
            Other
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

export default Form6;
