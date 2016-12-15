# xRay for Jira

#Run @critical test
protractor config.js --cucumberOpts.tags="@critical"

#Run @major test
protractor config.js --cucumberOpts.tags="@major"

#Run @minor test
protractor config.js --cucumberOpts.tags="@minor"

#Run test suite
protractor config.js --cucumberOpts.tags="@XRAYTEST-6"



