const router = require("express").Router();

/**
 * @desc Response some data about the user logged in
*/
router.get("/", (req, res) => (
  req.session && req.session.apiAuth ?
  res.json(req.session.apiAuth) :
  res.sendStatus(401)
));

/**
 * @desc create a cookie session for this user
*/
router.post("/", (req, res) => {
  if( req.body.accessToken ) {
    req.session = {
      apiAuth: req.body
    };
    req.sessionOptions = {
      expires: req.body.expires
    };
    return res.json(req.body);
  } else {
    return res.sendStatus(401);
  }
});

/**
 * @desc remove the cookie session of this user
*/
router.get("/", (req, res) => (
  res.delete("ok")
));

module.exports = router;