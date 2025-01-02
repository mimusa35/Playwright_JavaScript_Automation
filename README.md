# Playwright_JavaScript_Automation
A Playwright project for automating web application testing using JavaScript. Includes setup instructions, test examples, and execution commands for efficient browser-based automation.

# Project Overview
This repository provides a setup and example for testing web applications using Playwright with JavaScript. The project demonstrates how to install, set up, and write automated test scripts for verifying web pages.

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

3. Run specific files:
   ```bash
   npx playwright test HomePage.spec.js HomePage1.spec.js
   ```

4. Run a specific test file on Chromium browser in headed mode:
   ```bash
   npx playwright test HomePage.spec.js --project=chromium --headed
   ```

5. Run tests by title:
   ```bash
   npx playwright test -g "test title"
   ```

6. Run tests on a specific browser:
   ```bash
   npx playwright test --project=chromium
   ```

7. Debug tests:
   ```bash
   npx playwright test --debug
   ```

8. Debug specific test file:
   ```bash
   npx playwright test HomePage.spec.js --debug
   ```

9. Generate an HTML report:
   ```bash
   npx playwright show-report
   ```

# Folder Structure
```
project-folder/
├── tests/
│   ├── HomePage.spec.js
├── node_modules/
├── package.json   #node project management file
├── playwright.config.js  #playwright configuration 
└── README.md
```

# Resources
- [Playwright Official Documentation](https://playwright.dev/)
- [Node.js Official Website](https://nodejs.org/en)
- [VS Code Official Website](https://code.visualstudio.com/)
