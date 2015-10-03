'use strict';
angular.module('dCraftApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue', {
      'default': '700', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '300', // use shade 300 for the <code>md-hue-1</code> class
      'hue-2': '500', // use shade 500 for the <code>md-hue-2</code> class
      'hue-3': '600' // use shade 600 for the <code>md-hue-3</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('cyan', {
        'default': '500' // use shade 200 for default, and keep all other shades the same
      });
  });
