const wbconfig = {
  development: {
    hosturl: 'https://localhost:5006/api',
    wsurl: 'wss://localhost:5006',
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
export default wbconfig[import.meta.env.PROD ? 'production' : 'development']
