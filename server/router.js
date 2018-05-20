//Routes the incoming requests to their corresponding controllers
const axios = require('axios');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

//imports passport to assist with authentication.
const passport = require('passport');
const keys = require('../config/keys');

//The "session: false" property stops passport from making a cookie based session for the login request, which is default functionality for passport. Since we are using tokens, we don't want that.
//The first arg is the strategey we are using, in this case the JSON Web Token strategy
const requireAuth = passport.authenticate('jwt', { session: false });
//in this case the local strategy, which is used when users login with a username (email in our case) and password
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  //http route handlers can be passed multiple functions which will act as middlewares before the last function is executed
  //In this case whenever a user hits the root route, the request will first be routed through the jwt authentication via requireAuth, and then if it passes, it will be sent on to the final function argument.
  //If the user is not authenticated
  //This is being used to emulate some protected data that the user can only access if authenticated.

  //Uncomment this route if you would like to protect a certain route via the server instead of via the front-end HOC
  // app.get('/feature',requireAuth, function(req, res) {
  //     res.send({ message: 'Super secret code is ABC123' });
  //   }
  // );
  //requires the request to go through middleware, where the user will have to be authenticated via requireSignin before it is passed to the route handler Authentication.signin
  //any post request to /signup and /signin will be handled by the corresponding function in the authentication controller file
  //If the users is not authenticated, passport will respond to the request with a 401 "unauthorized" status response
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  //gets the playlist id for the playlists on the channel
  //Performance Society channel ID
  //const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCe31VpdqJEFpvjWF1B_s2mg&key=${keys.YT_API_KEY}`;

  //Test Channel ID
  //const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCk-kzeEguebrp89NQBmDDsg&key=${keys.YT_API_KEY}`;

  //Uses the playlist id to get the video ids from that playlist
  //Performance Society playlist ID
  //const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=UUe31VpdqJEFpvjWF1B_s2mg&key=${keys.YT_API_KEY}`;

  //Test Playlist ID
  //const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUZ3pRJ2v8B_VP0ng3I6asvQ&key=${keys.YT_API_KEY}`

  app.get('/youtube', (req, res) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUZ3pRJ2v8B_VP0ng3I6asvQ&key=${keys.YT_API_KEY}`)
      .then(response => {
        res.send(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
