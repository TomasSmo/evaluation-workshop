# Playwright Automated Test For Evaluation Workshop

This repo contains an automated UI test for the "Lunch App". 
This test checks the most important function of this program – ordering food. The test automatically logs the user into the system, dynamically selects a day and a desired dish, and attempts to order it. It verifies whether a successful order confirmation message is received.

# Getting Started

1. Clone the repo: git clone https://github.com/TomasSmo/evaluation-workshop.git
2. Install dependencies: 
    npm install
    npm init -y
    npm install -D @playwright/test
    npx playwright install


# Run Tests 

npx playwright test
OR 
npx playwright test --headed (Visible browser)

# Additional notes

The test might fail sometimes for some unknown reasons, so just run {npx playwright test OR npx playwright test --headed (Visible browser)} untill it doesn't fail