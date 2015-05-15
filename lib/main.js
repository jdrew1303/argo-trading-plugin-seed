"use strict";

var util = require("util"),
    StreamingNode = require("flic").node;

var streamingNode = new StreamingNode(function (err) {
    if (!err) {
        util.log("Argo plugin online");
    } else {
        util.log(err);
    }
});

streamingNode.on("argo.streaming", function (data) {
    util.log(data);
});

streamingNode.on("error", function (err) {
    util.log(err);
});