// combinded middleware and route
const router = require('express').Router();
const Workout = require('../models/workout');

//get route
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {totalDuration: {$sum: "$exercises.duration"}}
    }])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// updating one by id
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
   Workout.findOneAndUpdate(
        { _id: req.params.id }, 
        { 
            $push: { 
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            }
        },    
        { new: true })

      .then(dbWorkout => {
          res.json(dbWorkout);

      }).catch(err => {
        res.json(err);
      });
});

// creating the workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// finds last 7 entries
router.get('/api/workouts/range', (req, res) => {
     Workout.aggregate([
        {$addFields: {totalDuration: {$sum: "$exercises.duration"}}}

    ]).sort({day: -1})
    .limit(7)
    

    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;