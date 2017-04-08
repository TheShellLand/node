var http = require('https');
var querystring = require('querystring');



// The query to send through the Bing Search API
var query = 'poke bowl'
// The query string must be URL encoded to handle special characters
var encoded_url = encodeURI(query)


// HTTP headers
var options = {
  hostname: 'api.cognitive.microsoft.com',
  port: 443,
  path: '/bing/v5.0/images/search?q=' + encoded_url + '&safeSearch=Strict&count=1&offset=1',
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
//    'Content-Type': 'application/json',
//    'User-Agent': 'Bing Search Client for Node.js',
//    'json': 'true',
    'Accept': 'text/javascript, q=0.01',
    'Ocp-Apim-Subscription-Key': '9772844298b146fca06f2ad9701f2d70'
  }
};

var req = http.request(options, (res) => {
//  console.log(`STATUS: ${res.statusCode}`);
//  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');





//
// NEED TO FIX
//


//  This is the HTTP response body
  res.on('data', (chunk) => {
//    console.log(`BODY: ${chunk}`);

      var body = chunk;
// JSON parsing fails due to unescaped character -> "?"
      var value = JSON.parse(body);


      console.log(body.value);









  });
  res.on('end', () => {
//    console.log('No more data in response.');

// Show request headers
//      console.log(req._headers);
  });
});

req.on('error', (e) => {
//  console.log(`problem with request: ${e.message}`);
});

req.end();
