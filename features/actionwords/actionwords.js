var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = require('chai').expect;
var loginPage = require('../support/LoginPage');
var login = new loginPage();
var menuItemList = require('../support/PoCommonBar');
var menuItem = new menuItemList();
var addOrgPage = require('../support/AddOrganizationPage');
var addOrg = new addOrgPage();
var selectValuePage = require('../support/CommonSelectList');
var selectValue = new selectValuePage();
var searchOrgPage = require('../support/ListOfOrganizationsPage');
var searchOrg = new searchOrgPage();
var searchPeoplePage = require('../support/ListOfPeoplePage');
var searchPeople = new searchPeoplePage();
var addPeoplePage = require('../support/AddPersonPage');
var addPeople = new addPeoplePage();
var searchFamilyPage = require('../support/ListOfFamiliesPage');
var searchFamily = new searchFamilyPage();
var addFamilyPage = require('../support/AddFamilyPage');
var addFamily = new addFamilyPage();
var projectFunctionsPage = require('../support/projectMethods');
var projectFunctions = new projectFunctionsPage();
var helperFunctions = require('../support/helper');
var helper = new helperFunctions();
var assert = require('assert');

exports.Actionwords = {
    loginInToCTRPApp: function (url, username, password) {
        // TODO: Implement action: "Given URL of CTRP page is " + String(URL)
        // TODO: Implement action: "And I enter the Username as " + String(username)
        // TODO: Implement action: "And I enter the Password as " + String(password)
        // TODO: Implement result: "Then the User should be logged in"
        browser.get(url);
        browser.driver.wait(function () {
            console.log('wait here');
            return true;
        }, 40).then(function () {
            login.login(username, password);
            login.accept();
            element(by.binding('headerView.username')).getText().then(function (loggedInUser) {
                expect(loggedInUser).to.equal(username, 'Verify the user is logged in to CTRP.\n Supplied Username: ' + username + '\n Username after login: ' + loggedInUser + 'Step name :' + stepName);
            })
        });
    },
    selectPage: function (page) {
        // TODO: Implement action: "And I want to " + String(page)
        // TODO: Implement result: "Then I should be in " + String(page)
        element(by.binding('headerView.username')).getText().then(function (value) {
            if (value === 'ctrpcurator') {
                menuItem.clickHomeEnterOrganizations();
            }
            if (value === 'ctrptrialsubmitter') {
                var homeSearchTrial = element(by.css('a[href="#/main/trials"]'));
                homeSearchTrial.isPresent().then(function (retVal) {
                    console.log('value of ret val : ' + retVal);
                    if (retVal === true) {
                        homeSearchTrial.isDisplayed().then(function (state) {
                            if (state) {
                                helper.clickLink(homeSearchTrial, "Home Search Trial link");
                            }
                            else {
                                console.log('Home link not Displayed');
                            }
                        });
                    }
                });
            }
            login.clickWriteMode('On');
            if (page.toUpperCase().replace(/ /g, '') === 'ADDORGANIZATION') {
                menuItem.clickOrganizations();
                menuItem.clickAddOrganizations();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Add Organization');
            } else if (page.toUpperCase().replace(/ /g, '') === 'ADDPERSON') {
                menuItem.clickPeople();
                menuItem.clickAddPerson();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Add Person');
            } else if (page.toUpperCase().replace(/ /g, '') === 'SEARCHORGANIZATION') {
                if (value === 'ctrpcurator') {
                    menuItem.clickOrganizations();
                }
                if (value === 'ctrptrialsubmitter') {
                    menuItem.clickJustOrganizations();
                }
                menuItem.clickListOrganizations();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Search Organizations');
            } else if (page.toUpperCase().replace(/ /g, '') === 'SEARCHPERSON') {
                menuItem.clickPeople();
                menuItem.clickListPeople();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Search Persons');
            } else if (page.toUpperCase().replace(/ /g, '') === 'ADDFAMILY') {
                menuItem.clickOrganizations();
                menuItem.clickAddFamily();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Add Family');
            } else if (page.toUpperCase().replace(/ /g, '') === 'SEARCHFAMILY') {
                menuItem.clickOrganizations();
                menuItem.clickListFamily();
                expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Search Families');
            } else {
                throw 'Not implemented';
            }
        });
    },
    pOCreateOrganization: function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext) {
        // TODO: Implement action: "And I enter the Organization Name " + String(name)
        // TODO: Implement action: "And I enter the Organization Alias " + String(alias)
        // TODO: Implement action: "And I enter the Organization Address1 " + String(address1)
        // TODO: Implement action: "And I enter the Organization Address2 " + String(address2)
        // TODO: Implement action: "And I select the Organization Country " + String(country)
        // TODO: Implement action: "And I enter the Organization State " + String(state)
        // TODO: Implement action: "And I enter the Organization City " + String(city)
        // TODO: Implement action: "And I enter the Organization Postal Code " + String(postalCode)
        // TODO: Implement action: "And I enter the Organization Email " + String(email)
        // TODO: Implement action: "And I enter the Organization Phone " + String(phone)
        // TODO: Implement action: "And I enter the Organization Phone Extension " + String(phoneExt)
        addOrg.setAddOrgName(name);
        addOrg.setAddAlias(alias);
        addOrg.clickSaveAlias();
        addOrg.setAddAddress(address1);
        addOrg.setAddAddress2(address2);
        selectValue.selectCountry(country);
        selectValue.selectState(state);
        addOrg.setAddCity(city);
        addOrg.setAddPostalCode(postal_code);
        addOrg.setAddEmail(email);
        addOrg.setAddPhone(phone);
        addOrg.setAddExtension(phone_ext);
        this.clickButton("save");
        // TODO: Implement result: "Then Organization should be created"
        expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Organization Detail');
        expect(addOrg.addOrgSRCID.isPresent()).to.eventually.equal(true);
        expect(addOrg.addOrgSRCID.isDisplayed()).to.eventually.equal(true);
    },
    clickButton: function (button) {
        // TODO: Implement action: "And I click on " + String(button)
        if (button === 'save') {
            addOrg.clickSave();
        } else if (button === 'search') {
            searchOrg.clickSearchButton();
        } else {
            throw 'Not implemented';
        }
    },
    pOSearchOrganization: function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I select the Source Context " + String(sourceContext) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I select the Source Status " + String(sourceStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I select the processing Status " + String(processingStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the Updated By " + String(updatedBy) + " for Organization search"
        // TODO: Implement action: "and I select the Service Request " + String(serviceRequest) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated Start Date " + String(lastUpdatedStartDate) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated End Date " + String(lastUpdatedEndDate) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        searchOrg.setOrgName(name);
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        expect(projectFunctions.inOrgSearchResults(name)).to.become('true');
    },
    regSearchOrganization: function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        searchOrg.setOrgName(name);
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        expect(projectFunctions.inOrgSearchResults(name)).to.become('true');
    },
    pOCreatePerson: function (prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org) {
        // TODO: Implement action: "And I enter the Person Prefix " + String(prefix)
        // TODO: Implement action: "And I enter the Person First Name " + String(fName)
        // TODO: Implement action: "And I enter the Person Middle Name " + String(mName)
        // TODO: Implement action: "And I enter the Person Last Name " + String(lName)
        // TODO: Implement action: "And I enter the Person Suffix " + String(suffix)
        // TODO: Implement action: "And I enter the Person Email " + String(email)
        // TODO: Implement action: "And I enter the Person Phone " + String(phone)
        // TODO: Implement action: "And I enter the Person Phone Extension " + String(phoneExt)
        // TODO: Implement action: "And I select the Person Affiliated Organization " + String(affiliatedOrg)
        addPeople.setAddPersonPrefix(prefix);
        addPeople.setAddPersonFirstName(f_name);
        addPeople.setAddPersonSecondName(m_name);
        addPeople.setAddPersonLastName(l_name);
        addPeople.setAddPersonSuffix(suffix);
        addPeople.setAddPersonEmail(email);
        addPeople.setAddPersonPhone(phone);
        searchOrg.clickOrgSearchModel();
        searchOrg.setOrgName(affiliated_org);
        searchOrg.clickSearchButton();
        searchOrg.selectOrgModelItem();
        searchOrg.clickOrgModelConfirm();
        element.all(by.css('.glyphicon.glyphicon-calendar')).get(0).click();
        element(by.css('.uib-datepicker-popup.dropdown-menu')).element(by.buttonText('Today'));
        this.clickButton("save");
        // TODO: Implement result: "Then Person should be created"
        expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Person Detail');
        expect(addPeople.addPersonSourceId.isPresent()).to.eventually.equal(true);
        expect(addPeople.addPersonSourceId.isDisplayed()).to.eventually.equal(true);
    },
    pOSearchPerson: function (f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search) {
        // TODO: Implement action: "and I enter the First Name " + String(fName) + " for Person search"
        // TODO: Implement action: "and I enter the Last Name " + String(lName) + " for Person search"
        // TODO: Implement action: "and I enter the affiliation " + String(affiliation) + " for Person search"
        // TODO: Implement action: "and I select the Source Context " + String(sourceContext) + " for Person search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Person search"
        // TODO: Implement action: "and I select the Source Status " + String(sourceStatus) + " for Person search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Person search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Person search"
        // TODO: Implement action: "and I select the processing Status " + String(processingStatus) + " for Person search"
        // TODO: Implement action: "and I enter the Updated By " + String(updatedBy) + " for Person search"
        // TODO: Implement action: "and I select the Service Request " + String(serviceRequest) + " for Person search"
        // TODO: Implement action: "and I select the Last Updated Start Date " + String(lastUpdatedStartDate) + " for Person search"
        // TODO: Implement action: "and I select the Last Updated End Date " + String(lastUpdatedEndDate) + " for Person search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Person search"
        // And Click button "search"
        searchPeople.setPersonFirstName(f_name);
        searchPeople.clickSearch();
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Person"
        expect(projectFunctions.inSearchResults(f_name)).to.become('true');
    },
    regSearchPerson: function (f_name, l_name, affiliation, source_id, email, phone, exact_search) {
        // TODO: Implement action: "and I enter the First Name " + String(fName) + " for Person search"
        // TODO: Implement action: "and I enter the Last Name " + String(lName) + " for Person search"
        // TODO: Implement action: "and I enter the affiliation " + String(affiliation) + " for Person search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Person search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Person search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Person search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Person search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Person"
        assert.fail(0, 1, 'Searching with Status should not be allowed' + '\nStep name :' + stepName);
    },
    pOCreateFamily: function (family_name, family_status, family_type, add_family_membership) {
        // TODO: Implement action: "And I enter the Family Name " + String(familyName)
        // TODO: Implement action: "And I select the Family Status " + String(familyStatus)
        // TODO: Implement action: "And I select the Family Type " + String(familyType)
        // TODO: Implement action: "And I select the Family Membership " + String(addFamilyMembership)
        addFamily.setAddFamilyName(family_name);
        selectValue.selectFamilyStatus(family_status);
        selectValue.selectFamilyType(family_type);
        searchOrg.clickOrgSearchModel();
        searchOrg.setOrgName(add_family_membership);
        searchOrg.clickSearchButton();
        searchOrg.selectOrgModelItem();
        searchOrg.clickOrgModelConfirm();
        selectValue.selectOrgFamilyRelationship('Affiliation');
        this.clickButton("save");
        // TODO: Implement result: "Then Family should be created"
        expect(element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText()).to.eventually.equal('Family Detail');
    },
    pOSearchFamily: function (name, family_type, family_status, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Family search"
        // TODO: Implement action: "and I select the Family Type " + String(familyType) + " for Family search"
        // TODO: Implement action: "and I select the Family Status " + String(familyStatus) + " for Family search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Family search"
        // And Click button "search"
        searchFamily.setFamilyName(name);
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Family"
        expect(projectFunctions.inSearchResults(name)).to.become('true');
    },
    organizationExist: function (org_name, status) {
        // TODO: Implement action: "and an organization already exist in CTRP with name \"orgName\" and status \"status\""
        menuItem.clickHomeEnterOrganizations();
        searchOrg.setOrgName(org_name);
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        //  expect(projectFunctions.inOrgSearchResults(org_name)).to.become('true');
        login.clickWriteMode('On');
    },
    organizationName: function (name) {
        // TODO: Implement action: "and I enter the Organization name \"name\""
        menuItem.clickOrganizations();
        menuItem.clickAddOrganizations();
        addOrg.setAddOrgName(name);
        addOrg.setAddAddress('a');
    },
    warningMessage: function (warning_message) {
        // TODO: Implement action: "and it should give a warning message as \"warningMessage\""
        element.all(by.binding('step.ncyBreadcrumbLabel')).last().getText().then(function (value) {
            if (value === 'Add Person') {
                throw 'Not implemented';
            } else if (value === 'Add Organization') {
                expect(element.all(by.css('.help-block')).get(2).getText()).to.eventually.equal(warning_message);
                menuItem.clickOrganizations();
                helper.alertDialog('OK', '');
                menuItem.clickListOrganizations();
                helper.alertDialog('OK', '');
            } else if (value === 'Add Family') {
                //console.log('Coming here');
                //element.all(by.css('.help-block')).get(1).getText().then(function(value){
                //    console.log('Value of text'+ value);
                //});
                expect(element.all(by.css('.help-block')).get(1).getText()).to.eventually.equal(warning_message);
                menuItem.clickOrganizations();
                helper.alertDialog('OK', '');
                menuItem.clickListOrganizations();
                helper.alertDialog('OK', '');
            } else {
                throw 'Not implemented';
            }
        });
    },
    personName: function (f_name, l_name) {
        // TODO: Implement action: "and I enter the fname as \"fName\" and lname as \"lName\" "
    },
    personExist: function (f_name, l_name, status) {
        // TODO: Implement action: "and a Person exist with fname as \"fName\" and lName \"lName\" and source status as \"status\""
    },
    familyExist: function (family_name, status) {
        // TODO: Implement action: "and Family exist with name as \"familyName\" and status as \"status\""

    },
    familyName: function (name) {
        // TODO: Implement action: "and I enter the Family Name as \"name\""
        menuItem.clickHomeEnterOrganizations();
        login.clickWriteMode('On');
        menuItem.clickOrganizations();
        menuItem.clickAddFamily();
        addFamily.setAddFamilyName(name);
        selectValue.selectFamilyStatus('Active');
    },
    familyFieldLengths: function (family_name) {
        // TODO: Implement action: "and length of Family name should be \"familyName\""
        throw 'Not implemented';
    },
    organizationFieldLengths: function (name, alias, address1, address2, city, postal_code, email, phone, phone_ext) {
        // TODO: Implement action: "and Organization name field length is \"name\""
        // TODO: Implement action: "and Organization alias field length is \"alias\""
        // TODO: Implement action: "and Organization address1 field length is \"address1\""
        // TODO: Implement action: "and Organization address2 field length is \"address2\""
        // TODO: Implement action: "and Organization city field length is \"city\""
        // TODO: Implement action: "and Organization postal code field length is \"postalCode\""
        // TODO: Implement action: "and Organization email field length is \"email\""
        // TODO: Implement action: "and Organization phone field length is \"phone\""
        // TODO: Implement action: "and Organization phone Ext field length is \"phoneExt\""
        throw 'Not implemented';
    },
    personFieldLengths: function (prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext) {
        // TODO: Implement action: "and Person prefix field length is \"prefix\""
        // TODO: Implement action: "and Person first name field length is \"fName\""
        // TODO: Implement action: "and Person middle name field length is \"mName\""
        // TODO: Implement action: "and Person last name field length is \"lName\""
        // TODO: Implement action: "and Person suffix field length is \"suffix\""
        // TODO: Implement action: "and Person email field length is \"email\""
        // TODO: Implement action: "and Person phone field length is \"phone\""
        // TODO: Implement action: "and Person phone Ext field length is \"phoneExt\""
        throw 'Not implemented';
    },
    requestNewOrganization: function () {
        // TODO: Implement action: "and I should be able to request New Organization"
        var requestOrg = 'To request the creation of a new organization record, please contact the Clinical Trials Reporting Office (CTRO) at ncictro@mail.nih.gov.' +
            '\n\nThe required information is Organization Name, Street Address, City, State, Country, phone, and email.';
        element(by.binding('headerView.username')).getText().then(function (value) {
            if (value === 'ctrpcurator') {
                throw 'Not implemented';
                //menuItem.clickHomeEnterOrganizations();
                //menuItem.clickOrganizations();
            }
            if (value === 'ctrptrialsubmitter') {
                var homeSearchTrial = element(by.css('a[href="#/main/trials"]'));
                helper.clickLink(homeSearchTrial, "Home Search Trial link");
                menuItem.clickJustOrganizations();

            }
            menuItem.clickRequestNewOrganization();
            expect(element(by.binding('requestCtrl.message')).getText()).to.eventually.equal(requestOrg);
        });
    },
    requestNewPerson: function () {
        // TODO: Implement action: "And I should be able to Request New Person"
        var requestPerson = 'To request the creation of a new person record, please contact the Clinical Trials Reporting Office (CTRO) at ncictro@mail.nih.gov.' +
            '\n\nThe required information is First Name, Last Name, Email, City, State/Province, Country and Organization Affiliation of the Person.'
        element(by.binding('headerView.username')).getText().then(function (value) {
            if (value === 'ctrpcurator') {
                throw 'Not implemented';
                // menuItem.clickHomeEnterOrganizations();
            }
            if (value === 'ctrptrialsubmitter') {
                var homeSearchTrial = element(by.css('a[href="#/main/trials"]'));
                helper.clickLink(homeSearchTrial, "Home Search Trial link");
            }
            menuItem.clickPeople();
            menuItem.clickRequestNewPerson();
            expect(element(by.binding('requestCtrl.message')).getText()).to.eventually.equal(requestPerson);
        });
    }
};