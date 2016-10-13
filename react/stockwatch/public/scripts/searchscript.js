$(document).ready(function(){
  var funds = [

    {
      "name": "Skagen Kon-Tiki",
      "costPrice": 1000,
      "dateInvested": "01.12.2008",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 6131.88,
      "percentReturn": 175.20,
      "annualPercentReturn": 13.74,
      "totalValue": 9631.88
    },
    {
      "name": "DNB Finans",
      "costPrice": 2000,
      "dateInvested": "02.13.2015",
      "stockHolding": 2.6405,
      "stockValue": 722.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 0.10,
      "return": -93.26,
      "percentReturn": -4.66,
      "annualPercentReturn": -2.92,
      "totalValue": 1906.74
    },
    {
      "name": "DNB Nordic Technology",
      "costPrice": 5000,
      "dateInvested": "01.07.2014",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 613.88,
      "percentReturn": 17.20,
      "annualPercentReturn": 14.74,
      "totalValue": 9631.88
    },
    {
      "name": "SEB Concept Biotechnology",
      "costPrice": 10000,
      "dateInvested": "02.13.2015",
      "stockHolding": 31.6405,
      "stockValue": 72.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 1.32,
      "return": 2032.26,
      "percentReturn": 4.66,
      "annualPercentReturn": 2.92,
      "totalValue": 12032.74
    },
    {
      "name": "Skagen Kon-Tiki",
      "costPrice": 1000,
      "dateInvested": "01.12.2008",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 6131.88,
      "percentReturn": 175.20,
      "annualPercentReturn": 13.74,
      "totalValue": 9631.88
    },
    {
      "name": "DNB Finans",
      "costPrice": 2000,
      "dateInvested": "02.13.2015",
      "stockHolding": 2.6405,
      "stockValue": 722.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 0.10,
      "return": -93.26,
      "percentReturn": -4.66,
      "annualPercentReturn": -2.92,
      "totalValue": 1906.74
    },
    {
      "name": "DNB Nordic Technology",
      "costPrice": 5000,
      "dateInvested": "01.07.2014",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 613.88,
      "percentReturn": 17.20,
      "annualPercentReturn": 14.74,
      "totalValue": 9631.88
    },
    {
      "name": "SEB Concept Biotechnology",
      "costPrice": 10000,
      "dateInvested": "02.13.2015",
      "stockHolding": 31.6405,
      "stockValue": 72.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 1.32,
      "return": 2032.26,
      "percentReturn": 4.66,
      "annualPercentReturn": 2.92,
      "totalValue": 12032.74
    },
    {
      "name": "Skagen Kon-Tiki",
      "costPrice": 1000,
      "dateInvested": "01.12.2008",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 6131.88,
      "percentReturn": 175.20,
      "annualPercentReturn": 13.74,
      "totalValue": 9631.88
    },
    {
      "name": "DNB Finans",
      "costPrice": 2000,
      "dateInvested": "02.13.2015",
      "stockHolding": 2.6405,
      "stockValue": 722.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 0.10,
      "return": -93.26,
      "percentReturn": -4.66,
      "annualPercentReturn": -2.92,
      "totalValue": 1906.74
    },
    {
      "name": "DNB Nordic Technology",
      "costPrice": 5000,
      "dateInvested": "01.07.2014",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 613.88,
      "percentReturn": 17.20,
      "annualPercentReturn": 14.74,
      "totalValue": 9631.88
    },
    {
      "name": "SEB Concept Biotechnology",
      "costPrice": 10000,
      "dateInvested": "02.13.2015",
      "stockHolding": 31.6405,
      "stockValue": 72.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 1.32,
      "return": 2032.26,
      "percentReturn": 4.66,
      "annualPercentReturn": 2.92,
      "totalValue": 12032.74
    },
    {
      "name": "Skagen Kon-Tiki",
      "costPrice": 1000,
      "dateInvested": "01.12.2008",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 6131.88,
      "percentReturn": 175.20,
      "annualPercentReturn": 13.74,
      "totalValue": 9631.88
    },
    {
      "name": "DNB Finans",
      "costPrice": 2000,
      "dateInvested": "02.13.2015",
      "stockHolding": 2.6405,
      "stockValue": 722.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 0.10,
      "return": -93.26,
      "percentReturn": -4.66,
      "annualPercentReturn": -2.92,
      "totalValue": 1906.74
    },
    {
      "name": "DNB Nordic Technology",
      "costPrice": 5000,
      "dateInvested": "01.07.2014",
      "stockHolding": 13.6361,
      "stockValue": 706.35,
      "dateUpdated": "11.10.2016",
      "percentChanged": -0.24,
      "return": 613.88,
      "percentReturn": 17.20,
      "annualPercentReturn": 14.74,
      "totalValue": 9631.88
    },
    {
      "name": "SEB Concept Biotechnology",
      "costPrice": 10000,
      "dateInvested": "02.13.2015",
      "stockHolding": 31.6405,
      "stockValue": 72.11,
      "dateUpdated": "11.10.2016",
      "percentChanged": 1.32,
      "return": 2032.26,
      "percentReturn": 4.66,
      "annualPercentReturn": 2.92,
      "totalValue": 12032.74
    }
  ]


var substringMatcher = function(funds) {
return function findMatches(q, cb) {
  var matches, substringRegex;
  
  // an array that will be populated with substring matches
  matches = [];

  // regex used to determine if a string contains the substring `q`
  substrRegex = new RegExp(q, 'i');

  // iterate through the pool of strings and for any string that
  // contains the substring `q`, add it to the `matches` array
  $.each(funds, function(i, fund) {
  
    if (substrRegex.test(fund.name)) {
      matches.push(fund.name);
      console.log(fund.name);

    }
  });

  cb(matches);
};
};

$('#funds').typeahead({
hint: true,
highlight: true,
minLength: 1
},
{
name: 'funds',
source: substringMatcher(funds)
});


});