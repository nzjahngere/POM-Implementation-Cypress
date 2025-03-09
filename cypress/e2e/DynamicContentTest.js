import DynamicContentPage from "cypress/e2e/pageObject/DynamicContentPage";

describe("Dynamic Content Handling Test", () => {
    const dynamicContentPage = new DynamicContentPage();

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // Replace with actual site URL
    });

    it("Should load new content on scrolling", () => {
        dynamicContentPage.scrollToBottom();
        cy.wait(2000); // Wait for content to load
        dynamicContentPage.verifyNewContentLoaded();
    });
});
