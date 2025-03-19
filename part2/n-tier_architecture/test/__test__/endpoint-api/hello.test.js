const { default: request } = require("./api")
const { headers } = require("./config")


describe("[Endpoint API] /", () => {
    test("should return a successful response", async () => {
        await request.set(headers).get("/").expect(200)
    })
})