import Highcharts from 'highcharts/highstock.js';
export let EquityOptions = {
	chart: {
	    panning: true
  	},
    tooltip: {
        shared: true,
        useHTML: true,
        footerFormat: '</tbody></table>',
        borderWidth: 0,
        valueDecimals: 2,
        formatter: function() {
            var dateFormat = '%A %e. %b %Y';
            var format = '<span style="font-size: 10px">%d</span><br>' +
                '<span style="color:' + Highcharts.getOptions().colors[0] + '">●</span> %s <b>%n</b><br>';

            var formattedDate = Highcharts.dateFormat(dateFormat, this.x);
            format = format.replace('%d', formattedDate);
            format = format.replace('%n', this.points[0].y.toFixed(2));
            format = format.replace('%s', "Kurs: ");

            return format;
        }
    },
    series: [{
        type: 'area',
        threshold: null,
        tooltip: {
            valueDecimals: 2
        },
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
    }],
    xAxis: {
        type: 'datetime',
        tickPosition: 'inside',
        showFirstLabel: true,
        labels: {
            y: 16,
            staggerLines: 1,
        },
        dateTimeLabelFormats: {
            millisecond: '%H:%M',
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%e. %b',
            week: '%e. %b',
            month: '%b \'%y',
            year: '%Y'
        },
        crosshair: {
            color: '#cccccc',
            dashStyle: 'Solid'
        }
    },
    yAxis: {
        offset: 0,
        tickPosition: 'inside',
        title: {
            text: null,
        }
    },
    rangeSelector: {
        enabled: true,
        selected: 0
    },
    navigator: {
        enabled: true
    },
    title: {
        margin: 50,
        text: null
    }
}