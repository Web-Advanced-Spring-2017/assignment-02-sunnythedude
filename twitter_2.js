console.log('The Followbot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'xdPdEnVbfLwKeTQmjeCdP0C4w',
  consumer_secret:      'Xpl45vxLf77Tl6qM6Mkua0Kc3bJQcyQUDsLEhGHDwsDELrsm5D',
  access_token:         '2458303980-7ry7GRRTF2XUe7NfrgHpd5ryRXqX95T4YABM0if',
  access_token_secret:  '1ZdlakI5sOSfturq5TAi5RrB373kUcfQzcRo6TK66jdeF',
});

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow Event!")
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName  + ' Suck It');
}

function tweetIt(txt) {

  var tweet = {
    status: txt
  }

  T.post('statuses/update',tweet, tweeted);


  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong");
    } else {
      console.log("It worked");
    }
  }
} 


 