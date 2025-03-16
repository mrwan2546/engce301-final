module.exports = {
  development: {
    parseConfig: {
      databaseURI:
        "mongodb://wallboarduser:WB1qazxsw2@100.96.0.8:27017/wallboarddb",
      appId: "wallboardapi",
      masterKey: "wallboardapi", //Add your master key here. Keep it secret!
      clientKey: "wallboardapi",
      javascriptKey: "wallboardapi",
      serverURL: "https://localhost:5006/api", // Don't forget to change to https if needed
      publicServerURL: "https://localhost:5006/api",
    },
    endpointApiConfig: {
      apiURL: "https://localhost:8443/api/v1",
      serverKey:
        "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
    },
  },
  production: {
    parseConfig: {
      databaseURI:
        "mongodb://wallboarduser:WB1qazxsw2@10.21.47.33:27017/wallboarddb-team6",
      appId: "wallboardapi",
      masterKey: "wallboardapi", //Add your master key here. Keep it secret!
      clientKey: "wallboardapi",
      javascriptKey: "wallboardapi",
      serverURL: "https://lab-parse-server.cpe-rmutl.net/team06/api", // Don't forget to change to https if needed
      publicServerURL: "https://lab-parse-server.cpe-rmutl.net/team06/api",
    },
    endpointApiConfig: {
      apiURL: "https://lab-api.cpe-rmutl.net/team06/api/v1",
      serverKey:
        "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
    },
  },
}[process.env.NODE_ENV === "production" ? "production" : "development"];
