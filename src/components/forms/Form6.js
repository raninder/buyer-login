import React, { useState } from 'react';
<<<<<<< HEAD
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
import '../../css/form2.css';


function Form6() {
  const [selectedValue, setSelectedValue] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const navigate = useNavigate();

=======
import { useDispatch, useSelector } from 'react-redux';
import { updateIncomeSource } from '../../featureForm/userSlice'; // Import updateIncomeSource action
import { Container, Typography, Box, IconButton, Button, Grid, MenuItem, Select } from '@mui/material';
import { ArrowBack, ArrowForward, ArrowDropDown } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import { setErrorMessage } from '../../featureForm/errorSlice';  // Import setErrorMessage action
import { setDoc } from 'firebase/firestore'; // Changed import for setDoc

function Form6() {
  // Declare state variables
  const [selectedValue, setSelectedValue] = useState('');
  
  // Retrieve dispatch function and user info from Redux store
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  
  // Initialize navigate function for routing
  const navigate = useNavigate();

  // Handle select change event
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

<<<<<<< HEAD
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
=======
  // Handle next button click event
  const handleNextClick = async () => {
    // Check if selectedValue is not empty
    if (selectedValue.trim() !== '') {
      try {
        const userId = localStorage.getItem("user");
        // Update income source in Firestore
        await setDoc(doc(db, "users", userId), {
          incomeSource: selectedValue
        }, { merge: true });
  
        // Dispatch action to update income source in Redux store
        dispatch(updateIncomeSource(selectedValue));
        
        // Navigate to next form
        navigate('/form7');
      } catch (error) {
        console.error('Error:', error.message);
        // Handle error message display logic elsewhere
      }
    } else {
      // Dispatch action to display validation error message
      dispatch(setErrorMessage('Please select a source of income before proceeding.'));
    }
  };
  
  // Determine if next button should be enabled
  const canProceed = selectedValue.trim() !== '';

  // Render UI
  return (
    <Container>
      <div className="form-container">
        {/* Display linear progress bar */}
        <StyledLinearProgress variant="determinate" value={6} />
        
        {/* Display navigation buttons and title */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <IconButton onClick={() => navigate('/form5')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            Financial Situation: Source
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!canProceed}>
            <ArrowForward />
          </IconButton>
        </Box>
        
        {/* Display form title */}
        <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
          What is your primary source of income?
        </Typography>

        {/* Display select input for income source */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            Please select your primary source of income:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} md={6}>
              <Select
                value={selectedValue}
                onChange={(e) => handleSelect(e.target.value)}
                fullWidth
                variant="outlined"
                endIcon={<ArrowDropDown />}
              >
                {/* Display select options */}
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Traditional Employment">Traditional Employment</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Pension & Disability Incomes">Pension & Disability Incomes</MenuItem>
                <MenuItem value="Alimony and Child Support">Alimony and Child Support</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
          </Grid>

          {/* Display next button */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              onClick={handleNextClick}
              disabled={!canProceed}
              style={{ backgroundColor: '#7731E4', color: 'white', borderRadius: '8px', minWidth: '200px', padding: '10px 20px' }}
            >
              Next
            </Button>
          </Box>
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
        </Box>
      </div>
    </Container>
  );
}

export default Form6;
