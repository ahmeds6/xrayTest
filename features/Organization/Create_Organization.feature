Feature: Create Organization

  @XRAYTEST-1 @XRAYTEST-6 @critical
  Scenario:  PO- Create Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Organization"
    And PO Create Organization "Henry Ford Health System" "Henry Ford" "2799 W. Grand Blvd." "Building 5" "United States" "Michigan" "Detroit" "48202" "henryford@hfs.com" "(313) 916-1666" "01"


  @XRAYTEST-2 @XRAYTEST-6 @major
  Scenario: PO- Check for Duplicate Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    * Organization Exist "Henry Ford Health System" "Active"
    And Organization name "Henry Ford Health System"
    Then Warning Message "Warning: Organization exists in the database. Please verify and create a new Organization record."


  @XRAYTEST-3 @XRAYTEST-6 @minor
  Scenario: PO- Organization Field lengths
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Organization field lengths "165" "165" "255" "255" "165" "10" "55" "10" "4"


  @XRAYTEST-4 @XRAYTEST-6 @major
  Scenario: PO- Request New Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Organization


  @XRAYTEST-5 @XRAYTEST-6 @major
  Scenario:  Reg- Request New Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    Then Request New Organization

  @XRAYTEST-8 @XRAYTEST-6 @major
  Scenario:  Reg- Request New Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    Then Request New Organization

  @XRAYTEST-9 @XRAYTEST-6 @major
  Scenario:  Reg- Request New Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    Then Request New Organization