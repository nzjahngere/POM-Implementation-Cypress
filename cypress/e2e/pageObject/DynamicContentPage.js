class DynamicContentPage {
    loadMoreButton = '#loadMore'; // Example selector for loading content dynamically
    contentContainer = '#contentContainer'; // Example content area

    scrollToBottom() {
        cy.scrollTo("bottom");
    }

    verifyNewContentLoaded() {
        cy.get(this.contentContainer).should("not.be.empty");
    }
}

export default DynamicContentPage;
