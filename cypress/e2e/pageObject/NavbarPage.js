class NavbarPage {
    homeLink = 'a[href="/home"]';
    aboutLink = 'a[href="/about"]';
    contactLink = 'a[href="/contact"]';

    clickHome() {
        cy.get(this.homeLink).click();
    }

    clickAbout() {
        cy.get(this.aboutLink).click();
    }

    clickContact() {
        cy.get(this.contactLink).click();
    }
}

export default NavbarPage;
