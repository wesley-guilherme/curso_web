module.exports = {
    client: 'postgresql',
    connection: {
        database: 'knowledge_final',
        user: 'postgres',
        password: '123456'
    },
    pool: {
        min: 2,
        max: 60
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};