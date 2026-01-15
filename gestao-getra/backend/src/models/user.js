const ROLES = require("../config/roles");

class User {
  constructor({ id, email, role }) {
    if (!Object.values(ROLES).includes(role)) {
      throw new Error("Role inválida");
    }

    this.id = id;
    this.email = email;
    this.role = role;
  }
}

module.exports = User;
