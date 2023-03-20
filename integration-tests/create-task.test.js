/**
 * we do not make any assumptions about the page structure or the number of existing to-dos.
 * This is precisely what you are looking for in an integration test.
 * It should be as simple as possible,
 * so the implementation of the app does not depend on the implementation of the test.
 * The test must only describe the behaviour and leave the implementation of the app open.
 */
import { getDriver } from "./helpers";
import { until, By, Key } from "selenium-webdriver";

let driver;

beforeAll(() => {
  // create a browser instance once before all tests
  driver = getDriver();
});

afterAll(async () => {
  await driver.quit();
});

test("should create tasks", async () => {
  // Navigate the browser to the home page
  await driver.get("http://localhost:3000");
  /**
   * wait until until the task input is rendered, for one second at most.
   * If the page does not load, this line will timeout and throw an exception, failing the test
   */
  await driver.wait(
    until.elementLocated(By.xpath("//input[@placeholder='Enter new task']")),
    1000
  );
  // Send some text to the input field and press Enter
  await driver
    .findElement(By.xpath("//input[@placeholder='Enter new task']"))
    .sendKeys("new todo!" + Key.ENTER);
  // This line queries the document for any element which contains text "new todo!"
  await driver.wait(
    until.elementLocated(By.xpath("//*[text()='new todo!']")),
    1000
  );
});
