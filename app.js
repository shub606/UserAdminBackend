import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import useradmin from "./src/features/User/userAdmin.routes.js";
import cors from "cors";

// import indexRouter from "./routes/index.js";
// import usersRouter from "./routes/users.js";

const app = express();
// import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Now you can use __dirname as you would in CommonJS
// app.set("views", path.join(__dirname, "views"));

// View engine setup
// app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/", indexRouter);
// app.use("/userAdmin", usersRouter);
app.use("/userAdmin", useradmin);

// Catch 404 and forward to the error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.send({ error: "Something went wrong" });
});

export default app;
