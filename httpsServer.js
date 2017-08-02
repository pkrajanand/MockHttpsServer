var httpsPort = 9443;
var httpPort = 9090;
var responseCode = 302;
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Create a service (the app object is just a callback).
var app = function (req, res) {

    var body = ""

    if (req.url == '/send200') {
      responseCode = 200;
       body = "[{\
          \"statusLine\": [\
            {\
               \"statusCode\": \"200\"\
            }\
          ]\
        }]";  
    } else {
      responseCode = 200;
      body = "[{\
          \"statusLine\": [\
            {\
               \"statusCode\": \"200\"\
            }\
          ]\
        }]";  
    }
    console.log (req.url)

    res.statusCode = responseCode;
    res.setHeader('Content-Type', 'application/json');
    //res.setHeader('location', '/en/HotelSelector/');

    res.write(body);

    console.log("Sending " + responseCode + "response ....");

    res.end();
}

// Create an HTTP service.
//http.createServer(app).listen(httpPort);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(httpsPort);
console.log("Mock HTTPS Server Running on " + httpsPort + " that returns 302 ... "); 
