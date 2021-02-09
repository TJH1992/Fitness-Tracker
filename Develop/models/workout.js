const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
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
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    ],
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;