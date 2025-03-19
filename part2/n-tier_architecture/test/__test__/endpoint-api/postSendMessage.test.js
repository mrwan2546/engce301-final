const { default: request } = require("./api");
const { headers, token } = require("./config");

describe("[Endpoint API] /api/v1/postSendMessage", () => {
    it("should return a successful response", async () => {
        await request.set({ ...headers, "x-auth-token": token })
            .post("/api/v1/postSendMessage")
            .field("FromAgentCode", "") // TODO: ?????
            .field("ToAgentCode", "9999")
            .field("Message", "Send via Jest test case.")
            .expect(200);
    });

    it("should return 400 HTTP status code (Invalid \"ToAgentCode\" field)", async () => {
        await request
            .set({ ...headers, "x-auth-token": token })
            .post("/api/v1/postOnlineAgentStatus")
            .field("Message", "Invalid destination agent code")
            .expect(400);
    });

    it("should return 400 HTTP status code (Invalid header)", async () => {
        const resp = await request
            .set({ ...headers, "x-auth-token": "" })
            .post("/api/v1/postOnlineAgentStatus")
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
