const express = require('express');

const app = express("frontend");

const port = process.env.PORT ||8080

app.listen(port, function (){
    console.log("my app is runnig at http://localhost:"+port)

})
