var express = require('express');
var path = require('path');
var rootPath = path.join(__dirname, '../');

module.exports = function(app, passport){

  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser("phoneTag"));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(rootPath + 'public'));

};
