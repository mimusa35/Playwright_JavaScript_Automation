# Playwright_JavaScript_Automation
A Playwright project for automating web application testing using JavaScript. This repository includes setup instructions, example test scripts, and commands for executing automated browser-based tests efficiently.

# Project Overview
This repository demonstrates how to use Playwright with JavaScript for testing web applications. It provides a step-by-step guide to installation, setup, writing tests, using the Playwright test generator (CodeGen), and executing tests.

# Prerequisites
1. **Node.js Environment**
   - Install Node.js: [Download Node.js](https://nodejs.org/en)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **VS Code Editor**
   - Install VS Code: [Download VS Code](https://code.visualstudio.com/download)

3. **Create Project Folder**
   - Create a folder on your local machine and open it in VS Code.

# Installation Process
1. Open the VS Code terminal and run the following command to initialize a Playwright project:
   ```bash
   npm init playwright@latest
   ```

2. Follow the prompts to set up the project.
# Test Scripts
- `HomePage.spec.js`: Validates the title and URL of the [Demoblaze](https://www.demoblaze.com/index.html) homepage.
- `Locators.spec.js`: Demonstrates the use of locators (CSS, XPath) for testing login functionality and retrieving web elements like links and product names.
- `Locator_builtin.spec.js`: Explores Playwright's built-in locators like `getByAltText`, `getByPlaceholder`, `getByRole`, etc., through a login scenario on the [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) demo site.
- `CodeGen.spec.js`: A test generated using Playwright's CodeGen tool to automate login, add a product to the cart, and log out on [Demoblaze](https://www.demoblaze.com/index.html).
- `Assertions.spec.js`: Demonstrates the usage of hard assertions like `toHaveURL`, `toHaveTitle`, `toBeVisible`, `toBeEnabled`, `toBeChecked`, `toHaveText`, and `toHaveCount`, etc.,to validate various web elements and their attributes on the [NopCommerce Register Page](https://demo.nopcommerce.com/register).
- `Soft_Assertions.spec.js`: Demonstrates the usage of soft assertions that allow multiple assertions to execute even if one fails, using the [Demoblaze](https://www.demoblaze.com/index.html) homepage.

# Folder Structure
```
project-folder/  
├── .github/workflows/playwright.yml  # GitHub Actions workflow for CI  
├── node_modules/                     # Contains all installed Node.js dependencies  
├── playwright-report/                # Stores HTML test reports  
├── test-results/                     # Stores test result logs and screenshots  
├── tests/                            # Folder containing test files  
│   ├── HomePage.spec.js              # Home Page test script  
│   ├── Locators.spec.js              # Locators test script  
│   ├── Locator_builtin.spec.js       # Built-in Locators test script  
│   ├── Assertions.spec.js            # Hard Assertions test script  
│   ├── Soft_Assertions.spec.js       # Soft Assertions test script  
│   ├── CodeGen.spec.js               # CodeGen-generated test script  
├── .gitignore                        # Ignored files and folders  
├── package-lock.json                 # Lockfile for dependency management  
├── package.json                      # Node project management file  
├── playwright.config.js              # Playwright configuration file  
└── README.md                         # Project documentation  
 
```

# Running Tests
Use the following commands to execute your tests:

1. Run all tests on all browsers in headless mode:
   ```bash
   npx playwright test
   ```

2. Run a specific test file:
   ```bash
   npx playwright test HomePage.spec.js
   ```

3. Run a specific test file on Chromium browser in headed mode:
   ```bash
   npx playwright test HomePage.spec.js --project=chromium --headed
   ```

4. Debug tests:
   ```bash
   npx playwright test --debug
   ```

5. Generate an HTML report:
   ```bash
   npx playwright show-report
   ```

# Writing Tests with CodeGen (Test Generator)
The Playwright test generator helps record and generate tests automatically. You can use the following methods to generate and save your test scripts:

1. Run the following command to launch the Playwright Inspector and browser for recording:
   ```bash
   npx playwright codegen 
   ```
2. Save to a specific test file:
   ```bash
   npx playwright codegen --output tests/CodeGen.spec.js  
   ```
3. Generate tests targeting JavaScript:
   ```bash
   npx playwright codegen --target=javascript    
   ```
4. Open the browser in a specific mode, like Chromium:
   ```bash
   npx playwright codegen --browser=chromium      
   ```
5. Emulate a device during test generation, e.g., iPhone 13:
   ```bash
   npx playwright codegen --device="iPhone 13"      
   ```
6. Customize viewport size for recording:
   ```bash
   npx playwright codegen --viewport-size="1280,720"        
   ```

# Handling Test Failures
To ensure that soft assertion failures or intentional test failures (like in `Soft_Assertions.spec.js`) do not fail the entire CI workflow, the playwright.yml file has been modified:
   ```yaml
   - name: Run Playwright tests
  run: npx playwright test || true
   ```
This ensures:
- The workflow will complete successfully even if some tests fail.
- The test report will still include all test results, which can be reviewed for failures or issues.


# Resources
- [Playwright Official Documentation](https://playwright.dev/)
- [Node.js Official Website](https://nodejs.org/en)
- [VS Code Official Website](https://code.visualstudio.com/)