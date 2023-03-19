import { getDriver } from "./helpers";
import { until } from "selenium-webdriver";

let driver;

beforeAll(() => {
  // create a browser instance once before all tests
  driver = getDriver();
});

afterAll(async () => {
  await driver.quit();
});

test("should have a title", async () => {
  // Navigate the browser to the home page
  await driver.get("http://localhost:3000");
  /**
   * wait until the webpage has the title React App, for one second at most.
   * If the page does not load, this line will timeout and throw an exception, failing the test
   */
  await driver.wait(until.titleIs("React App"), 1000);
});
