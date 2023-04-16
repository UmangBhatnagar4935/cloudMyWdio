import { Key } from "webdriverio";

describe("Hit the main site", () => {
  it("Enter the URL", async () => {
    console.log("entered.....??????"); //1
    await browser.maximizeWindow(); //2
    console.log("after size achieved!!"); //3

    await browser.url(
      "http://www.dhtmlgoodies.com/submitted-scripts/i-google-like-drag-drop/index.html"
    );

    const sourceElement1 = await $("#block-1>h1");
    const sourceElement2 = await $("#block-2>h1");
    const targetElement = await $("#block-3>h1");

    await browser.pause(2000);
    await sourceElement1.dragAndDrop(targetElement);
    await browser.pause(2000);
    await sourceElement2.dragAndDrop(targetElement);
    await browser.pause(2000);
    await browser.keys([Key.Command, "A"]);
    await browser.pause(2000);
    //await browser.keys([Key.Control, "a"]);
    await browser.keys([Key.Command, "C"]);
    await browser.pause(2000);
    await browser.keys([Key.Command, "a"]);
    await browser.keys([Key.Command, "c"]);
    //await browser.keys([Key.Control, "v"]);
    let copiedValue = await browser.keys(["Command", "v"]);
    await browser.pause(2000);
    await console.log(copiedValue);

    await browser.pause(5000);
  });
});
