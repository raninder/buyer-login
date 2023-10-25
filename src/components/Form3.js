import React, { useState } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from './StyledLinearProgress';
import '../css/form2.css';

function Form3({ currentPage, setCurrentPage, nextPage }) {
  const [location, setLocation] = useState('');
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  const handleLocationClick = (value) => {
    setLocation(value);
    setIsLocationSelected(true);
  };

  const buttonStyle = {
    alignItems: 'center',
    border: '2.38px solid',
    borderColor: '#e6e6e6',
    borderRadius: '47px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    padding: '16px 205px',
    position: 'relative',
    width: '563px',
    marginBottom: '10px', 
    fontFamily: 'Raleway-Bold',
    textTransform: 'none',
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
            Future Home
          </Typography>
          <IconButton onClick={nextPage}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Where are you looking to buy?
        </Typography>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Button style={{ ...buttonStyle, justifyContent: 'center',whiteSpace: 'nowrap', }} 
            onClick={() => handleLocationClick('As soon as possible')}
              variant={location === 'As soon as possible' ? 'contained' : 'outlined'}
          >
            <span>As soon as possible</span>
          </Button>
        
          <Button style={buttonStyle} onClick={() => handleLocationClick('1-2 months')}
              variant={location === '1-2 months' ? 'contained' : 'outlined'}
          >
            <span>1-2 months</span>
          </Button>

          <Button style={buttonStyle} onClick={() => handleLocationClick('3-4 months')}
          variant={location === '3-4 months' ? 'contained' : 'outlined'}
          >
            <span>3-4 months</span>
          </Button>

          <Button style={buttonStyle} onClick={() => handleLocationClick('4+ months')}
          variant={location === '4+ months' ? 'contained' : 'outlined'}
          >
            <span>4+ months</span>
          </Button>

          <Button style={buttonStyle} onClick={() => handleLocationClick('Not sure')}
          variant={location === 'Not sure' ? 'contained' : 'outlined'}
          >
            <span>Not sure</span>
          </Button>
        </div>

        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            style={{
              width: '305px',
              height: '56px',
              borderRadius: '39px',
              backgroundColor: '#7731E4',
            }}
            onClick={nextPage}
            disabled={!isLocationSelected}
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form3;
