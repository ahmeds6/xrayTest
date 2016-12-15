
module.exports = function () {
    this.setDefaultTimeout(60 * 1000);
    this.Before(function (scenario) {
         this.actionwords = Object.create(require('../actionwords/actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });

    this.BeforeStep(function (event, callback) {
        var step = event.getPayloadItem('step');
        stepName = step.getName();
        browser.sleep(25).then(callback);
    });

    this.Given(/^Login in to CTRP app "(.*)" "(.*)" "(.*)"$/, function (url, username, password,callback) {
            this.actionwords.loginInToCTRPApp(url, username, password);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Select page "(.*)"$/, function (page,callback) {
            this.actionwords.selectPage(page);
            browser.sleep(25).then(callback);
    });

    this.Given(/^PO Create Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext, callback) {
        this.actionwords.pOCreateOrganization(name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Click button "(.*)"$/, function (button, callback) {
        this.actionwords.clickButton(button);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search, callback) {
        this.actionwords.pOSearchOrganization(name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Reg Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search, callback) {
        this.actionwords.regSearchOrganization(name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Create Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org, callback) {
        this.actionwords.pOCreatePerson(prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Search Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search, callback) {
        this.actionwords.pOSearchPerson(f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Reg Search Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, affiliation, source_id, email, phone, exact_search, callback) {
        this.actionwords.regSearchPerson(f_name, l_name, affiliation, source_id, email, phone, exact_search);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Create Family "(.*)" "(.*)" "(.*)" "(.*)"$/, function (family_name, family_status, family_type, add_family_membership, callback) {
        this.actionwords.pOCreateFamily(family_name, family_status, family_type, add_family_membership);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Search Family "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, family_type, family_status, exact_search, callback) {
        this.actionwords.pOSearchFamily(name, family_type, family_status, exact_search);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Organization Exist "(.*)" "(.*)"$/, function (org_name, status, callback) {
        this.actionwords.organizationExist(org_name, status);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Organization name "(.*)"$/, function (name, callback) {
        this.actionwords.organizationName(name);
        browser.sleep(25).then(callback);
    });

    this.Then(/^Warning Message "(.*)"$/, function (warning_message, callback) {
        this.actionwords.warningMessage(warning_message);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Person Name "(.*)" "(.*)"$/, function (f_name, l_name, callback) {
        this.actionwords.personName(f_name, l_name);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Person Exist "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, status, callback) {
        this.actionwords.personExist(f_name, l_name, status);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Family Exist "(.*)" "(.*)"$/, function (family_name, status, callback) {
        this.actionwords.familyExist(family_name, status);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Family Name "(.*)"$/, function (name, callback) {
        this.actionwords.familyName(name);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Family field lengths "(.*)"$/, function (family_name, callback) {
        this.actionwords.familyFieldLengths(family_name);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Organization field lengths "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, city, postal_code, email, phone, phone_ext, callback) {
        this.actionwords.organizationFieldLengths(name, alias, address1, address2, city, postal_code, email, phone, phone_ext);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Person field lengths "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext, callback) {
        this.actionwords.personFieldLengths(prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext);
        browser.sleep(25).then(callback);
    });

    this.Then(/^Request New Organization$/, function (callback) {
        this.actionwords.requestNewOrganization();
        browser.sleep(25).then(callback);
    });

    this.Then(/^Request New Person$/, function (callback) {
        this.actionwords.requestNewPerson();
        browser.sleep(25).then(callback);
    });
}
