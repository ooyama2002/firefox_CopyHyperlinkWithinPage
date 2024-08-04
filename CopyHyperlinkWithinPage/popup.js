browser.tabs
    .executeScript({ file: "copy_hyperlink.js" })
    .then(() => {
        document.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() == "div") {
                browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
                    browser.tabs.sendMessage(tabs[0].id, {
                        command: e.target.id,
                    }).then((response) => {
                        window.close();
                    }).catch((error) => {
                        document.querySelector("#message").textContent = error.message;
                    });
                });
            }
        });
    })
    .catch((error) => {
        document.querySelector("#message").textContent = error.message;
    });
