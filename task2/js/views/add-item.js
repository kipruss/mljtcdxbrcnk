/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.AddItemView = Backbone.View.extend({
        tagName:  'p',

        template: _.template($('#add-item').html()),

        events: {
            'click .js-add': 'add'
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        add: function (e) {
            app.router.navigate('list/add', {trigger: true})
        }
    });
})(jQuery);
