const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//imports routes
const authRoute = require("./routes/auth_route");
// const flashcardsRoutes = require("./routes/flashcard_routes");
// const userRoutes = require("./routes/user_routes")
// const studyRoutes = require("./routes/study_routes")

//handlers middleware
const errorHandler = require("./middlewares/errors_middleware");
const auth = require("./middlewares/auth");

//dotenv config
dotenv.config();

//initialize express app
const app = express();

//connect to mongodb
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.error("Couldn't connect to MongoDB", err));

//middleware initialization
app.use("/api/auth", authRoute);
app.use('api/flashcards', (req, res) => {
  res.send('page is under development')
})
// app.use("/api/users", usersRoute);
// app.use("/api/study", studyRoute);

//protected routes
app.get("/api/protecred/", auth, (req, res) => {
  res.json({
    massage: "This is procteced rotues",
    userId: req.userData.userId,
    userEmail: req.userData.email,
  });
});

// app.use(errorHandler.notFound);

const HOST = process.env.HOST;
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
