/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.NewItemView = Backbone.View.extend({
        template: _.template($('#new-item').html()),

        events: {
            'click .js-save': 'save',
            'click .js-cancel': 'cancel'
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        save: function () {
            var $input = this.$el.find('.js-new');
            var value = $input.val().trim();
            if (value) {
                app.items.create({
                    title: value,
                    order: app.items.nextOrder()
                });
                $input.val('').focus();
            }
        },

        cancel: function () {
            app.router.navigate('list', {trigger: true});
        }
    });
})(jQuery);
