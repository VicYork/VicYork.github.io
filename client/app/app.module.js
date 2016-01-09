'use strict';

angular.module('vicyork', ['ui.router'])
  .config(function($urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider
      .otherwise('/');
  });
