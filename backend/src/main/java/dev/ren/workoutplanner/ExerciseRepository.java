package dev.ren.workoutplanner;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends MongoRepository<Exercise, ObjectId> {
    Optional<Exercise> findExerciseById(String id);
    Optional<List<Exercise>> findAllByForce(String force);
}
