import express from "express";
import cors from "cors"; 
import userRouter from "./routes/user.route.js";
import gigRoute from './routes/gig.route.js'
import orderRoute from './routes/order.route.js'
import conversationRoute from './routes/conversation.route.js'
import messageRoute from './routes/message.route.js'
import reviewRoute from './routes/review.route.js'
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json())

// api for the users create , delete and update
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/gigs", gigRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/conversations", conversationRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/reviews", reviewRoute);









// api just for the testing
app.get("/", (req, res) => {
  res.send("hi Akash Mahto");
});

app.get("/name", (req, res) => {
  res.send("your name is Akash Mahto");
});

export { app };
