# Playwright_JavaScript_Automation
A Playwright project for automating web application testing using JavaScript. This repository includes setup instructions, example test scripts, and commands for executing automated browser-based tests efficiently.

# Project Overview
This repository demonstrates how to use Playwright with JavaScript for testing web applications. It provides a step-by-step guide to installation, setup, and writing tests, along with detailed execution commands.

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

# Writing Tests Without CodeGen
**Step 1: Create a Test File**
- Create a new file in the `tests` folder with the extension `.spec.js` (e.g., `HomePage.spec.js`).

**Step 2: Add Required Modules**
- Add the required `@playwright/test` modules for testing and validations.

Example:
```javascript
const { test, expect } = require('@playwright/test');
```

**Step 3: Create a Test Block**
- Write a test block with a title and an asynchronous anonymous function.
- Use `page.goto()` to navigate to the application URL.
- Use `await` and `async` for handling JavaScript promises to ensure step-by-step execution.


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

# Folder Structure
```
project-folder/
├── .github/workflows/playwright.yml  # GitHub Actions workflow for CI
├── node_modules/                     # Contains all installed Node.js dependencies
├── playwright-report/                # Stores HTML test reports
├── test-results/                     # Stores test result logs and screenshots
├── tests/                            # Folder containing test files
│   ├── HomePage.spec.js              # Home Page test script
│   ├── Locators.spec.js              # Locator examples
├── .gitignore                        # Ignored files and folders
├── package-lock.json                 # Lockfile for dependency management
├── package.json                      # Node project management file
├── playwright.config.js              # Playwright configuration file
└── README.md                         # Project documentation

```

# Resources
- [Playwright Official Documentation](https://playwright.dev/)
- [Node.js Official Website](https://nodejs.org/en)
- [VS Code Official Website](https://code.visualstudio.com/)
- [VS Code Official Website](https://code.visualstudio.com/)
