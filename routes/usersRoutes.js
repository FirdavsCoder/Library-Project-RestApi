const express = require("express")
const router = express.Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController")

router.get("/", getAllUsers)
router.post("/", createUser)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)




module.exports = router;