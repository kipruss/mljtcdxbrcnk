/*global Backbone, jQuery */
var app = app || {};

(function ($) {
    'use strict';

    app.MainView = Backbone.View.extend({
        el: '.app',

        events: {
            'click .menu__item': 'menuClick'
        },

        initialize: function () {
            this.$table = this.$el.find('.table');
            this.chartsInited = false;
            this.scatterChart = false;
            this.columnChart = false;
            this.scatterChartOptions = {
                title: 'Table1',
                hAxis: {title: 'X', minValue: 0, maxValue: 10, gridlines: { count: 11 }},
                vAxis: {title: 'Y', minValue: 0, maxValue: 10, gridlines: { count: 11 }},
                legend: 'none'
            };
            this.columnChartOptions = {
                title: 'Table2',
                bar: {groupWidth: '95%'},
                hAxis: {title: 'X'},
                vAxis: {title: 'Y', minValue: 0, maxValue: 10, gridlines: { count: 11 }},
                legend: 'none'
            };
            this.type = 'scatter';
            this.render();
        },

        render: function () {
            var data = this.getData();
            this.$table.html('');
            _.each(data, this.addRow, this);
            this.drawChart(data);
        },

        menuClick: function (e) {
            var $item = $(e.target);
            $item.parent().find('.menu__item').removeClass('menu__item--active');
            $item.addClass('menu__item--active');
            this.type = $item.data('type');
            this.render();
        },

        addRow: function (row, index) {
            var rowView;
            if (index) {
                rowView = new app.TableRow({ row: row });
            } else {
                rowView = new app.TableHeader({ row: row });
            }
            this.$table.append(rowView.render().el);
        },

        getData: function () {
            var data;
            if (this.type === 'scatter') {
                data = [['X', 'Y'],
                        [_.random(1, 10), _.random(1, 10)],
                        [_.random(1, 10), _.random(1, 10)],
                        [_.random(1, 10), _.random(1, 10)],
                        [_.random(1, 10), _.random(1, 10)],
                        [_.random(1, 10), _.random(1, 10)]];
            } else if (this.type === 'column') {
                data = [['X', 'Y'],
                        [2,  _.random(1, 10)],
                        [4,  _.random(1, 10)],
                        [6,  _.random(1, 10)],
                        [8,  _.random(1, 10)],
                        [10, _.random(1, 10)]];
            }
            return data;
        },

        getOptions: function () {
            if (this.type === 'scatter') {
                return this.scatterChartOptions;
            } else if (this.type === 'column') {
                return this.columnChartOptions;
            }
        },

        initCharts: function (data, type) {
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback( _.bind(drawChart, this) );
            function drawChart() {
                this.scatterChart = new google.visualization.ScatterChart(document.getElementById('scatter-chart'));
                this.columnChart = new google.visualization.ColumnChart(document.getElementById('column-chart'));
                this.chartsInited = true;
                this.drawChart(data);
            }
        },

        drawChart: function (data) {
            this.$el.find('.chart').addClass('hidden');
            if (this.chartsInited) {
                this.$el.find('.chart--' + this.type).removeClass('hidden');
                if (this.type === 'scatter') {
                    this.scatterChart.draw(google.visualization.arrayToDataTable(data), this.getOptions());
                } else if (this.type === 'column') {
                    this.columnChart.draw(google.visualization.arrayToDataTable(data), this.getOptions());
                }
            } else {
                this.initCharts(data);
            }
        }

    });
})(jQuery);
