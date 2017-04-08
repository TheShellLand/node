var request = require('request');
//var querystring = require('querystring');



// The query to send through the Bing Search API
var query = 'poke bowl'
// The query string must be URL encoded to handle special characters
var encoded_url = encodeURI(query)
// Set random value to get random image
var random_image = 12;

var reqUri = 'https://api.cognitive.microsoft.com' + '/bing/v5.0/images/search?q=' + encoded_url + '&safeSearch=Strict&count=1&offset=' + random_image;



request({
      uri: reqUri,
      method: "GET",
      headers: {
//        "User-Agent": opts.userAgent,
        "Ocp-Apim-Subscription-Key": '9772844298b146fca06f2ad9701f2d70'
      },
      timeout: '5000'

    }, function (err, res, body) {

      if (res && res.statusCode !== 200) {
          err = new Error(body);
      } else {

        // Parse body, if body
        body = typeof body === 'string' ? JSON.parse(body) : body;
      }



        // PARSE JSON
        var value = body.value[0].contentUrl;
        var url_params = value.split('&');

        for (p in url_params) {
//            console.log(p.split('='));
            console.log(url_params[p]);

            p<string, string>
        }







//      callback(err, res, body);
//        console.log(image_url);
    });
