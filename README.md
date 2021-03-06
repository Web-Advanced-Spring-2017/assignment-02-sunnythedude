# Assignment 02


## Assignment Description
* I used the Twitter, Instagram & Google Maps API'S. 
* I used the Google Maps API to display some New School locations I frequent on a map along with a pop up label that appears when you click on the marker.
* I used the twitter API to do two things. Firstly to send out a tweet (one of a possible six within an array) every 20 seconds on my Twitter Feed and secondly to send out a bot generated reply everytime someone follows me on twitter.
* I used the Instagram API to grab the images from my instagram and post them onto an HTML page.
<br/>

**Twitter API**

I used the Twitter API to perform 2 tasks:

1. To send out one of six possible tweets every 20 seconds. 
<br/>

We run the node server
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/command%20line.png)         
<br/>

The Array with the selection of tweets, Math.random is used to randomize the order
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/tweets_array.png)
<br/><br/>

The Result
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/tweets.png)
<br/><br/>

2. To send out a pre-generated message anytime my account was followed. 
<br/>

First we run the node server
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/twitter_follow_cmd.png)
<br/><br/>

Which runs the follow function
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/tweet_2_code.png)
<br/><br/>

Resulting in the bot reply upon recieving a new follower
<br/>
<img src="https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/phone_wall.png" width="200" hspace="30"/> <img src="https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/phone_follow.png" width="200" hspace="30"/>  <img src="https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/bot_response.png" width="200" hspace="30"/>
<br/><br/><br/>

**Google Maps API**

* I used the google maps API to generate a map with multiple markers.
* All locations are Newschool owned places that I frequent.
* I used geographical coordinates to accurately pinpoint the locations using http://www.latlong.net/.
<br/>

The Locations are defined in the locations array along with the coordinates 
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/locations.png)
<br/><br/>

The Result:
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/google_maps.png)
<br/>

The Infowindow is a label that appears when the marker is clicked. There's actually no discernible word limit but I chose to just add the Laocation name associated with the marker
<br/>
![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/infowindow.png)
<br/>

**Instagram API**

I used the Instagram API to grab the images uploaded to my instagram account and then using jQuery append them to an unordered list in list form.
<br/>

![Alt text](https://github.com/Web-Advanced-Spring-2017/assignment-02-sunnythedude/blob/master/img/instagram.png)
<br/>


## Resources
Daniel Shiffman - Node.js and Twitter API tutorial [https://www.youtube.com/watch?v=RF5_MPSNAtU&list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV]
