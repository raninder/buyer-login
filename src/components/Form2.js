import React, { useState } from 'react';
import {
  Container,
  InputAdornment,
  Typography,
  Box,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import '../css/form2.css';
import { useNavigate } from 'react-router-dom';

function Form2() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleLocationClick = (value) => {
    setLocation(value);
  };

  const goToPage = (page) => {
    navigate(page);
  };

  const canProceed = location.trim() !== ''; 

  const handleNextClick = () => {
    if (canProceed) {
        goToPage('/form3');
    } else {
      alert('Please select a location before proceeding.');
    }
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={2} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form1')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Future Home
          </Typography>
          <IconButton onClick={handleNextClick}
            disabled={!canProceed}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Where are you looking to buy?
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Location</Typography>
          </Box>
          <TextField
            variant="outlined"
            value={location}
            sx={{ marginBottom: 3, width: '563px', height: '48px', borderRadius: '6px' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />

          <Typography variant="body2" gutterBottom>
            By entering the location, our agent-buyer matching algorithm will help you find the perfect home.
          </Typography>

          <Box display="flex" className="location-box" flexDirection="row" gap={2} sx={{ marginBottom: 3 }}>
            <Button variant="outlined" onClick={() => handleLocationClick('Waterloo')}>
              <span>Waterloo</span>
            </Button>
            <Button variant="outlined" onClick={() => handleLocationClick('Toronto')}>
              <span>Toronto</span>
            </Button>
            <Button variant="outlined" onClick={() => handleLocationClick('Vancouver')}>
              <span>Vancouver</span>
            </Button>
            <Button variant="outlined" onClick={() => handleLocationClick('Montreal')}>
              <span>Montreal</span>
            </Button>
          </Box>
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

export default Form2;
