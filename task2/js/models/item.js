/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    app.Item = Backbone.Model.extend({
        defaults: {
            title: ''
        }

    });
})();
