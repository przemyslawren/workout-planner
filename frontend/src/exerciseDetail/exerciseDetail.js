import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExerciseDetail.css';

function ExerciseDetail() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const prefix =
    'https://github.com/yuhonas/free-exercise-db/blob/main/exercises/';

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/exercises/${id}`)
      .then((response) => response.json())
      .then((data) => setExercise(data))
      .catch((error) => console.error('Error fetching exercise:', error));
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exercise-detail-container">
      <div className="exercise-detail-images">
        {exercise.images &&
          exercise.images.map((image, index) => (
            <img
              key={index}
              src={prefix + image + '?raw=true'}
              alt={exercise.name}
            />
          ))}
      </div>
      <div className="exercise-detail-info">
        <div className="exercise-detail-info-grid">
          <span>
            <strong>Name</strong>
          </span>
          <span>{exercise.name}</span>
          <span>
            <strong>Force</strong>
          </span>
          <span>{exercise.force}</span>
          <span>
            <strong>Level</strong>
          </span>
          <span>{exercise.level}</span>
          <span>
            <strong>Mechanic</strong>
          </span>
          <span>{exercise.mechanic}</span>
          <span>
            <strong>Category</strong>
          </span>
          <span>{exercise.category}</span>
          <span>
            <strong>Equipment</strong>
          </span>
          <span>{exercise.equipment}</span>
          <span>
            <strong>Primary muscles</strong>
          </span>
          <span>{exercise.primaryMuscles}</span>
          <span>
            <strong>Secondary muscles</strong>
          </span>
          <span>{exercise.secondaryMuscles}</span>
        </div>
        <hr className="exercise-detail-info-hr" />
        <div className="exercise-detail-info-instructions">
          {exercise.instructions &&
            exercise.instructions.map((instruction, index) => (
              <p>{index + 1 + '. ' + instruction + ' '}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
