
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
            source: substringMatcher(funds.funds)
          });
        