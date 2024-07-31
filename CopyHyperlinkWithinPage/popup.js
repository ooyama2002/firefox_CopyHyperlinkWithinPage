browser.tabs
    .executeScript({ file: "copy_hyperlink.js" })
    .then(function () {
        setTimeout(function () {
            window.close();
        }, 1000);
    })
    .catch(function (error) {
        document.querySelector("#message").textContent = error.message;
        // console.log(error.message);
    });
