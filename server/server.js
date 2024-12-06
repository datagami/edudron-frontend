require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { SocketServer } = require("./socketServer");
const { ExpressPeerServer } = require("peer");
const path = require("path");
const http = require("http");
const session = require("express-session");
const socketIO = require("socket.io");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors())

app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 36, // 1 hour
    },
  })
);

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id + " connected ");
  SocketServer(socket);
});

// Create peer server
ExpressPeerServer(http, { path: "/" });

// Routes
app.use("/api", require("./routes/authRouter"));
app.use("/api", require("./routes/userRouter"));
app.use("/api", require("./routes/commentRouter"));
app.use("/api", require("./routes/notifyRouter"));
app.use("/api", require("./routes/messageRouter"));
app.use("/api", require("./routes/storyRouter"));
app.use("/api", require("./routes/verifiedUserRouter"));
app.use("/api", require("./routes/highlightRouter"));
app.use("/api", require("./routes/SocialRoute"));
app.use("/api", require("./routes/SocialInteractionRoute"));
app.use("/api", require("./routes/notificationRoute"));
app.use("/api", require("./routes/firebaseRoute"));
app.use("/api", require("./routes/educationRouter"));
app.use("/api", require("./routes/collegeBasicRouter"));
app.use("/api", require("./routes/co_listRouter"));
app.use("/api", require("./routes/organisationFilterRoute"));
app.use("/api", require("./routes/Adminpannel/addCategoryRouter"));
app.use("/api", require("./routes/Adminpannel/addStreamRouter"));
app.use("/api", require("./routes/Adminpannel/addCourseRouter"));
app.use("/api", require("./routes/Adminpannel/addExamsRouter"));
app.use("/api", require("./routes/addFacultyRouter"));
app.use("/api", require("./routes/Adminpannel/MiscRouter"));
app.use("/api", require("./routes/countryRouter"));
app.use("/api", require("./routes/stateRouter"));
app.use("/api", require("./routes/cityRouter"));
app.use("/api", require("./routes/term&condition"));
app.use("/api", require("./routes/generateUrlRouter"));
app.use("/api", require("./routes/admission_query_router"));

const URI = process.env.RONIT_MONGO_URL || `mongodb://localhost:27017/edudron`;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }
app.use("/images", express.static("uploads"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server is running on port", port);
});
