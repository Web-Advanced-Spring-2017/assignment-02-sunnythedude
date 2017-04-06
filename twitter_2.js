console.log('test');

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
  var name = event.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName  + ' Bot generated Reply');
}






//tweetIt();
//setInterval(tweetIt, 1000*20)

function tweetIt(txt) {

//var r = Math.floor(Math.random()*100);

  var tweet = {
    status: txt
    //status: 'Here is a random number ' + r + ' ,that I generated using math.random'
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


 