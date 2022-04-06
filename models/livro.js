const db = require("../db")

class Livro {

  static async select() {
    const connect = await db.connect();
    return await connect.query("SELECT * FROM livros;");
  }

  static async insert(data){
    const connect = await db.connect();
    const sql = "INSERT INTO livros(autor, titulo, editora, data_publicacao, preco) VALUES($1, $2, $3, $4, $5);";
    const values = [data.autor, data.titulo, data.editora, data.data_publicacao, data.preco];
    return await connect.query(sql, values);
  }

  static async delete(data){
    const connect = await db.connect();
    const sql="DELETE FROM livros WHERE id=$1;";
    const values=[data.id];
    return await connect.query(sql, values);
  }

  static async update(data){
    const connect = await db.connect();
    const sql="UPDATE livros SET autor=$1, titulo=$2, editora=$3, data_publicacao=$5, preco=$6 where id=$7;";
    const values=[data.autor, data.titulo, data.editora, data.data_publicacao, data.preco, data.id];
    return await connect.query(sql, values);
  }


  static async selectPerId(data){
    const connect = await db.connect();
    //const sql="SELECT * FROM livros where autor=1";
    //const values=[data.autor];
    return await connect.query("SELECT * FROM livros where autor=1");
  }

}
module.exports = Livro;
