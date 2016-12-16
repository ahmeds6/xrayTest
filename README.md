# xRay for Jira

#Run @critical test
protractor config.js --cucumberOpts.tags="@critical"

#Run @major test
protractor config.js --cucumberOpts.tags="@major"

#Run @minor test
protractor config.js --cucumberOpts.tags="@minor"

#Run test suite
protractor config.js --cucumberOpts.tags="@XRAYTEST-6"

#To export results to JIRA
curl -H "Content-Type: application/json" -X POST -u ahmeds6:password --data @output.json https://tracker-dev.nci.nih.gov/rest/raven/1.0/import/execution/cucumber

