/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.TableRow = Backbone.View.extend({
        tagName:  'tr',

        template: _.template($('#table-row').html()),

        initialize: function (options) {
            this.row = options.row;
        },

        render: function () {
            this.$el.html(this.template({ x: this.row[0], y: this.row[1] }));
            return this;
        }
    });
})(jQuery);
