import NavbarPage from "cypress/e2e/pageObject/NavbarPage";

describe("Navbar Navigation Test", () => {
    const navbarPage = new NavbarPage();

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // Replace with the actual site URL
    });

    it("Should navigate to Home page", () => {
        navbarPage.clickHome();
        cy.url().should("include", "/home");
    });

    it("Should navigate to About page", () => {
        navbarPage.clickAbout();
        cy.url().should("include", "/about");
    });

    it("Should navigate to Contact page", () => {
        navbarPage.clickContact();
        cy.url().should("include", "/contact");
    });
});
