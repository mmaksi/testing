// selenium-webdriver are the JS bindings for Selenium
import webdriver from "selenium-webdriver";
// chromedriver is the JS binding and a distribution of the Google Chrome browser driver
import chrome from "chromedriver";

// creates a Selenium webdriver with Chrome attached and returns it
export const getDriver = () => {
  let driver = new webdriver.Builder().forBrowser("chrome").build();
  return driver;
};
