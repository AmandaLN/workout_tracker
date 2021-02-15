const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                require: "Enter a exercise type",
            },       
            name: {
                type: String,
                trim: true,
                require: "Enter a exercise name",
            },
            duration: {
                type: Number,
                require: "Enter a duration time"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        },
    ]
})
const Workout = Mongoose.model('Workout', workoutSchema);
module.exports = Workout;