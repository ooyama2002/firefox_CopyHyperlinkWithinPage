(() => {
    function copy() {
        let elements = document.querySelectorAll("a");
        let buff = "";
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].href !== undefined
                && elements[i].href.startsWith("http")) {
                buff += ((elements[i].textContent == "") ? "untitled" : elements[i].textContent) + "\r\n";
                buff += elements[i].href + "\r\n";
                buff += "\r\n";
            }
        }
        // console.log(buff);
        navigator.clipboard.writeText(buff);
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

    copy();

})();
