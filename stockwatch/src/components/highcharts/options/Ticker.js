import Highcharts from 'highcharts/highstock.js';

export let TickerOptions = {
  chart: {
    panning: false
  },
  tooltip: {
    shared: true,
    useHTML: true,
    footerFormat: '</tbody></table>',
    borderWidth: 0,
    valueDecimals: 2,
    formatter: function() {
      var dateFormat = '%A %e. %b kl. %H:%M';
      var format = '<span style="font-size: 10px">%d</span><br>' +
        '<span style="color:' + Highcharts.getOptions().colors[0] + '">●</span> %s <b>%n</b><br>' +
        '<span style="color:' + Highcharts.getOptions().colors[1] + '">●</span> %s <b>%n</b><br>';

      var formattedDate = Highcharts.dateFormat(dateFormat, this.x);
      format = format.replace('%d', formattedDate);
      format = format.replace('%n', this.points[0].y.toFixed(2));
      format = format.replace('%s', 'Hovedindeksen på Oslo Børs:');
      format = format.replace('%n', this.points[1].y.toFixed(2));
      format = format.replace('%s', 'Forrige sluttkurs:');

      return format;
    }
  },
  series: [{
    // Today
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
  }, {
    // Yesterday
    type: 'line',
    lineWidth: 1,
    tooltip: {
      valueDecimals: 2
    },
  }],
  xAxis: {
    type: 'datetime',
    showFirstLabel: true,
    startOnTick: false,
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
    labels: {
      enabled: false
    },
    opposite: true,
    title: {
      text: null,
    }
  },

  title: {
    margin: 50,
    text: null
  }
}
