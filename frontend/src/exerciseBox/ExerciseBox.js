import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExerciseBox.css';

function ExerciseBox({ exercise }) {
  const navigate = useNavigate();
  const prefix =
    'https://github.com/yuhonas/free-exercise-db/blob/main/exercises/';

    const handleOnClick = () => {
      navigate(`/exercises/${exercise.id}`); // Use the exercise ID to navigate
    };

  return (
    <div className="exercise-container" onClick={handleOnClick}>
      <div className="exercise-name">
        <h3>{exercise.name}</h3>
      </div>
      <div className="exercise-image" >
        {exercise.images && exercise.images[0] && (
          <img
            src={prefix + exercise.images[0] + '?raw=true'}
            alt={exercise.name}
          />
        )}
      </div>
    </div>
  );
}

export default ExerciseBox;
