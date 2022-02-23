let connect = function(){
  if (global.connnection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://fkzdsjru:bAxsw1RxIEjVjX58Xt4_MaevFQYfFmKU@kesavan.db.elephantsql.com/fkzdsjru"
  });

  global.connection = pool
  return pool.connect();
}

module.exports = { connect }