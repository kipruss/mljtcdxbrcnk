/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.EditItemView = Backbone.View.extend({
        template: _.template($('#edit-item').html()),

        events: {
            'click .js-save': 'save',
            'click .js-cancel': 'cancel'
        },

        initialize: function () {
            this.listenTo(this.model, 'destroy', this.cancel);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        save: function () {
            var $input = this.$el.find('.js-edit');
            var value = $input.val().trim();
            if (value) {
                this.model.save({ title: value }, { success: this.cancel });
            }
        },

        cancel: function () {
            app.router.navigate('list', {trigger: true});
        }
    });
})(jQuery);
