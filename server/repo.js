var mysql = require('mysql')
var credentials= {
  host     : '127.0.0.1',
  user     : 'mmoorer',
  //password : 's3kreee7',
  database : 'messageboard'
}
var dbo=(()=> {
    var connection;
    return{
        connect:()=> {
            connection= mysql.createConnection(credentials)
            return connection;
        },
      
    }
})()
module.exports = ()=> mysql.createPool(credentials)
