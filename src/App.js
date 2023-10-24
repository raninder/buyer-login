import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form1Page from './pages/Form1Page';
import Form2Page from './pages/Form2Page';
import Form3Page from './pages/Form3Page';
import Form4Page from './pages/Form4Page';

import Form5Page from './pages/Form5Page';
import Form6Page from './pages/Form6Page';


function App() {
    return (
      <Router>
      <Routes>
        <Route path="/form1" element={<Form1Page />} />
        <Route path="/form2" element={<Form2Page />} />
        <Route path="/form3" element={<Form3Page />} />
        <Route path="/form4" element={<Form4Page />} />
        <Route path="/form5" element={<Form5Page />} />
        <Route path="/form6" element={<Form6Page />} />
      </Routes>
    </Router>
    );
}

export default App;
