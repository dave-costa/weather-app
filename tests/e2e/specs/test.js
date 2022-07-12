describe("test actions in page", () => {
  it("should to have five initial cities", async () => {
    await cy.visit("/");
    await cy.get(".main").children("div").should("have.length", 5);
  });
  it("should add cities", async () => {
    await cy.visit("/");
    await cy.get("input.label__input").type("porto");
    await cy.get(".label__icon").click();
    await cy.get(".main").children("div").should("have.length", 6);
  });
});
