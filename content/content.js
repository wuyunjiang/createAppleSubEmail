const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.onload = function () {
  //监听邮箱添加按钮
  function listeningAdd() {
    let timer = setInterval(async () => {
      console.log("监听是否有添加按钮的图标。。。");
      const tar = document.querySelector(".hide-my-email__icon-container");
      if (tar) {
        clearInterval(timer);
        document
          .querySelector(".hide-my-email__icon-container .icon-plus")
          .parentElement.click();
        await sleep(50000);
        listeningOnCreate();
      }
    }, 500);
  }

  //监听是否在邮箱创建页面
  function listeningOnCreate() {
    let timer = setInterval(async () => {
      console.log("监听是否已经进入到邮箱创建页面。。。");
      const tar = document.querySelector(".hide-my-email__section input");
      if (tar) {
        clearInterval(timer);
        const address = document.querySelector(
          ".hide-my-email__section-email .text-spacing-body"
        ).innerText;
        document.querySelector(".hide-my-email__section input").focus();
        chrome?.runtime?.sendMessage({
          type: "inputLabel",
          msg: address,
        });
        await sleep(50000);
        listeningInputFinished();
      }
    }, 500);
  }

  //监听是否已经输入完成邮箱地址
  function listeningInputFinished() {
    let timer = setInterval(async () => {
      const address = document.querySelector(
        ".hide-my-email__section-email .text-spacing-body"
      ).innerText;
      const value = document.querySelector(
        ".hide-my-email__section input"
      ).value;
      if (address === value) {
        clearInterval(timer);
        document.querySelector(".modal-button-bar button[type=submit]").click();
        await sleep(50000);
        hasFinished();
      }
    }, 500);
  }

  // 监听是否创建完成
  function hasFinished() {
    let timer = setInterval(async () => {
      const tar = document.querySelector(".form-tooltip-textbox-wrapper");
      if (tar) {
        clearInterval(timer);
        document.querySelector("fieldset button[type=button]").click();
        await sleep(50000);
        listeningAdd();
      }
    }, 500);
  }

  // 开始监听邮箱添加按钮
  listeningAdd();
};
