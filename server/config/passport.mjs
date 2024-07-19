import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

// Log environment variables for debugging
console.log(`GITHUB_CLIENT_ID: ${process.env.GITHUB_CLIENT_ID}`);
console.log(`GITHUB_CLIENT_SECRET: ${process.env.GITHUB_CLIENT_SECRET}`);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_CALLBACK_URL}/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      // Here, you would find or create a user in your database
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
