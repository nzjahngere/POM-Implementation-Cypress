import LoginPage from "cypress/e2e/pageObject/LoginPage";

describe("Login Functionality Test", () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    it("Should login successfully", () => {
        loginPage.enterUsername("Admin");
        loginPage.enterPassword("admin123");
        loginPage.clickLogin();

        // Verify successful login
        cy.url().should("include", "/dashboard");
    });
});
