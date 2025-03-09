class NavbarPage {
    homeLink = 'a[href="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"]';
    aboutLink = 'a[href="https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"]';
    contactLink = 'a[href="https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"]';

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
