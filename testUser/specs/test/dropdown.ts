describe("Hit the main site", () => {
  it("Enter the URL", async () => {
    console.log("entered.....??????"); //1
    await browser.maximizeWindow(); //2
    console.log("after size achieved!!"); //3

    await browser.url(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select_multiple"
    );

    await browser.switchToFrame(0);

    let selectedFormWDIO = await await $("#cars");
    await selectedFormWDIO.selectByVisibleText("Volvo");

    await selectedFormWDIO.selectByVisibleText("Audi");
    await browser.pause(2000);
    // here the multiselect options are clicked or not is being checked through vanilla javascript.
    // let getAllSelectedOptions =
    await browser
      .execute(() => {
        let selectForm = document.querySelector(
          "select#cars"
        ) as HTMLSelectElement;

        let optionsisSelected = new Array();
        for (let option of selectForm.options) {
          if (option.selected) {
            optionsisSelected.push(option.text);
          }
        }

        return optionsisSelected;
      })
      .then((getAllSelectedOptions) =>
        console.log("All selected Options: " + getAllSelectedOptions)
      );

    if (await browser.isAlertOpen) {
    }

    browser.moveToElement();
  });
});
