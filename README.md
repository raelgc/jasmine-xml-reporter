# Jasmine XML Reporter

This module adds the `--junitreport` and `--output` command-line params to Jasmine 2 npm module ([`jasmine`](https://github.com/jasmine/jasmine-npm)).

Jasmine 2 npm module lost 2 features when compared with [`jasmine-node`](https://github.com/mhevery/jasmine-node) (no more maintained):

- ability to provide results in JUnit XML format (using the `--junitreport' param);
- an option to specify an output dir while running from the command line (`--output` param).

This module uses [`jasmine-reporters`](https://github.com/larrymyers/jasmine-reporters) module to generate the JUnit XML report (when `--junitreport` param is present) and, optionally, place the generated files at folder specified by `--output` param.

# Usage

To run tests with command line output only (default, same as use `jasmine` directly):

    ./node_modules/jasmine-xml-reporter/bin/jasmine.js

To run tests and generate a JUnit XML report:

    ./node_modules/jasmine-xml-reporter/bin/jasmine.js --junitreport

To run tests, generate a JUnit XML report and place the output in a specific folder:

    ./node_modules/jasmine-xml-reporter/bin/jasmine.js --junitreport --output=shippable/testresults/

If `npm test` is already an alias to `./node_modules/jasmine-xml-reporter/bin/jasmine.js`, then run with:

    npm test -- --junitreport --output=shippable/testresults/