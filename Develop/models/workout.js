const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            required: "Exercise type is required"
        },
        name: {
            type: String,
            required: "Exercise name is required"
        },
        duration: {
            type: String,
            required: "Duration of workout is required"
        },
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
        _id: false,
    }
    ],
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;