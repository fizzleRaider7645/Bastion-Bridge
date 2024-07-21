import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/github", (req, res, next) => {
  const clientDomain = req.headers.host;
  const state = "hi";
  req.session.state = state;
  console.log("clientDomain: ", clientDomain);

  passport.authenticate("github", { scope: ["user:email"], state })(
    req,
    res,
    next
  );
});

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    console.log(res);
    res.redirect("http://localhost:5173/dashboard"); // Redirect to home or dashboard after successful login
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

export default router;
