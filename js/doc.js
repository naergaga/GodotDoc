var replace = function () {
    var nodes = document.querySelectorAll("code");
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.childNodes.length >= 2) {
            var str = "<span class='pre'>";
            for (var j = 0; j < node.childNodes.length; j++) {
                var node1 = node.childNodes[j];
                str += node1.textContent;
            }
            str += "</span>";
            node.innerHTML = str;
        }
    }
    // console.log("doc replace done.");
}
window.onload = function () {
    replace();
}