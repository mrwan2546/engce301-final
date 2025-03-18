const sql = require("mssql");

const { sqlConfig } = require("../config");

/**
 *
 * @param {string} username
 * @returns
 */
async function getUserByUsername(username) {
  let pool = await sql.connect(sqlConfig);
  return pool.query`select u.user_id, u.username, u.password, u.agent_id, oa.agent_code, oa.AgentName, oa.AgentStatus, oa.IsLogin from Users u left join [OnlineAgents] oa on oa.OnlineAgent_id = u.agent_id  WHERE u.username = ${username}`;
}

/**
 *
 * @param {number} user_id
 * @param {"LOGIN" | "LOGOUT"} action
 */
async function createLoginNLogoutHistories(user_id, action) {
  let pool = await sql.connect(sqlConfig);
  // Create login / logout history
  await pool.query`insert into UserHistory (user_id, [action]) VALUES (${user_id}, ${action})`;
}


/**
 *
 * @param {number} user_id
 * @param {0 | 1} is_logged
 */
async function updateLoginAgent(user_id, is_logged) {
  let pool = await sql.connect(sqlConfig);
  return pool.query`insert into UserHistory (user_id, [action]) VALUES (${user_id}, ${action})`;
}

module.exports = {
  getUserByUsername,
  createLoginNLogoutHistories
};
