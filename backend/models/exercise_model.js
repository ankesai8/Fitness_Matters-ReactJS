const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise_schema = new Schema({

    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('exercise_model', exercise_schema);