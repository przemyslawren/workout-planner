import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExercisesList from './exercisesList/ExercisesList';
import ExerciseDetail from './exerciseDetail/exerciseDetail';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/exercises" element={<ExercisesList />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
