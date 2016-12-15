Feature: Create Family

  Scenario: PO- Create Family
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Family"
    And PO Create Family "Washington Cancer Center" "Active" "NIH" "Henry Ford Health System"