const router = require("express").Router();
const path = require("path");
// route for workout form
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
// route for the stat tables
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})
module.exports = router;