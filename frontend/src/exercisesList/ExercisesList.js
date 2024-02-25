import React, { useEffect, useState } from 'react';
import ExerciseBox from '../exerciseBox/ExerciseBox';
import './ExercisesList.css';

function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/exercises')
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <div>
      <h2>Exercise browser</h2>
      <div className="flex-container">
        {exercises.map((exercise) => (
          <ExerciseBox key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default ExercisesList;
