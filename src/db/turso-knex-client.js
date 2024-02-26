const BaseClient = require("knex/lib/dialects/better-sqlite3");

class Client_Libsql extends BaseClient {
    static dialect = "libsql";

    _driver() {
        return require("libsql");
    }

    async acquireRawConnection() {
      const options = this.connectionSettings.options || {};

      console.log("Connecting with Turso")

      const db = new this.driver(this.connectionSettings.filename, options);
      db.sync();

      return db;
    }
}

Object.assign(Client_Libsql.prototype, {
    dialect: "libsql",
    driverName: "libsql",
});

module.exports = Client_Libsql;
