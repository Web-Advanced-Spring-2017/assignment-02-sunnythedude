console.log('test');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'xdPdEnVbfLwKeTQmjeCdP0C4w',
  consumer_secret:      'Xpl45vxLf77Tl6qM6Mkua0Kc3bJQcyQUDsLEhGHDwsDELrsm5D',
  access_token:         '2458303980-7ry7GRRTF2XUe7NfrgHpd5ryRXqX95T4YABM0if',
  access_token_secret:  '1ZdlakI5sOSfturq5TAi5RrB373kUcfQzcRo6TK66jdeF',
});

var params = {
	q: 'Newschool',
	count: 5
}

T.get('search/tweets', params, gotData);

 function gotData(err, data, response) {
 	var tweets = data.statuses;
 	for (var i = 0; i < tweets.length; i++) {
 		console.log(tweets[i].text);
 	}
};
 