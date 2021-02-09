const router = require("express").Router();
const Transaction = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workouts.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {excerises: req.body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggreate([
      {
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
      }
    ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggreate([
        {
          $addFields: {
              totalDuration: {
                  $sum: "$exercises.duration"
              }
          }
        }
      ]).sort({id: -1}).limit(10)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;