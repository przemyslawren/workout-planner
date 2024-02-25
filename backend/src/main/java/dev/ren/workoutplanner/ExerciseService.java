package dev.ren.workoutplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;
    public List<Exercise> allExercises() {
        return exerciseRepository.findAll();
    }

    public Optional<Exercise> singleExercise(String id) {
        return exerciseRepository.findExerciseById(id);
    }

    public Optional<List<Exercise>> allExercisesByType(String force) {
        return exerciseRepository.findAllByForce(force);
    }

}
