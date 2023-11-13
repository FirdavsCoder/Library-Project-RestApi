const express = require("express")
const router = express.Router();
const {
    getStatisticDataById, getAllStatistics
} = require("../controllers/statisticsController")

router.get("/", getAllStatistics)
router.get("/:id", getStatisticDataById)

module.exports = router;