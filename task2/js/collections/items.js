/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    var Items = Backbone.Collection.extend({
        model: app.Item,

        localStorage: new Backbone.LocalStorage('items-list'),

        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },

        comparator: 'order'
    });

    app.items = new Items();
})();
