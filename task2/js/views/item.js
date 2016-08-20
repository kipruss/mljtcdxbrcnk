/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.ItemView = Backbone.View.extend({
        tagName:  'tr',

        className: "item",

        template: _.template($('#item').html()),

        events: {
            'click .js-edit': 'edit',
            'click .js-remove': 'delete'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        delete: function () {
            if (this.model) {
                this.model.destroy();
            }
        }
    });
})(jQuery);
