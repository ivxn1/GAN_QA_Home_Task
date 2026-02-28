# QA Engineer Home Task – Ivan Zhelev

## Technology Stack Overview


- **Programming Language:** JavaScript (ES6)
- **Testing Framework:** [Playwright](https://playwright.dev/) with @playwright/test
- **IDE:** VS Code
- **Test Runner:** Playwright Test

### Rationale
- **JavaScript** is widely used for web automation and is natively supported by Playwright.
- **Playwright** provides robust cross-browser automation, parallel execution, and modern API for UI testing.
- **VS Code** is chosen for its rich ecosystem and Playwright extension support.

---

## Setup Instructions


1. **Clone the repository:**
  ```sh
  git clone <your-repo-url>
  cd GAN_QA_Home_Task
  ```
2. **Install dependencies:**
  ```sh
  npm install
  ```
3. **Install Playwright browsers:**
  ```sh
  npx playwright install
  ```

---

## Test Execution Guide


- **Run all tests:**
  ```sh
  npx playwright test
  ```
- **Run tests in headed mode (see browser UI):**
  ```sh
  npx playwright test --headed
  ```
- **View HTML test report:**
  ```sh
  npx playwright show-report
  ```
- **Test files location:**
  - All test cases are in the `tests/` directory.
- **Run tests in headed mode (see browser UI):**
  ```sh
  npx playwright test --headed
  ```
- **View HTML test report:**
  ```sh
  npx playwright show-report
  ```
- **Test files location:**
  - All test cases are in the `tests/` directory.

---

## Design Patterns Used

- **Page Object Model (POM):**
  - All page interactions are abstracted in the `pages/` directory (`LoginModal.js`, `RegistrationModal.js`, `AccountHistoryPage.js`, `BasePage.js`).
  - This improves maintainability and readability by separating test logic from UI selectors and actions.
- **Fixtures:**
  - Shared setup logic is placed in `test.beforeEach` and reusable page objects.

---

## Deliverables

- **Test case files:**
  - `tests/registration.spec.js` – Registration and bonus verification
  - `tests/login.spec.js` – Login scenarios
- **Source code:**
  - Page objects in `pages/`
- **README.md:**
  - This file

---

## Configuration

- **Playwright config:**
  - See `playwright.config.js` for browser/project setup and base URL.
- **Dependencies:**
  - See `package.json` for Playwright and Node types.

---

## Repository

- Please ensure your code and test cases are pushed to a public repository (GitHub, GitLab, Bitbucket) for review.

---

## Contact

For any questions, please contact Ivan Zhelev.
