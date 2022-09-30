before(() => {});

describe("Test", () => {
  it("Test", () => {
    const token = cy.task("getState", "token");
    console.log(token);
  });
});
