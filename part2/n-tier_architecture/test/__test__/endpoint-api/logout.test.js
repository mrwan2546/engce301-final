const { default: request } = require("./api");
const { headers, token } = require("./config");

describe("[Endpoint API] /api/v1/auth/logout", () => {
    it("should return a successful response", async () => {
        const resp = await request.set({ ...headers, "x-auth-token": token })
            .get("/api/v1/auth/logout")
            .expect(200);

        expect(resp.body.error).toBe(false);
        expect(resp.body.data).toBeDefined();
    });

    it("should return 400 HTTP status code (Invalid header)", async () => {
        const resp = await request
            .set({ ...headers, "x-auth-token": "" })
            .get("/api/v1/auth/logout")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })

    it("should return 400 HTTP status code (Token invalid)", async () => {
        const resp = await request.set({ ...headers, "x-auth-token": "INVALID_TOKEN" })
            .get("/api/v1/auth/logout")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })
});
