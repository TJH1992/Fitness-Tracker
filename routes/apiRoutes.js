const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: {excerises: req.body} },
    {
      runValidators: true
    }
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
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
    db.Workout.aggregate([
        {
          $addFields: {
              totalDuration: {
                  $sum: "$exercises.duration"
              }
          }
        }
      ]).sort({_id: -1}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;