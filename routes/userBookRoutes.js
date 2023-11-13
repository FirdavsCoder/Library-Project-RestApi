const express = require("express")
const router = express.Router()
const {
    getUserBookById, getAllUserBooks, createUserBook, deleteUserBook
} = require("../controllers/userBookController")


router.get("/", getAllUserBooks)
router.get("/:id", getUserBookById)
router.post("/", createUserBook)
router.delete("/:id", deleteUserBook)


module.exports = router;