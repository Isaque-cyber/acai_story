import { pool } from "../config/db.js"

class PedidosService {
    async getAll() {
        const res = await pool.query("SELECT * from pedidos")
        console.log(res)
        return res.rows
    }

    async getById() {

    }

    /**
     * Helperzinho
     * const newPedidos = await pool.query("INSERT INTO pedidos(nome, idade, altura) VALUES($1, $2, $3) RETURNING *", [data.nome, data.idade, data.altura])
     */

    async createPedidos(data) {
        const newPedidos = await pool.query("INSERT INTO pedidos(nome) VALUES($1) RETURNING *", [data.nome])
        console.log(newPedidos.rows[0]);

        return newPedidos.rows[0]
    }

    async delete() {

    }

}

export const pedidosService = new PedidosService()