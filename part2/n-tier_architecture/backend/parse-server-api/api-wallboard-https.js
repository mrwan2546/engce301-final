const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const path = require("path");
var cors = require("cors");
var fs = require("fs");
const { parseConfig } = require("./config");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var apiport = 5006;

const config = {
  ...parseConfig,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + "/cloud/main.js",
  liveQuery: {
    classNames: ["OnlineAgentLists", "AgentMessageHistories", "AgentStatusHistories", "UserLoginHistories"], // List of classes to support for query subscriptions
  },
};

const app = express();

app.use(cors());
app.use(cors({ origin: "*" }));

// Serve static assets from the /public folder
app.use("/", express.static(path.join(__dirname, "/wallboard")));

// Serve the Parse API on the /parse URL prefix
const mountPath = "/api";
const api = new ParseServer(config);

var options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};

app.use(mountPath, api.app);

var httpsServer = require("https").createServer(options, app);

httpsServer.listen(apiport, function () {
  console.log("Wallboard API running on port " + apiport + ".");
});

ParseServer.createLiveQueryServer(httpsServer);
api.start();
