chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  if (req.type === "inputLabel") {
    await chrome.debugger.attach({ tabId: sender.tab.id }, "1.3");
    for (let i = 0; i < req.msg.length; i++) {
      await chrome.debugger.sendCommand(
        { tabId: sender.tab.id },
        "Input.dispatchKeyEvent",
        {
          type: "keyDown",
          text: req.msg[i],
          isKeypad: true,
        }
      );
    }
    setTimeout(() => {
      chrome.debugger.detach({ tabId: sender.tab.id });
    }, 1000);
  }
});
