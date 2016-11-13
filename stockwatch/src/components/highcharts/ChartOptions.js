import Highcharts from 'highcharts/highstock.js';
import { InvestedAndValueOptions } from './options/InvestedAndValue.js';
import { PercentReturnOnInvestment } from './options/PercentReturnOnInvestment.js';
import { ReturnOnInvestmentOptions } from './options/ReturnOnInvestment.js';
import { TickerOptions } from './options/Ticker.js';
import { EquityOptions } from './options/Equity.js';

export default class ChartOptions {

    /*
        This class has responsibility for setting correct options
        on the different charts the application supports.
    */

    static getOptions(that) {
        let options, key = that.props.chartKey;

        switch (key) {
            case "ticker":
                options = ChartOptions.tickerOptions(that);
                break;
            case "equity":
                options = ChartOptions.equityOptions(that);
                break;
            case "return-on-investment":
                options = ChartOptions.returnOnInvestmentOptions(that);
                break;
            case "invested-and-value":
                options = ChartOptions.investedAndValue(that);
                break;
            case "return-percent":
                options = ChartOptions.percentReturnOnInvestment(that);
                break;
            default:
                return null
        }

        // Set graph height based on options
        options.chart.height = ChartOptions.getGraphHeight(options);
        return options;
    }

    static getGraphHeight(options) {
        let windowWidth = window.innerWidth;
        let graphHeight = (windowWidth > 570) ? 400 : windowWidth * 0.7;
        if (options.navigator)
            graphHeight += 40;
        if (options.rangeSelector)
            graphHeight += 35;
        if (options.scrollbar)
            graphHeight += 10;
        return graphHeight;
    }

    static investedAndValue(that) {
        let invested = that.props.data.invested;
        let value = that.props.data.value;
        let options = InvestedAndValueOptions;
        options.series[0].data = value;
        options.series[1].data = invested;
        return options;
    }

    static percentReturnOnInvestment(that){
        let invested = that.props.data.invested;
        let value = that.props.data.value;
        let percentReturn = ChartOptions.calculatePercentReturn(invested, value);
        let options = PercentReturnOnInvestment;
        options.series[0].data = percentReturn;
        return options;
    }

    static returnOnInvestmentOptions(that) {
        let data = that.props.data;
        let options = ReturnOnInvestmentOptions;
        options.series[0].data = data;
        return options;
    }

    static tickerOptions(that, graphHeight) {
        let ticker = that.props.data.ticker;
        let yesterday = that.props.data.yesterday;
        let options = TickerOptions;
        options.series[0].data = ticker;
        options.series[1].data = ticker.map(function(array) {
            return [array[0], yesterday];
        });
        options.xAxis.min = ticker[0][0];
        options.xAxis.max = ticker[ticker.length - 1][0] + 60000; // Add one minute to get the last point as well
        return options;
    }

    static equityOptions(that) {
        let equity = that.props.data;
        let options = EquityOptions;
        options.series[0].data = equity;
        options.xAxis.min = equity[0][0];
        options.xAxis.max = equity[equity.length - 1][0] + 60000; // Add one minute to get the last point as well

        return options;
    }

    static calculatePercentReturn(invested, value){
        let percentReturn = [];
        for (let i = 0; i < invested.length; i++){
            let inv = invested[i][1];
            let val = value[i][1];
            let percRet = (val - inv) / inv * 100;
            percentReturn.push([invested[i][0], percRet]);
        }
        return percentReturn;
    }
}

///////////////////////
// Global options for all charts.
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
        line: {
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
    exporting: {
        enabled: false
    }
});


///////////////////////
// Custom Theme
Highcharts.theme = {
    colors: ['#1778c1', '#f7a35c', '#8085e9', '#8d4654', '#aaeeee', '#ff0066', '#eeaaee',
        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
    ],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Rubik, serif'
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
        },
        buttons: [{
            type: 'week',
            count: 1,
            text: '1w'
        }, {
            type: 'month',
            count: 1,
            text: '1m'
        }, {
            type: 'month',
            count: 3,
            text: '3m'
        }, {
            type: 'month',
            count: 6,
            text: '6m'
        }, {
            type: 'ytd',
            text: 'YTD'
        }, {
            type: 'year',
            count: 1,
            text: '1y'
        }, {
            type: 'all',
            text: 'All'
        }]
    },

    // General
    background2: '#E0E0E8'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);