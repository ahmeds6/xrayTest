Feature: Create Person


  @critical @JIRA-CTRP-18
  Scenario: PO- Create Person (uid:0d28e943-f73b-4e61-8dd3-0ec314c3fa23)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Person"
    And PO Create Person "px" "William" "Henry" "Gates" "sx" "Complete" "Active" "ctrpaum@gmail.com" "240-276-6978" "6978" "Henry Ford Health System"
