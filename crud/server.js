// here you are declaring the variables
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
var db


//(.urlencoded) method in bodyParser tell the body-parser plugin to extract data from the <form> and add them to the body property in the (req, ---) object
app.use(bodyParser.urlencoded({extended: true}))

//you can cyonnect MongoDB through the Mongo.Client method
MongoClient.connect('mongodb://ds133657.mlab.com:33657/kylemay1822server', {user: 'kylemay1822', password: 'nnnkk1822'}, {
  uri_decode_auth: true
}, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
// here you are connecting the server to the browser this is by using app.listen
// then passing in a function after the port number


//app.get(path, callback)
//in express crud applications read = .get
//"path" is an argument and is the path to the Get request its anything that comes from your domain name
// "path" EX: *('/',---)*
// the second argument is a "callback function" it tells the server what to do when the path is matched
//a callback function also has two argument "request" and "response"

//res.send is a response method aka *(---, res)*
// "=>" this replaces "fucnction()" in ES6 *this(=>) only works if there is a (req, res)*
//to send back a page instead of text use "res.sendFile" method
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // "__dirname" is the directory that contains the JavaScript source code
})
app.post('/quotes', (req, res) => {
  //the quoutes collection is made by using the db.collection method and saved with the .save method
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
  //console.log(req.body);
  //you should be able to see everything in the form field within the (req.body) object
})
