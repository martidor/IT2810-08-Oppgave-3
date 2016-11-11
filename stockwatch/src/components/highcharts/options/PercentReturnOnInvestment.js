import Highcharts from 'highcharts/highstock.js';
export let PercentReturnOnInvestment = {
    chart: {
        panning: true
    },
    rangeSelector: {
        enabled: true,
        selected: 1
    },
    navigator: {
        enabled: true
    },
    scrollbar: {
        enabled: true
    },
    title: {
        text: "Prosent avkastning",
        margin: 50
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        crosshair: {
            color: '#cccccc',
            dashStyle: 'Solid'
        }
    },
    yAxis: {
        opposite: true,
        offset: 50,
        labels: {
            align: 'right',
            x: -3,
            y: 4
        },
        title: {
            text: 'Prosent',
        }
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
                '<span style="color:%c">●</span> %s <b>%n %</b><br>';

            format = format.replace('%c', Highcharts.getOptions().colors[0]);
            format = format.replace('%d', Highcharts.dateFormat(dateFormat, this.x));
            format = format.replace('%n', Highcharts.numberFormat(this.points[0].y, 2));
            format = format.replace('%s', 'Prosent avkastning:');

            return format;
        }
    },
    series: [{
        type: 'line',
        lineWidth: 1,
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
        }
    }]
}