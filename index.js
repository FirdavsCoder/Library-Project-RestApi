const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/usersRoutes")
const bookRoutes = require("./routes/bookRoutes")
const userBookRoutes = require("./routes/userBookRoutes")
const statisticsRoutes = require("./routes/statisticsRoutes")
const ResponseData = require("./lib/responseData")
const app = express()

app.use(cors({ cors: "*" }))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/users", userRoutes)
app.use("/books", bookRoutes)
app.use("/user-book", userBookRoutes)
app.use("/statistics", statisticsRoutes)


app.use(((req, res, next) => (
    res.status(404).json(new ResponseData("Page Not Found", null, null))
)))


const port = 3000

app.listen(port, () => {
    console.log(`Server running on port: https://localhos:${port}`);
})
