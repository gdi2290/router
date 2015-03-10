'use strict';

angular.module('example.flickr', []).
  constant('flickrURL', 'http://api.flickr.com/services/feeds/photos_public.gne?tags=angularjs&tagmode=any&format=json').
  controller('FlickrController', ['$http', 'flickrURL', FlickrController]);


function FlickrController($http, flickrURL) {
  this.flickrURL = flickrURL;
  this.heading = 'Flickr';
  this.images = [];
  this.http = $http;

  this.activate();
}

FlickrController.prototype.activate = function() {
  var self = this;

  // hack
  window.jsonFlickrFeed = function(result) {
    self.images = result.items;
  };

  this.http.jsonp(this.flickrURL);
};

FlickrController.prototype.canDeactivate = function() {
  return confirm('Are you sure you want to leave?');
};
