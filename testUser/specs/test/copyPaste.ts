import { Key } from "webdriverio";

describe("Copy & Paste", () => {
  it("Copy, Paste: An Implementation", async () => {
    await browser.url("http://www.google.com");
    await browser.maximizeWindow();
    await browser.pause(2000);
    const searchBox = await $("div>.gLFyf");
    await browser.pause(2000);
    await searchBox.setValue("Tom Cruise");
    await browser.pause(1000);
    await browser.keys(Key.Enter);
    await browser.pause(1000);
    const aboutActor = $(".kno-rdesc>span:nth-of-type(1)");
    await browser.pause(1000);
    console.log(aboutActor.getText());
    const contentAboutActor = await aboutActor.getText();

    const insideSearchBar = await $(".a4bIc>textarea");
    await insideSearchBar.click();
    await browser.pause(1000);
    await browser.keys([Key.Command, "a", Key.Delete]);

    await browser.pause(1000);

    await insideSearchBar.setValue(contentAboutActor);
    await browser.keys([Key.Enter]);

    await browser.pause(3000);
  });
});
