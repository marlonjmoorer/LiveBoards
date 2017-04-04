const express= require("express"),
    app= express(),
    port=8080,
    path = require('path')
    http= require('http')
    api = require('./server/api')
    db= require('./server/repo')
    bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, 'dist')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));