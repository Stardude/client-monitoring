const {Client} = require('pg');
const connectionString = 'postgres://itfyjynj:7vD1GBfANwrkTPLkiO8ToH8ZQ79X68D6@pellefant.db.elephantsql.com:5432/itfyjynj';

function register() {
    const client = new Client({
        connectionString
    });

    client.connect();

    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        client.end()
      })
}

module.exports = register;