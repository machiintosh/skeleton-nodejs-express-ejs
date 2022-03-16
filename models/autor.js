const db = require("../db")

class Autor {
  static async insert(data){
    const connect = await db.connect();
    const sql = "INSERT INTO autores(nome, sobrenome, data_nascimento) VALUES($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_nascimento];
    return await connect.query(sql, values)
  }
  
  static async select(){
    const connect = await db.connect();
    return await connect.query("SELECT * FROM autores");
  }
  
  static async updatet(){

  }
  static async delete(){
     
  }
  
} 

module.exports = Autor;
