const { default: request } = require("./api");
const { headers, token } = require("./config");

describe("[Endpoint API] /api/v1/postOnlineAgentStatus", () => {
    it("should return a successful response", async () => {
        const resp = await request.set({ ...headers, "x-auth-token": token })
            .post("/api/v1/postOnlineAgentStatus")
            .field("AgentCode", "9998")
            .field("AgentName", "Dev2")
            .field("IsLogin", "0")
            .field("AgentStatus", "1")
            .expect(200);

        expect(resp.body.error).toBe(false);
    });

    it("should return 400 HTTP status code (Invalid header)", async () => {
        const resp = await request
            .set({ ...headers, "x-auth-token": "" })
            .post("/api/v1/postOnlineAgentStatus")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })

    it("should return 400 HTTP status code (Invalid \"AgentCode\" field)", async () => {
        const resp = await request
            .set({ ...headers, "x-auth-token": "" })
            .post("/api/v1/postOnlineAgentStatus")
            .field("AgentName", "Unknown Agent Code")
            .field("IsLogin", "0")
            .field("AgentStatus", "1")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })

    it("should return 400 HTTP status code (Token invalid)", async () => {
        const resp = await request.set({ ...headers, "x-auth-token": "INVALID_TOKEN" })
            .post("/api/v1/postOnlineAgentStatus")
            .expect(400);

        expect(resp.body.error).toBe(true);
        expect(resp.body.data).toBe(null);
    })
});
