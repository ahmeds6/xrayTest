Feature: Create Family


  @critical @JIRA-CTRP-28
  Scenario: PO- Create Family (uid:0b83e266-56b5-4a26-a31d-f83f2307cc60)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Family"
    And PO Create Family "Washington Cancer Center" "Active" "NIH" "Henry Ford Health System"