import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Form1Page from './pages/Form1Page';
//import FormPage2 from './pages/FormPage2';

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const totalPages = 11;
    const [currentPage, setCurrentPage] = useState(1);
    const progress = (currentPage / totalPages) * 100;

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    return (
      <Router>
      <Routes>
        <Route path="/form1" element={<Form1Page />} />
      </Routes>
    </Router>
    );
}

export default App;
