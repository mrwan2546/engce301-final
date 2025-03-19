const { default: request } = require("./api")

test("should be invalid \"Authorization\" header", () => {
    request.get("/").expect(401)
})

test("should be incorrect \"Authorization\" header", () => {
    request.set({ Authorization: "Bearer INVALID_TOKEN" }).get("/").expect(401)
})