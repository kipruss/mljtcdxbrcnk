/*global $ */
var app = app || {};

$(function () {
    'use strict';

    app.mainView = new app.MainView();
    app.router = new app.Router();
    Backbone.history.start();
});
