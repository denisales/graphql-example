// funcoes que dizem para o graphql como ele vai obter os dados
const db = require('../config/database')

module.exports = {
    Query: {
        // async getUser(_, params) { // primeiro parametro é o objeto que eu recebo, segundo é de fato os parametros que va,os receber e estamos efetuando um destructure
        //     return await db('users').where({ id: params.id }) // msm coisa de knex.('users')
        // }
        async getUser(_, { id }) { // primeiro parametro é o objeto que eu recebo, segundo é de fato os parametros que va,os receber e estamos efetuando um destructure
            return await db('users').where({ id }).first() // msm coisa de knex.('users')
        },
        async getUsers(){
            return await db('users')
        }
    },
    Mutation: {
        async createUser (_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}