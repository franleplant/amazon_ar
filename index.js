const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs')
const scrapper = require('./scrapper');


//const search_string = 'ram';
//scrapper(search_string)
  //.then(responses => {
    //console.log('asdasd', responses)
    //fs.writeFileSync('./data.js', `window.__DATA = ${JSON.stringify(responses, null, 2)}`)
  //})






const app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', function (req, res) {
  const search_string = req.query.search
  scrapper(search_string)
    .then(responses => res.json(responses))
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
      err.status = 404;
        next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
