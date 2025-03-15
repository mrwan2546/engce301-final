const { z } = require("zod");

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const logoutSchema = z.object({
  agent_code: z.string(),
});

module.exports = {
  loginSchema,
  logoutSchema,
};
