before(() => {});

const uploadFile = () => {
  return cy.fixture("../fixtures/logo.png").then((image) => {
    const blob = Cypress.Blob.base64StringToBlob(image, "image/png");
    const file = new File([blob], "../fixtures/logo.png", {
      type: "image/png",
    });
    return file;
  });
};

const attachment = async () => {
  // return new Promise((resolve) => {
  //   return resolve(uploadFile());
  // });

  let bidderJson = {};
  await new Promise((resolve) => {
    uploadFile().then(async (res) => {
      bidderJson = { ...res };

      resolve(bidderJson);
    });
  });
  return bidderJson;
};

describe("Test", () => {
  it("Test", () => {
    console.log(attachment());
  });
});
