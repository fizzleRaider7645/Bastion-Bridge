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
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true, // Helps to prevent cross-site scripting (XSS) attacks
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
