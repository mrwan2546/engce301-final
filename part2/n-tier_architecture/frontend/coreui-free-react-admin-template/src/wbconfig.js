const wbconfig = {
  development: {
    hosturl: 'https://localhost:4000/api',
    wsurl: 'wss://localhost:4000',
    masterKey: 'wallboardapi',
    clientKey: 'wallboardapi',
    javascriptKey: 'wallboardapi',
    appId: 'wallboardapi',
  },
  production: {
    hosturl: 'https://lab-parse-server.cpe-rmutl.net/team06/api',
    wsurl: 'wss://lab-parse-server.cpe-rmutl.net/team06',
    masterKey: 'wallboardapi',
    clientKey: 'wallboardapi',
    javascriptKey: 'wallboardapi',
    appId: 'wallboardapi',
  },
}
export default wbconfig
