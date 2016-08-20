/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    app.Router = Backbone.Router.extend({
        routes: {
            '': 'showAddItemLink',          // /
            'list': 'showAddItemLink',      // #/list
            'list/add': 'addItem',          // #/list/add
            'list/edit/:id': 'editItem'     // #/list/edit/:id
        },

        showAddItemLink: function () {
            app.mainView.renderAddItem();
        },

        addItem: function () {
            app.mainView.renderNewItem();
        },

        editItem: function (id) {
            app.mainView.renderEditItem(id);
        }
    });

})();
