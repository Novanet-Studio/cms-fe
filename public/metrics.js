function loadScript(a) {
  var b = document.getElementsByTagName("head")[0],
    c = document.createElement("script");
  (c.type = "text/javascript"),
    (c.src = "https://tracker.metricool.com/resources/be.js"),
    (c.onreadystatechange = a),
    (c.onload = a),
    b.appendChild(c);

  console.log("executed");
}

loadScript(function () {
  beTracker.t({ hash: "83999b6f6bd9f7dd35ae6cbb6cfca431" });
});
