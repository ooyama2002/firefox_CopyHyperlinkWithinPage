(() => {

    if (window.CopyHyperlinkWithinPageIsRun) {
        return;
    }
    window.CopyHyperlinkWithinPageIsRun = true;

    function copy(param) {
        let elements = document.querySelectorAll("a");
        let buff = "";
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].href !== undefined
                && elements[i].href.startsWith("http")) {

                let title = elements[i].textContent
                    .replace(/\r/g, " ")
                    .replace(/\n/g, " ")
                    .replace(/\t/g, " ")
                    .replace(/\s{2,}/g, " ")
                    .trim();
                if (title == "") title = "untitled";

                let url = elements[i].href;

                if (param == "normal") {
                    buff += title + "\r\n" + url + "\r\n\r\n";
                } else if (param == "markdown") {
                    buff += "[" + title + "](" + url + ")\r\n";
                } else if (param == "pukiwiki") {
                    buff += "[[" + title + ":" + url + "]]\r\n";
                } else if (param == "html") {
                    buff += "<a href=\"" + url + "\">" + title + "</a>\r\n";
                }
            }
        }

        // console.log(buff);
        navigator.clipboard.writeText(buff);

        // let textarea = document.createElement("textarea");
        // textarea.value = buff;
        // document.body.append(textarea);
        // textarea.select();
        // document.execCommand("copy");
        // textarea.remove();

        messageBox("copied.");
    }

    function messageBox(message) {
        let messageBox = document.createElement("div");
        messageBox.id = "messageBoxCopyHyperlinkWithinPage";
        messageBox.style.cssText = " font-size: 12px; color: black; width: 100%; padding: 20px 0; background-color: #e8ffd1; text-align: center; position: fixed; top: 0px; left: 0px; z-index: 999999; ";
        messageBox.textContent = message;
        document.body.appendChild(messageBox);

        setTimeout(function () {
            let messageBox = document.querySelector("#messageBoxCopyHyperlinkWithinPage");
            document.body.removeChild(messageBox);
        }, 1000);
    }

    browser.runtime.onMessage.addListener((message) => {
        copy(message.command);
    });

})();
