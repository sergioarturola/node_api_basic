const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones---------------------------
app.set('port', process.env.PORT || 3000);//por defecto en el port 30000
app.set('json spaces', 2);

//rutas------------------------------------
app.use(require('./routes/index'));

//configurando el listening----------------
app.listen(app.get('port'), () =>{
    console.log(`Server listening in port: ${app.get('port')}`)
});