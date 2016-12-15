Feature: Search Organization


  @critical @JIRA-CTRP-16
  Scenario: PO- Search Organization (uid:84f0d4d6-e8cf-4afb-b2f2-b99f079bf259)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Organization"
    And PO Search Organization "Henry Ford Health System" "true" "" "CTRP" "" "Active" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "Complete" "ctrpcurator" "" "" "" "true"

  @critical @JIRA-CTRP-17
  Scenario: Reg- Search Organization (uid:ff711173-8a69-47fd-bb18-b722d2b8b366)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Organization"
    And Reg Search Organization "Henry Ford Health System" "true" "" "" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "ctrpcurator" "true"
