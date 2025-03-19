import supertest from 'supertest';
const { apiURL } = require("./config")

const request = supertest.agent(apiURL);
export default request;