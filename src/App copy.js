import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Select from './Select';
import DailyGoalsList from './DailyGoalsList';
import CreativeNotes from './CreativeNotes';
import Planner from './Planner';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/creative-notes" element={<CreativeNotes />} />
        <Route path="/daily-goals" element={<DailyGoalsList />} />
               <Route path="/planner" element={<Planner />} />
        
      </Routes>
    </Router>
  );
}

export default App;
