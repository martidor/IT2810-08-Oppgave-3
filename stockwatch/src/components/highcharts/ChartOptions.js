import Highcharts from 'highcharts/highstock.js';

export default class ChartOptions {

  static getOptions(that) {
    let key = that.props.chartKey;

    switch (key) {
      case "ticker":
        return ChartOptions.tickerOptions(that);
      case "equity":
        return ChartOptions.equityOptions(that);
      default:
        return null
    }
  }

  static tickerOptions(that) {
    let ticker = that.props.data.ticker;
    let yesterday = that.props.data.yesterday;
    let windowWidth = window.innerWidth;
    let graphHeight = (windowWidth > 570) ? 400 : windowWidth * 0.7;

    return {
      chart: {
        panning: false,
        height: graphHeight
      },
      plotOptions: {
        area: {
          lineWidth: 1,
          dataGrouping: {
            enabled: false,
            dateTimeLabelFormats: {
              millisecond: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
              second: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
              minute: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
              hour: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
              day: ['%A %b %e %Y', '%A %b %e', '-%A, %b %e, %Y'],
              week: ['Week from %A %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
              month: ['%B %Y', '%B', '-%B %Y'],
              year: ['%Y', '%Y', '-%Y']
            }
          }
        },
        series: {
          animation: {
            duration: 1500
          },
          marker: {
            enabled: false
          },
          turboThreshold: 0,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1
            }
          },
          shadow: false
        }
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
          format = format.replace('%n', yesterday.toFixed(2));
          format = format.replace('%s', 'Forrige sluttkurs:');

          return format;
        }
      },
      series: [{
        // Today
        data: ticker,
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
        data: ticker.map(function(array) {
          return [array[0], yesterday];
        }),
        type: 'line',
        lineWidth: 1,
        tooltip: {
          valueDecimals: 2
        },
      }],
      xAxis: {
        type: 'datetime',
        min: ticker[0][0],
        max: ticker[ticker.length - 1][0] + 60000, // Add one minute to get the last point as well
        tickPosition: 'inside',
        showFirstLabel: true,
        startOnTick: true,
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
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      title: {
        margin: 50,
        text: null
      },
      exporting: {
        enabled: false
      }
    }
  }

  static equityOptions(that) {
    let equity = that.props.data;
    let windowWidth = window.innerWidth;
    let graphHeight = (windowWidth > 570) ? 400 : windowWidth * 0.7;

    return {
      chart: {
        panning: false,
        height: graphHeight
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
        data: equity,
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
        min: equity[0][0],
        max: equity[equity.length - 1][0] + 60000, // Add one minute to get the last point as well
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
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      rangeSelector: {
        enabled: true
      },
      navigator: {
        enabled: true
      },
      title: {
        margin: 50,
        text: null
      },
      exporting: {
        enabled: false
      }
    }
  }
}

// Global options
Highcharts.setOptions({
  global: {
    useUTC: false
  },
  lang: {
    loading: 'Laster...',
    months: [
      'januar',
      'februar',
      'mars',
      'april',
      'mai',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'desember'
    ],
    shortMonths: [
      'jan',
      'feb',
      'mar',
      'apr',
      'mai',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'des'
    ],
    weekdays: [
      'S\u00F8ndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'L\u00F8rdag'
    ],
    decimalPoint: '.',
    rangeSelectorZoom: 'Historisk periode: ',
    resetZoom: 'Nullstill zoom',
    resetZoomTitle: 'Nullstill zoom til 1:1',
    thousandsSep: ' '
  },
  plotOptions: {
    area: {
      lineWidth: 1,
      dataGrouping: {
        enabled: false,
        dateTimeLabelFormats: {
          millisecond: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
          second: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
          minute: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
          hour: ['%A %b %e %H:%M', '%A %b %e %H:%M', ''],
          day: ['%A %b %e %Y', '%A %b %e', '-%A, %b %e, %Y'],
          week: ['Week from %A %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
          month: ['%B %Y', '%B', '-%B %Y'],
          year: ['%Y', '%Y', '-%Y']
        }
      }
    },
    series: {
      animation: {
        duration: 1500
      },
      marker: {
        enabled: false
      },
      turboThreshold: 0,
      states: {
        hover: {
          enabled: true,
          lineWidth: 1
        }
      },
      shadow: false
    }
  },
});

///////////////////////
// Custom Theme

Highcharts.createElement('link', {
  href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
  rel: 'stylesheet',
  type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);


Highcharts.theme = {
  colors: ['#1778c1', '#7798BF', '#8085e9', '#8d4654', '#aaeeee', '#ff0066', '#eeaaee',
    '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
  ],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: 'Signika, serif'
    }
  },
  title: {
    style: {
      color: 'black',
      fontSize: '16px',
      fontWeight: 'bold'
    }
  },
  subtitle: {
    style: {
      color: 'black'
    }
  },
  tooltip: {
    borderWidth: 0
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '13px'
    }
  },
  xAxis: {
    labels: {
      style: {
        color: '#6e6e70'
      }
    }
  },
  yAxis: {
    labels: {
      style: {
        color: '#6e6e70'
      }
    }
  },
  plotOptions: {
    series: {
      shadow: false
    },
    candlestick: {
      lineColor: '#404048'
    },
    map: {
      shadow: false
    }
  },

  // Highstock specific
  navigator: {
    xAxis: {
      gridLineColor: '#D0D0D8'
    }
  },
  rangeSelector: {
    buttonTheme: {
      fill: 'white',
      stroke: '#C0C0C8',
      'stroke-width': 1,
      states: {
        select: {
          fill: '#D0D0D8'
        }
      }
    }
  },
  scrollbar: {
    trackBorderColor: '#C0C0C8'
  },

  // General
  background2: '#E0E0E8'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);