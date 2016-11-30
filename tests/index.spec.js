var assert = require('assert');

describe('webdriver.io page', function() {
  it('should have the right title', function () {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    assert.equal(title, 'WebdasdfsariverIO - Selenium 2.0 javascript bindings for nodejs');
  });
  
  it('should have the right title', function () {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
  
  it('should have the right title', function () {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});