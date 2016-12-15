Feature: Search Person


  @critical @JIRA-CTRP-27
  Scenario: PO- Search Person  (uid:db94037a-cf07-46b9-9625-bf5f32817d87)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Person"
    And PO Search Person "William" "Gates" "Henry Ford Health System" "CTRP" "" "Active" "ctrpaum@gmail.com" "240-276-6978" "Complete" "Create" "05-Dec-2016" "05-Dec-2017" "ctrpcurator" "On"

  @critical @JIRA-CTRP-24
  Scenario: Reg- Search Person (uid:d73d2a90-6fab-437a-b186-44c0554ba452)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Person"
    And Reg Search Person "William" "Gates" "Henry Ford Health System" "1234" "ctrpaum@gmail.com" "240-276-6978" "On"
