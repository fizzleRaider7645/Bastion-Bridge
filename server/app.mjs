import express from "express";
import session from "express-session";
import passport from "passport";
import "./config/passport.mjs"; // Passport configuration
import authRoutes from "./routes/auth.mjs";

const app = express();

// Express session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

// Home route
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/auth/github">Login with GitHub</a>');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
