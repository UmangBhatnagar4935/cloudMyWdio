describe("Hit the main site", () => {
  it("Enter the URL", async () => {
    console.log("entered.....??????"); //1
    await browser.maximizeWindow(); //2
    await console.log("after size achieved!!"); //3

    await browser.url("https://www.w3docs.com/learn-html/html-select-tag.html"); //4

    setTimeout(() => {
      browser.execute(() => {
        window.alert(document.URL);
      });
    }, 3000); //10

    await browser.execute(() => window.scroll(0, 2000)); //6
    console.log(
      "******************************" +
        (await browser.getTitle()).toString() +
        "***************************************"
    ); //5

    await browser.pause(2000);

    await console.log(
      "+++++++++++++++++++++++ JUST BEFIRE IT'S FINISHED ++++++++++++++++++++++++"
    );

    await console.log(
      "############################it's finished#############################"
    ); //7

    let dropDown = await $("form>select"); //8
    console.log(
      "$$$$$$$$$$$$$$$$$$$" +
        dropDown.selectByIndex(4) +
        "$$$$$$$$$$$$$$$$$$$$$$"
    ); //9
    await browser.pause(2000);
    await dropDown.click();

    await console.log(
      "((((((((((((((((((((((((((((((((((((((((" +
        (await browser.getUrl()) +
        "))))))))))))))))))))))))))))))))))))"
    );
    await $("form>select>option");

    await browser.debug(); //11
  });
});
