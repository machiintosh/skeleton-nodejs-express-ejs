const db = require("../db")

class Autor {
  static async insertNome(){
     
  }
  static async selectNome(){
    const connect = await db.connect();
    return await connect.querry("SELECT * FROM autores")
  }
  static async updatetNome(){
     
  }
  static async deleteNome(){
     
  }
  
} 
