const router = require('express').Router();
const Workout = require('../models/workout');
//Get Route
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});
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
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;