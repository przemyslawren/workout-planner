import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExerciseDetail.css';

function ExerciseDetail() {
  const { id } = useParams();
  console.log('Exercise ID:', id);
  const [exercise, setExercise] = useState(null);
  const prefix =
    'https://github.com/yuhonas/free-exercise-db/blob/main/exercises/';

  useEffect(() => {
    console.log('Fetching exercise for ID:', id);
    fetch(`http://localhost:8080/api/v1/exercises/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Exercise data:', data);
        setExercise(data)})
      .catch((error) => console.error('Error fetching exercise:', error));
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  console.log('Rendering exercise:', exercise);

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
          {exercise?.force && (
            <>
              <span>
                <strong>Force</strong>
              </span>
              <span>{exercise.force}</span>
            </>
          )}
          <span>
            <strong>Level</strong>
          </span>
          <span>{exercise.level}</span>

          <span>
            <strong>Category</strong>
          </span>
          <span>{exercise.category}</span>
          {exercise?.equipment && (
            <>
              <span>
                <strong>Equipment</strong>
              </span>
              <span>{exercise.equipment}</span>
            </>
          )}
          <span>
            <strong>Primary muscles</strong>
          </span>
          <span>
            {exercise.primaryMuscles &&
              exercise.primaryMuscles.map((primaryMuscles, index) => (
                <span key={index}>{primaryMuscles + ' '}</span>
              ))}
          </span>
          {exercise.secondaryMuscles != 0 && (
            <>
              <span>
                <strong>Secondary muscles</strong>
              </span>
              <span>
                {exercise.secondaryMuscles &&
                  exercise.secondaryMuscles.map((secondaryMuscles, index) => (
                    <span key={index}>{secondaryMuscles + ' '}</span>
                  ))}
              </span>
            </>
          )}
        </div>
        <hr className="exercise-detail-info-hr" />
        <div className="exercise-detail-info-instructions">
          {exercise.instructions &&
            exercise.instructions.map((instruction, index) => (
              <p key={index}>{index + 1 + '. ' + instruction + ' '}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
