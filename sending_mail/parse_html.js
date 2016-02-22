var $ = require('cheerio');
var fs = require('fs');

/* Variable List
src_city
dest_city
bus_operator
journey_date
boarding_point
start_time
*/

/* Sample HTML text to be modified before sending as a mail
" <div> \
  	<p id='text1'> \
  		Hey there! You have booked a bus ticket from <span id='src_city'>BANGALORE</span> to <span id= 'dest_city'>MANGALORE</span> with \
      <span id= 'bus_operator'>DURGAMBA</span> for <span id= 'journey_date'>10-01-2006</span> on Paytm. Now how about ordering a meal too for the journey? \
  	</p> \
  	<p id='text2'> \
  		Just click on the desired meal below and get the food delivered to the boarding point - <span id='boarding_point'>Bangalore</span> at <span id='start_time'>06:00</span> by FAASOS</span> \
  	</p> \
  </div> \
"
*/

// get all placeHolders and there values
var placeHolders = {
  src_city:         "delhi",
  dest_city:        "jaipur",
  bus_operator:     "vaishno_mata",
  journey_date:     "12-06-2016",
  boarding_point:   "red fort",
  start_time:       "11:42am"
}


// read the 'html template file'
var htmlString = fs.readFileSync('mail_template.html').toString();
var parsedHTML = $.load(htmlString);

// console.log(parsedHTML);

// replace the placeHolders with actual values
Object.keys(placeHolders).forEach(function(key) {
  var value = placeHolders[key];
  parsedHTML('#' + key).text(value);
});
