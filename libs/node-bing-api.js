
// Import node-bing-api npm module from relative path
// var request = require('/home/eric/Documents/git/request')
var Bing = require('node-bing-api')({ accKey: "9772844298b146fca06f2ad9701f2d70" });

Bing.images("Ninja Turtles", {
  top: 1,   // Number of results (max 50) 
  skip: 14    // Skip first 3 result 
}, function(error, res, body){


    console.log(error, res)

    console.log(body);

    if (body) {

        var json = body;
        //    var json = JSON.parse(body);
        var valuesCollection = json.body;
        console.log(valuesCollection);

        var imgUrl;

        //        for (var i = 0, len = valuesCollection.length; i < len; i++) {
        //        console.log(i);
        //
        //            var imgUrl = valuesCollection['contentUrl'];
        //
        //            if (imgUrl) {
        //                console.log(imgUrl);
        //            }
        //        }

    }



//    console.log(body.value);

  });
