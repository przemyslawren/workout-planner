package dev.ren.workoutplanner;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "exercises")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Exercise {
    @Id
    private ObjectId _id;
    private String id;
    private String name;
    private String force;
    private String level;
    private String mechanic;
    private String equipment;
    private String category;
    private List<String> primaryMuscles;
    private List<String> secondaryMuscles;
    private List<String> instructions;
    private List<String> images;
}
