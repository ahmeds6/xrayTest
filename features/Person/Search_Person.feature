Feature: Search Person

  Scenario: PO- Search Person
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Person"
    And PO Search Person "William" "Gates" "Henry Ford Health System" "CTRP" "" "Active" "ctrpaum@gmail.com" "240-276-6978" "Complete" "Create" "05-Dec-2016" "05-Dec-2017" "ctrpcurator" "On"

  Scenario: Reg- Search Person
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Person"
    And Reg Search Person "William" "Gates" "Henry Ford Health System" "1234" "ctrpaum@gmail.com" "240-276-6978" "On"
