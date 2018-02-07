module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["authDatabase"] = {
        host: process.env.EndPoint_rdsAuthDatabase,
        port: 3306,
        user: "rdxxxsuser",
        password: "12345678",
        database: "authDatabase",
    };
    };