import { pool } from "../config/db.js"

class ClientesService {
    async getAll() {
        const res = await pool.query("SELECT * from clientes")
        console.log(res)
        return res.rows
    }

    async getById() {

    }

    /**
     * Helperzinho
     * const newClientes = await pool.query("INSERT INTO clientes(nome, idade, altura) VALUES($1, $2, $3) RETURNING *", [data.nome, data.idade, data.altura])
     */

    async createStudent(data) {
        const newStudent = await pool.query("INSERT INTO clientes(nome) VALUES($1) RETURNING *", [data.nome])
        console.log(newClient.rows[0]);

        return newClient.rows[0]
    }

    async delete() {

    }

}

export const clientesService = new ClientesService()