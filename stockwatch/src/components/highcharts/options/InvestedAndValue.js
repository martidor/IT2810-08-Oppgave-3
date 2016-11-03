import Highcharts from 'highcharts/highstock.js';
export let InvestedAndValueOptions = {
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
        text: "Oversikt over totalverdi, investeringer og avkastning",
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
    plotOptions: {
        series: {
            states: {
                hover: {
                    lineWidth: 2
                }
            }
        }
    },
    yAxis: {
        opposite: true,
        offset: 50,
        floor: 0,
        labels: {
            align: 'right',
            x: -3,
            y: 4
        },
        title: {
            text: 'Kroner',
        }
    },
    tooltip: {
        shared: true,
        valueDecimals: 0,
        valueSuffix: ' kr',
        formatter: function() {

            var dateFormat = '%A %e. %b %Y';
            // Check if return is positive or negative.
            let color = (this.points[0].y - this.points[1].y) < 0 ? '#d9534f' : '#5cb85c';

            var format = '<span style="font-size: 10px">%d</span><br>' +
                '<span style="color:' + Highcharts.getOptions().colors[0] + '">●</span> %s <b>%n kr</b><br>' +
                '<span style="color:' + Highcharts.getOptions().colors[1] + '">●</span> %s <b>%n kr</b><br>' +
                '<span style="color:' + color + '">●</span> %s <b style="color:' + color +'">%n kr</b><br>';

            var formattedDate = Highcharts.dateFormat(dateFormat, this.x);
            format = format.replace('%d', formattedDate);
            format = format.replace('%n', (this.points[0].y).toFixed(0));
            format = format.replace('%s', 'Totalverdi:');
            format = format.replace('%n', (this.points[1].y).toFixed(0));
            format = format.replace('%s', 'Investert:');
            format = format.replace('%n', (this.points[0].y-this.points[1].y).toFixed(0));
            format = format.replace('%s', 'Avkastning:');

            return format;
        },
        dateTimeLabelFormats: {
            millisecond: "%b %e, %H:%M:%S.%L",
            second: "%b %e, %H:%M:%S",
            minute: "%b %e, %H:%M",
            hour: "%b %e, %Y",
            day: "%b %e, %Y",
            week: "Week from %b %e, %Y",
            month: "%B %Y",
            year: "%Y"
        }
    },
    series: [{
        lineWidth: 2
    }, {
        lineWidth: 2
    }]
}