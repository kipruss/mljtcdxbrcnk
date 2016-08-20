/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.MainView = Backbone.View.extend({
        el: '.app',

        initialize: function () {
            this.$list = this.$el.find('.list');
            this.$form = this.$el.find('.form');
            this.addItemView = false;
            this.newItemView = false;
            this.editItemView = false;
            this.listenTo(app.items, 'add', this.addOne);
            this.listenTo(app.items, 'reset', this.addItems);
            app.items.fetch({ reset: true });
        },

        addOne: function (item) {
            var item = new app.ItemView({ model: item });
            this.$list.append(item.render().el);
        },

        addItems: function () {
            this.$list.html('');
            app.items.each(this.addOne, this);
        },

        renderAddItem: function () {
            if (this.addItemView) {
                this.addItemView.remove();
            }
            this.addItemView = new app.AddItemView();
            this.$form.html(this.addItemView.render().el);
        },

        renderNewItem: function () {
            if (this.newItemView) {
                this.newItemView.remove();
            }
            this.newItemView = new app.NewItemView();
            this.$form.html(this.newItemView.render().el);
        },

        renderEditItem: function (itemOrder) {
            if (this.editItemView) {
                this.editItemView.remove();
            }
            var item = app.items.findWhere({'order': parseInt(itemOrder)});
            this.editItemView = new app.EditItemView({ model: item });
            this.$form.html(this.editItemView.render().el);
        }
    });
})(jQuery);
