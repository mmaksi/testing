## What is a story?

The _acceptance criteria_ is a description of a feature that must be implemented to complete the story. In our case, it is described like this: _user must be able to open an app, enter the name of the task, press enter and see his task in the list of tasks._ <br>

User story is used to write the very first integration test. Based on the integration test, we write the unit tests. After the unit tests are written and fail, we begin writing code to fix the unit tests. Once all unit tests are fixed, the integration test should also pass.

## Writing integration tests

Writing integration tests is actually pretty simple. You should just read off the acceptance criteria (or any English description of the feature), and translate it into JavaScript. To do this, you will need to know a few Selenium functions: <br>

- `driver.get(url)`: Open a webpage.
- `driver.wait(condition, timeout)`: Wait for something. It’s typically used to wait for elements while the page is loading.
- `driver.findElement/driver.findElements`: Find elements on a webpage and returns it.
- `element.clear()` to clear input from old data.
- `element.click()` to click on tasks.
- `element.getAttribute(attr)` to get attribute values (classes in our case). <br>

And a few helper functions:

- `By`: This function is used as an argument to find elements. For example:
- `By.id("textInput")`
- `By.className("wrapper")`
- `By.xpath("//input")`
- `driver.findElement(By.tag("div"))`
- `until`: - This function is used as an argument for the wait function. For example:
- `until.elementLocated(By.id("submitBtn"))`
- `until.titleContains("abacaba")`
- `wait(until.elementLocated(By.name("wrapper")), 1000)`

## XPath Cheetsheet

- ### Selecting a tag:

  - `//h1`: Select all H1 elements.
  - `//article//p`: Select all `p` elements within `article` elements.

- ### Ordering:

  - `//ul/li[1]`: Select first LI child of UI elements.
  - `//a[last()]`: Slect the last A element of the whole document.

- ### Attributes:

  - `//*[@id='input']`: Select element with id='input'.
  - `//div[@class='wrapper']`: Select all DIV with class wrapper.

## Jest Cheetsheet

- # Defining tests

  - Grouping tests: `describe('<Component />', () => {});`

  - Individual tests: `it('does something', () => {});` or `test('does something', () => {});`

- # Setup and teardown

  - `beforeEach(() => {})`: Runs before each test.

  - `afterEach(() => {})`: Runs after all tests.

  - `beforeAll(() => {})`: Runs once before all tests.

  - `afterAll(() => {})`: Runs once after all tests.

- # Assertions

  `expect(value)` is always the first step to assert something. It contains the following functions:

- `expect(value).toBe(value)`: Shallow equality check
- `expect(value).toEqual(value)`: Deep equality check
- `expect(value).toBeTruthy()` and `expect(value).toBeFalsy()`
- `expect(value).toBeDefined()`
- `expect(value).toBeNull()`
- `expect(value).toBeGreaterThan(value)`, `expect(value).toBeGreaterThanOrEqual(value)`, `expect(value).toBeLessThan(value)`, and `expect(value).toBeLessThanOrEqual(value)`
- `expect(value).toBeCloseTo(value, numDigits)`
- `expect(value).toMatch(regex)`: Check a string against a regex.
- `expect(value).toContain(value)`: Check a data structure for containing a value.
- `expect(value).toBeInstanceOf(type)`: Instance check
  <br>
  You can also add `.not` to expect to flip the assertion around: `expect(value).not.toEqual('abacaba')` and `expect(value).not.toBeInstanceOf(Abacaba)`

- # Defining tests
  - Create a mock function: `jest.fn()`.
  - Check if a mock function was called: `expect(mock).toHaveBeenCalled()` and `expect(mock).toHaveBeenCalledWith(args)`

## Mocking

Mocking is the process of substitution of software modules by the modules with the same interface. Most importantly, the mocked modules must not have any side effects (i.e., talking to the web service, interacting with the file system, or OS, etc.). We resort to mocking when it is impossible to decouple such low-level actions from logic as well as to validate the arguments and return values when working with such low-level functions. <br>

Mocking comes in two flavours:

- Spying: The function calls still go to the target module, but Jest remembers the calls and arguments, in order to verify them later. For example, you can verify that the webpage stores the correct cookies in the browser. There is no harm in doing that every test run.

- Mocking: The function calls do not go to the target module, and instead, you have to provide the return value for every call which requires a return value. This approach is used when you do not want certain side effects to happen on every test run, such as API requests, package installation, or rocket launches.

## Mocking Cheatsheet:

- `const mockFn = jest.fn();` creates a mock function
- `mockFn.mockReturnValue(42);` specify its return values
- `mockFn.mockReturnValueOnce(42);` runs only once
- `mockFn.mockReturnValueOnce(1).mockReturnValueOnce('two').mockReturnValueOnce(3);` if the scenario is complicated

Sometimes, you want to mock the whole implementation of the function and not just the return value. You can use the `mockImplementation/mockImplementationOnce` functions for that:

```
const mockFn = jest.fn();
mockFn.mockImplementationOnce(() => console.log('it works'));

mockFn();
// it works
```

- `expect(fn).toHaveBeenCalled()`: Verify that fn was called without arguments.
- `expect(fn).toHaveBeenLastCalledWith(args)`: Verify that the last call was made with specified arguments.
- `expect(fn).toHaveBeenCalledTimes(n)`: Verify that fn was called exactly n times.
- `expect(fn).toHaveBeenNthCalledWith(n, args)`: Verify that fn was called with specified arguments on exactly the nth call.
- `fn.mock.calls` to assert on anything else.
