function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    document.getElementById("copy_icon").src = "https://raw.githubusercontent.com/Geoffery10/minecraft-server/1df3f10e236e052786fbb064801b49962930d165/images/check-mark.svg";
}