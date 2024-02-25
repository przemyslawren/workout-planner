package dev.ren.workoutplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/exercises")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;
    @GetMapping
    public ResponseEntity<List<Exercise>> getAllExercises() {
        return new ResponseEntity<>(exerciseService.allExercises(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Exercise>> getSingleExercise(@PathVariable String id) {
        return new ResponseEntity<>(exerciseService.singleExercise(id), HttpStatus.OK);
    }
    @GetMapping("/force/{force}")
    public ResponseEntity<Optional<List<Exercise>>> getExerciseType(@PathVariable String force) {
        return new ResponseEntity<>(exerciseService.allExercisesByType(force), HttpStatus.OK);
    }
}
