/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.TableHeader = Backbone.View.extend({
        tagName:  'tr',

        template: _.template($('#table-header').html()),

        initialize: function (options) {
            this.row = options.row;
        },

        render: function () {
            this.$el.html(this.template({ x: this.row[0], y: this.row[1] }));
            return this;
        }
    });
})(jQuery);
