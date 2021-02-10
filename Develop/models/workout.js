const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
          name: {
            required: "Workout name is required.",
            type: String,
          },
        },
        {
          type: {
            required: "Workout type is required.",
            type: String,
          },
        },
        {
          duration: {
            type: Number,
            required: "Workout duration is required.",
          },
        },
        {
          weight: {
            type: Number,
          },
        },
        {
          sets: {
            type: Number,
          },
        },
        {
          distance: {
            type: Number,
          },
        },
      ],
    });
    
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;