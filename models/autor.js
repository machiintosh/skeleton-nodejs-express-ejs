const db = require("../db")

class Autor {
  static async insertAutor(data){
    const sql = "INSERT INTO autores(nom, sobrenome, data_nascimento) VALUES($1, 2$, 3$);";
    const values = [data.nome, data.sobrenome, data.data_nascimento];
    return await connect.query(sql, values)
  }
  
  static async selectAutor(){
    const connect = await db.connect();
    return await connect.query("SELECT * FROM autores");
  }
  
  static async updatetAutor(){
     
  }
  static async deleteAutor(){
     
  }
  
} 

module.exports = Autor;
