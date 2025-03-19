const { default: request } = require("./api");
const { headers } = require("./config");

describe("[Endpoint API] /api/v1/auth/login", () => {
    it("should return a successful response", async () => {
        const resp = await request.set(headers)
            .type("form")
            .post("/api/v1/auth/login")
            .field("username", "admin")
            .field("password", "local")
            .expect(200);

        expect(resp.body.error).toBe(false);
        expect(resp.body.data).toBeDefined();
        expect(resp.body.data.token).toBeDefined();
    });

    it("should return 400 HTTP status code (Invalid data field)", async () => {
        const resp = await request.set(headers)
            .type("form")
            .post("/api/v1/auth/login")
            .field("username", "")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })

    it("should return 404 HTTP status code (User not exist)", async () => {
        const resp = await request.set(headers)
            .type("form")
            .post("/api/v1/auth/login")
            .field("username", "INVALID_USERNAME")
            .field("password", "local")
            .expect(404);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })


    it("should return 401 HTTP status code (Enter wrong password)", async () => {
        const resp = await request.set(headers)
            .type("form")
            .post("/api/v1/auth/login")
            .field("username", "admin")
            .field("password", "INVALID_PASSWORD")
            .expect(401);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })
});
